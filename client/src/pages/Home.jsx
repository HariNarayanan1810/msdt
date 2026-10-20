import CourseCard from '../components/CourseCard'
import EnquiryForm from '../components/EnquiryForm'
import AcademicsSection from '../components/AcademicsSection'

import bannerImage from '../assets/home-banner-image.png'
import aboutImage from '../assets/about-img-2.jpeg'
import eventImage from '../assets/mindscribe-academic-events.png'
import culturalImage from '../assets/cultural-img-1.png'
import sportsImage from '../assets/sports-img-1.png'

import uxImage from '../assets/ux-ui-bg-image.jpg'
import graphicImage from '../assets/gd-bg-image.jpg'
import developmentImage from '../assets/front-end-bg-image.jpg'

const campusEvents = [
  {
    title: 'Academic Events',
    image: eventImage,
    alt: 'A group attending a presentation',
  },
  {
    title: 'Cultural Events',
    image: culturalImage,
    alt: 'Musicians performing together',
  },
  {
    title: 'Sports Events',
    image: sportsImage,
    alt: 'A sports team celebrating with a trophy',
  },
]

const courses = [
  {
    title: 'UX/UI Design',
    category: 'Design',
    description:
      'Explore user research, wireframing, visual design, and interactive prototypes.',
    image: uxImage,
    imageAlt: 'A group discussing digital product designs',
    path: '/courses/ux-ui-design',
  },
  {
    title: 'Graphic Design',
    category: 'Design',
    description:
      'Explore Mindscribe’s Advanced Certification in Graphic Design.',
    image: graphicImage,
    imageAlt: 'A group working with layouts and colour palettes',
  },
  {
    title: 'MERN Full Stack',
    category: 'Technology',
    description:
      'Explore Mindscribe’s Advanced Certification in MERN Full Stack.',
    image: developmentImage,
    imageAlt: 'Developers working with code on computer screens',
  },
]

const benefits = [
  {
    title: 'Practical learning',
    description:
      'Develop your understanding through assignments, case studies, and project work.',
  },
  {
    title: 'Mentor guidance',
    description:
      'Learn through feedback, design reviews, and guidance from experienced professionals.',
  },
  {
    title: 'Career preparation',
    description:
      'Build your portfolio and prepare for interviews with career mentoring.',
  },
]

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-widest text-brand">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-slate-950">
        <img
          src={bannerImage}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />

        <div className="mx-auto max-w-7xl px-6 py-24 text-white lg:py-36">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Mindscribe School of Design and Technology
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Design the Foundation.
            <span className="block text-blue-300">
              Build the Future.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
            Explore design and technology programs in Coimbatore.
            Build your skills through creative thinking,
            practical projects, and mentorship.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="rounded-lg bg-brand px-6 py-3 font-semibold hover:bg-blue-800"
            >
              Explore Courses
            </a>

            <a
              href="#enquiry"
              className="rounded-lg border border-white/50 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Enquire Now
            </a>
          </div>

          <p className="mt-12 border-t border-white/20 pt-6 text-sm text-slate-300">
            Design &amp; Technology · Practical Learning · Coimbatore
          </p>
        </div>
      </section>

      <section
        aria-label="UX/UI tools"
        className="border-b border-slate-200 bg-white px-6 py-8"
      >
        {/* <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <p className="text-sm font-semibold text-slate-600">
            Explore the UX/UI toolkit
          </p>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 font-bold text-slate-800">
            {['Figma', 'FigJam', 'Balsamiq', 'Marvel'].map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div> */}
      </section>

      <section
        id="courses"
        className="scroll-mt-36 bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our programs"
            title="Find your creative or technical direction."
          />

          <p className="mt-5 max-w-2xl leading-relaxed text-slate-600">
            Discover programs at Mindscribe and take the next step
            in your learning journey.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-36 px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-blue-50 p-8">
            <img
              src={aboutImage}
              alt="Mindscribe reception with the institute’s logo"
              loading="lazy"
              className="mx-auto h-96 max-w-full rounded-xl object-contain"
            />
          </div>

          <div>
            <SectionTitle
              eyebrow="About Mindscribe"
              title="Where creativity meets technology."
            />

            <p className="mt-6 leading-relaxed text-slate-600">
              Mindscribe School of Design and Technology is a
              design and technology institute in Coimbatore,
              offering programs in Graphic Design, UI/UX Design,
              Full Stack Development, and Animation.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              Learning combines creative thinking, real-world
              problem solving, practical projects, and mentorship.
            </p>

            <a
              href="#enquiry"
              className="mt-7 inline-block font-semibold text-brand underline underline-offset-4"
            >
              Discuss your learning goals
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
            The learning experience
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Learn. Practice. Build confidence.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-700 p-6"
              >
                <p className="text-sm font-bold text-blue-300">
                  0{index + 1}
                </p>

                <h3 className="mt-5 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-300">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AcademicsSection />

      <section
  id="events"
  className="scroll-mt-36 overflow-hidden bg-brand px-6 py-20 text-white"
>
  <div className="mx-auto max-w-7xl">
    <div className="grid items-end gap-6 md:grid-cols-2">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
          Beyond the classroom
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Campus Life.
        </h2>
      </div>

      <p className="max-w-md leading-relaxed text-blue-100 md:justify-self-end">
        Explore the academic, cultural, and sporting sides
        of the Mindscribe community.
      </p>
    </div>

    <ul className="mt-12 grid gap-8 md:grid-cols-3">
      {campusEvents.map((event) => (
        <li
          key={event.title}
          className="
            group min-w-0
            motion-safe:transition-transform
            motion-safe:duration-300
            motion-safe:ease-out
            motion-safe:hover:-translate-y-2
          "
        >
          <div
            className="
              aspect-[4/3] overflow-hidden rounded-2xl
              shadow-lg transition-shadow duration-300
              group-hover:shadow-2xl
              motion-reduce:transition-none
            "
          >
            <img
              src={event.image}
              alt={event.alt}
              loading="lazy"
              className="
                h-full w-full object-cover
                transition-transform duration-500 ease-out
                motion-safe:group-hover:scale-105
                motion-reduce:transition-none
              "
            />
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight">
            {event.title}
          </h3>
        </li>
      ))}
    </ul>
  </div>
</section>

      <section className="bg-blue-50 px-6 py-16">
        <figure className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            A student’s experience
          </p>

          <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-slate-900 md:text-3xl">
            “The instructors are highly skilled, patient,
            and always ready to help.”
          </blockquote>

          <figcaption className="mt-6 text-slate-600">
            Vinitha · UX/UI Design
          </figcaption>
        </figure>
      </section>

      <section
        id="contact"
        className="scroll-mt-36 bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Start a conversation"
              title="What would you like to learn?"
            />

            <p className="mt-6 leading-relaxed text-slate-600">
              Submit your questions about courses, admissions,
              fees, or learning modes.
            </p>

            <address className="mt-8 space-y-5 not-italic text-slate-700">
              <p>
                No.14, Sakariyar Street, Peelamedu, Hope College,
                Coimbatore, Tamil Nadu – 641004
              </p>

              <a
                href="tel:+918870622270"
                className="block font-semibold text-brand underline underline-offset-4"
              >
                +91 88706 22270
              </a>

              <a
                href="mailto:onlystudyfansown@gmail.com"
                className="block break-all font-semibold text-brand underline underline-offset-4"
              >
                onlystudyfansown@gmail.com
              </a>
            </address>
          </div>

          <div id="enquiry" className="scroll-mt-36">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Course Enquiry
            </h2>

            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
