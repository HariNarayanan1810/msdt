import express from 'express'
import { createHash } from 'node:crypto'
import { z } from 'zod'
import { db } from './db.js'
import { existsSync } from 'node:fs'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const app = express()

app.disable('x-powered-by')
app.use(express.json({ limit: '10kb' }))

const allowedCourses = [
  'Master Certification in Design & Technology',
  'Master Certification in Multimedia Design',
  'Advanced Certification in Graphic Design',
  'Advanced Certification in UX/UI Design',
  'Advanced Certification in UI Development',
  'Advanced Certification in Video Editing & Animation',
  'Advanced Certification in MERN – Full Stack',
  'Advanced Certification in Python – Full Stack',
  'Advanced Certification in Data Analytics',
]

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(80),

  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, 'Enter a 10-digit phone number'),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .max(254)
    .pipe(z.email()),

  course: z.enum(allowedCourses),

  message: z.string().trim().max(2000).optional().default(''),
})

const findDuplicate = db.prepare(`
  SELECT id
  FROM enquiries
  WHERE submission_hash = ?
    AND created_at >= datetime('now', '-10 minutes')
  LIMIT 1
`)

const insertEnquiry = db.prepare(`
  INSERT INTO enquiries (
    name, phone, email, course, message, submission_hash
  )
  VALUES (?, ?, ?, ?, ?, ?)
`)

app.get('/api/health', (req, res) => {
  db.prepare('SELECT 1').get()

  res.json({
    status: 'ok',
    database: 'connected',
  })
})

app.post('/api/enquiries', (req, res) => {
  if (!req.is('application/json')) {
    return res.status(415).json({
      message: 'Send the enquiry as application/json.',
    })
  }

  const result = enquirySchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({
      message: 'Please check the submitted fields.',
      errors: result.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    })
  }

  const { name, phone, email, course, message } = result.data

  const submissionHash = createHash('sha256')
    .update(
      JSON.stringify([
        name.toLowerCase(),
        phone,
        email,
        course,
        message,
      ])
    )
    .digest('hex')

  if (findDuplicate.get(submissionHash)) {
    return res.status(409).json({
      message:
        'This enquiry was already submitted recently. Please wait before sending it again.',
    })
  }

  const saved = insertEnquiry.run(
    name,
    phone,
    email,
    course,
    message,
    submissionHash
  )

  return res.status(201).json({
    message: 'Your enquiry has been saved successfully.',
    enquiryId: Number(saved.lastInsertRowid),
  })
})

const frontendDirectory = fileURLToPath(
  new URL('../../client/dist/', import.meta.url)
)

const frontendIndex = join(frontendDirectory, 'index.html')

app.use(express.static(frontendDirectory))

app.get('/{*path}', (req, res, next) => {
  const isApiRequest =
    req.path === '/api' || req.path.startsWith('/api/')

  const isFileRequest = Boolean(extname(req.path))

  if (
    isApiRequest ||
    isFileRequest ||
    !req.accepts('html') ||
    !existsSync(frontendIndex)
  ) {
    return next()
  }

  res.sendFile(frontendIndex)
})

app.use((req, res) => {
  res.status(404).json({
    message: 'API endpoint not found.',
  })
})

app.use((error, req, res, next) => {
  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({
      message: 'The request contains invalid JSON.',
    })
  }

  if (error.type === 'entity.too.large') {
    return res.status(413).json({
      message: 'The request is too large.',
    })
  }

  console.error('API error:', error.message)

  return res.status(500).json({
    message: 'Something went wrong. Please try again later.',
  })
})