import { useId, useRef } from 'react'
import { academicCourses } from '../data/academicCourses'

const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

function AcademicDialog({ dialogRef, title, children }) {
  const titleId = useId()

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="m-auto max-h-[85vh] w-11/12 max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 text-slate-900 shadow-xl backdrop:bg-slate-950/60 sm:p-8"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <h2 id={titleId} className="text-2xl font-bold">
          {title}
        </h2>

        <button
          type="button"
          onClick={() => dialogRef.current.close()}
          className="shrink-0 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100"
        >
          Close
        </button>
      </div>

      {children}
    </dialog>
  )
}

function AcademicsSection() {
  const brochureDialogRef = useRef(null)
  const feesDialogRef = useRef(null)

  const buttonClass =
    'mt-6 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800'

  return (
    <section
      id="academics"
      className="scroll-mt-36 bg-slate-50 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-widest text-brand">
          Academics
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Plan your next step.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Course Brochures
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Browse the course brochure list for Mindscribe’s
              design and technology programs.
            </p>

            <button
              type="button"
              onClick={() => brochureDialogRef.current.showModal()}
              className={buttonClass}
            >
              View Brochures
            </button>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Course Fees
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              View listed course durations, fees, and lump-sum
              payment amounts.
            </p>

            <button
              type="button"
              onClick={() => feesDialogRef.current.showModal()}
              className={buttonClass}
            >
              View Fee Structure
            </button>
          </article>
        </div>
      </div>

      <AcademicDialog
        dialogRef={brochureDialogRef}
        title="Course Brochures"
      >
        <p className="mb-6 text-sm leading-relaxed text-slate-600">
          Brochure downloads are not enabled in this preview.
        </p>

        <ul className="space-y-4">
          {academicCourses.map((course) => (
            <li
              key={course.id}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <h3 className="font-semibold leading-relaxed">
                {course.title}
              </h3>

              <button
                type="button"
                disabled
                aria-label={`Download brochure for ${course.title}`}
                className="shrink-0 cursor-not-allowed rounded-lg bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500"
              >
                Download
              </button>
            </li>
          ))}
        </ul>
      </AcademicDialog>

      <AcademicDialog
        dialogRef={feesDialogRef}
        title="Course Fee Structure"
      >
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Course durations, listed fees, and lump-sum payment amounts
            </caption>

            <thead className="bg-brand text-white">
              <tr>
                <th scope="col" className="p-4">S.No</th>
                <th scope="col" className="p-4">Course Name</th>
                <th scope="col" className="p-4">Duration</th>
                <th scope="col" className="p-4">Course Fee</th>
                <th scope="col" className="p-4">Lump-sum Fee</th>
              </tr>
            </thead>

            <tbody>
              {academicCourses.map((course, index) => (
                <tr
                  key={course.id}
                  className="border-t border-slate-200 even:bg-slate-50"
                >
                  <td className="p-4">{index + 1}</td>

                  <th
                    scope="row"
                    className="p-4 font-medium text-slate-700"
                  >
                    {course.title}
                  </th>

                  <td className="whitespace-nowrap p-4">
                    {course.duration}
                  </td>

                  <td className="whitespace-nowrap p-4">
                    {currency.format(course.fee)}
                  </td>

                  <td className="whitespace-nowrap p-4">
                    {currency.format(course.lumpSum)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-slate-600">
          Confirm current fees, payment offers, and batch schedules
          with admissions before enrolling.
        </p>
      </AcademicDialog>
    </section>
  )
}

export default AcademicsSection