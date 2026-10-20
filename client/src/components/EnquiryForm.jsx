import { useId, useState } from 'react'
import { uxUiCourse } from '../data/uxUiCourse'

const courseOptions = [
  uxUiCourse.title,
  'Advanced Certification in Graphic Design',
  'Advanced Certification in MERN – Full Stack',
]

const fields = [
  {
    name: 'name',
    label: 'Full name',
    type: 'text',
    autoComplete: 'name',
    minLength: 2,
    maxLength: 80,
  },
  {
    name: 'phone',
    label: 'Phone number — 10 digits',
    type: 'tel',
    autoComplete: 'tel-national',
    inputMode: 'numeric',
    pattern: '[0-9]{10}',
    minLength: 10,
    maxLength: 10,
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    autoComplete: 'email',
    maxLength: 254,
  },
]

function EnquiryForm({ defaultCourse = '' }) {
  const formId = useId()

  const [feedback, setFeedback] = useState({
    type: 'idle',
    message: '',
  })

  const isSubmitting = feedback.type === 'loading'

  const inputClass =
    'mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20'

  async function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form))

    setFeedback({
      type: 'loading',
      message: 'Submitting your enquiry...',
    })

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      })

      const result = await response.json()

      if (!response.ok) {
        const message = result.errors?.length
          ? result.errors
              .map((error) => `${error.field}: ${error.message}`)
              .join(' ')
          : result.message || 'Unable to submit your enquiry.'

        setFeedback({
          type: 'error',
          message,
        })

        return
      }

      setFeedback({
        type: 'success',
        message: `${result.message} Reference number: ${result.enquiryId}.`,
      })

      form.reset()
    } catch {
      setFeedback({
        type: 'error',
        message:
          'We could not confirm your submission. Please check your connection and try again.',
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm md:p-8"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600">
        Fields marked * are required.
      </p>

      <fieldset disabled={isSubmitting} className="space-y-5">
        <legend className="sr-only">Course enquiry details</legend>

        <div className="grid gap-5 md:grid-cols-2">
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={`${formId}-${field.name}`}
                className="block text-sm font-semibold"
              >
                {field.label} *
              </label>

              <input
                {...field}
                id={`${formId}-${field.name}`}
                required
                className={inputClass}
              />
            </div>
          ))}

          <div>
            <label
              htmlFor={`${formId}-course`}
              className="block text-sm font-semibold"
            >
              Course *
            </label>

            <select
              id={`${formId}-course`}
              name="course"
              defaultValue={defaultCourse}
              required
              className={inputClass}
            >
              <option value="">Select a course</option>

              {courseOptions.map((courseTitle) => (
                <option key={courseTitle} value={courseTitle}>
                  {courseTitle}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor={`${formId}-message`}
            className="block text-sm font-semibold"
          >
            Your message
          </label>

          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            maxLength={2000}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-blue-800 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
        </button>
      </fieldset>

      <p
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`mt-5 text-sm leading-relaxed ${
          feedback.type === 'error'
            ? 'text-red-700'
            : feedback.type === 'success'
              ? 'text-green-700'
              : 'text-slate-600'
        }`}
      >
        {feedback.message}
      </p>
    </form>
  )
}

export default EnquiryForm
