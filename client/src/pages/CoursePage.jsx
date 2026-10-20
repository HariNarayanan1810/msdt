import { Link } from 'react-router'
import { uxUiCourse as course } from '../data/uxUiCourse'
import courseImage from '../assets/UI Design.jpg'
import EnquiryForm from '../components/EnquiryForm'

const cardHoverEffect = `
  transition-all duration-300 ease-out
  hover:border-brand/40 hover:shadow-xl hover:shadow-brand/15
  motion-safe:hover:-translate-y-2
  motion-safe:hover:scale-[1.02]
  motion-reduce:transition-none
`


function CourseSection({ id, eyebrow, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-36 border-b border-slate-200 py-14"
    >
      <p className="text-sm font-bold uppercase tracking-widest text-brand">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      <div className="mt-8">{children}</div>
    </section>
  )
}

function CoursePage() {
  return (
    <main>
      <section className="bg-slate-950 px-6 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="underline underline-offset-4">
                  Home
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li aria-current="page">UX/UI Design</li>
            </ol>
          </nav>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
                Design the Foundation. Build the Future.
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {course.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                {course.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#enquiry"
                  className="rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-blue-800"
                >
                  Enquire Now
                </a>

                <a
                  href="#curriculum"
                  className="rounded-lg border border-slate-500 px-6 py-3 font-semibold hover:bg-slate-800"
                >
                  Explore Curriculum
                </a>
              </div>
            </div>

            <img
              src={courseImage}
              alt="UX/UI Design course at Mindscribe"
              className="w-full rounded-2xl"
            />
          </div>

         
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <CourseSection
          id="overview"
          eyebrow="Program overview"
          title="Learn the complete product design workflow."
        >
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            {course.overview}
          </p>
        </CourseSection>

        <CourseSection
          id="outcomes"
          eyebrow="Learning outcomes"
          title="What you’ll learn."
        >
          <ul className="grid gap-4 md:grid-cols-2">
            {course.outcomes.map((outcome) => (
              <li
                key={outcome}
                className={`
                  rounded-xl border border-slate-200 bg-slate-50
                  p-5 font-medium leading-relaxed text-slate-700
                  hover:bg-white
                  ${cardHoverEffect}
                `}
              >
                {outcome}
              </li>
            ))}
          </ul>
        </CourseSection>

        <CourseSection
          id="curriculum"
          eyebrow="Course roadmap"
          title="From foundations to your final portfolio."
        >
          <div className="space-y-3">
            {course.modules.map((module, index) => (
              <details
                key={module.title}
                className="group rounded-xl border border-slate-200 bg-white"
              >
                <summary className="cursor-pointer rounded-xl p-5 font-semibold text-slate-900 hover:bg-blue-50">
                  <span className="mr-3 text-brand">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {module.title}
                </summary>

                <ul className="ml-10 list-disc space-y-3 px-5 pb-6 text-slate-600">
                  {module.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </CourseSection>

        <CourseSection
          id="tools"
          eyebrow="Tools and technologies"
          title="Build your design toolkit."
        >
          <ul className="flex flex-wrap gap-3">
            {course.tools.map((tool) => (
              <li
                key={tool}
                className="
                  rounded-full border border-blue-200 bg-blue-50
                  px-5 py-3 font-semibold text-brand
                  transition-all duration-300 ease-out
                  hover:border-brand hover:bg-brand hover:text-white
                  hover:shadow-lg hover:shadow-brand/20
                  motion-safe:hover:-translate-y-1
                  motion-safe:hover:scale-105
                  motion-reduce:transition-none
                "
              >
                {tool}
              </li>
            ))}
          </ul>
        </CourseSection>

        <CourseSection
          id="projects"
          eyebrow="Practical learning"
          title="Bring your skills together in a capstone project."
        >
          <p className="max-w-3xl leading-relaxed text-slate-600">
            Apply the course workflow to an end-to-end product design
            project, from understanding the problem to presenting
            your final solution.
          </p>

          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {course.projectStages.map((stage, index) => (
              <li
                key={stage}
                className="rounded-xl bg-slate-950 p-6 text-white"
              >
                <span className="text-sm font-bold text-blue-300">
                  STEP {index + 1}
                </span>

                <p className="mt-3 leading-relaxed">{stage}</p>
              </li>
            ))}
          </ol>
        </CourseSection>
        <CourseSection
  id="duration-mode"
  eyebrow="Course details"
  title="Duration and learning mode."
>
  <dl className="grid gap-6 sm:grid-cols-2">
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <dt className="text-sm font-semibold uppercase tracking-widest text-brand">
        Course duration
      </dt>

      <dd className="mt-3 text-2xl font-bold text-slate-900">
        {course.duration}
      </dd>
    </div>

    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
      <dt className="text-sm font-semibold uppercase tracking-widest text-brand">
        Learning mode
      </dt>

      <dd className="mt-3 text-2xl font-bold text-slate-900">
        {course.mode}
      </dd>
    </div>
  </dl>
</CourseSection>

        <CourseSection
          id="careers"
          eyebrow="Career opportunities"
          title="Explore your next direction."
        >
          <p className="max-w-3xl leading-relaxed text-slate-600">
            The program develops skills relevant to these design roles.
          </p>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {course.careers.map((career) => (
              <li
                key={career}
                className={`
                  rounded-xl border border-slate-200 bg-white
                  p-5 font-semibold text-slate-900
                  hover:text-brand
                  ${cardHoverEffect}
                `}
              >
                {career}
              </li>
            ))}
          </ul>
        </CourseSection>

        <CourseSection
          id="faqs"
          eyebrow="Common questions"
          title="Before you begin."
        >
          <div className="space-y-3">
            {course.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-slate-200"
              >
                <summary className="cursor-pointer rounded-xl p-5 font-semibold text-slate-900 hover:bg-blue-50">
                  {faq.question}
                </summary>

                <p className="px-5 pb-5 leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </CourseSection>

        <CourseSection
          id="enquiry"
          eyebrow="Course enquiry"
          title="Ask about this program."
        >
          <EnquiryForm defaultCourse={course.title} />
        </CourseSection>

      </div>

      <section className="bg-brand px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
            Take your first step into UX/UI Design.
          </h2>

          <p className="mt-5 max-w-2xl leading-relaxed text-blue-100">
            Speak with Mindscribe about the curriculum, fees,
            duration, and available batches.
          </p>

          <a
            href="#enquiry"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-brand hover:bg-blue-50"
          >
            Contact Admissions
          </a>
        </div>
      </section>
    </main>
  )
}

export default CoursePage
