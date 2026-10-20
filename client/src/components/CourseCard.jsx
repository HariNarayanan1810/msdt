import { Link } from 'react-router'

function CourseCard({ course }) {
  const linkClass =
    'mt-auto inline-block pt-6 font-semibold text-brand underline underline-offset-4'

  return (
    <article
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-2xl border border-slate-200 bg-white shadow-sm
        transition-all duration-300 ease-out
        hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/15
        focus-within:border-brand/40 focus-within:shadow-2xl
        motion-safe:hover:-translate-y-2
        motion-safe:hover:scale-[1.02]
        motion-safe:focus-within:-translate-y-2
        motion-safe:focus-within:scale-[1.02]
        motion-reduce:transition-none
      "
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={course.image}
          alt={course.imageAlt}
          loading="lazy"
          width="1000"
          height="1000"
          className="
            h-full w-full object-cover
            transition-transform duration-500 ease-out
            motion-safe:group-hover:scale-105
            motion-safe:group-focus-within:scale-105
            motion-reduce:transition-none
          "
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">
          {course.category}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-slate-900 transition-colors group-hover:text-brand group-focus-within:text-brand">
          {course.title}
        </h3>

        <p className="mt-4 leading-relaxed text-slate-600">
          {course.description}
        </p>

        {course.path ? (
          <Link to={course.path} className={linkClass}>
            Explore Course
          </Link>
        ) : (
          <a href="#enquiry" className={linkClass}>
            Request Course Details
          </a>
        )}
      </div>
    </article>
  )
}

export default CourseCard