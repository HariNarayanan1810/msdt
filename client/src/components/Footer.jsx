import { Link } from 'react-router'
import logo from '../assets/Logo.png'

const footerLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Academics', href: '/#academics' },
  { label: 'Events', href: '/#events' },
  { label: 'Contact', href: '/#contact' },
]

function Footer() {
  return (
    <footer className="bg-slate-950 px-6 pt-14 text-slate-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-12 md:grid-cols-3">
          <div>
            <Link
              to="/"
              className="inline-block rounded-lg bg-white p-3"
            >
              <img
                src={logo}
                alt="Mindscribe School of Design and Technology — Home"
                className="h-auto w-52"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Design and technology learning in Coimbatore,
              combining creative thinking, practical projects,
              and mentorship.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-bold text-white">Explore</h2>

            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-bold text-white">Get in touch</h2>

            <address className="mt-5 space-y-4 text-sm not-italic leading-relaxed">
              <p>
                No.14, Sakariyar Street, Peelamedu, Hope College,
                Coimbatore, Tamil Nadu – 641004
              </p>

              <a
                href="mailto:onlystudyfansown@gmail.com"
                className="block break-all hover:text-white"
              >
                onlystudyfansown@gmail.com
              </a>

              <a href="tel:+918870622270" className="block hover:text-white">
                +91 88706 22270
              </a>
            </address>

            <a
              href="/#enquiry"
              className="mt-6 inline-block rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              Enquire Now
            </a>
          </div>
        </div>

        <p className="border-t border-slate-800 py-6 text-sm">
          © {new Date().getFullYear()} Mindscribe School of Design
          and Technology
        </p>
      </div>
    </footer>
  )
}

export default Footer