import { db } from './db.js'

try {
  const enquiries = db.prepare(`
    SELECT
      id,
      name,
      phone,
      email,
      course,
      message,
      created_at
    FROM enquiries
    ORDER BY id DESC
    LIMIT 50
  `).all()

  if (enquiries.length === 0) {
    console.log('No enquiries have been submitted yet.')
  } else {
    console.table(enquiries)
  }
} finally {
  db.close()
}