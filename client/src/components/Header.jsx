import { useRef, useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/Logo.png'

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  {
    label: 'Courses',
    children: [
      { label: 'All programs', to: '/#courses' },
      { label: 'UX/UI Design', to: '/courses/ux-ui-design' },
      { label: 'Graphic Design enquiries', to: '/#enquiry' },
      { label: 'MERN Full Stack enquiries', to: '/#enquiry' },
    ],
  },
  { label: 'Academics', to: '/#academics' },
  { label: 'Events', to: '/#events' },
  { label: 'Contact', to: '/#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const coursesRef = useRef(null)

  function closeMenus() {
    setMenuOpen(false)

    if (coursesRef.current) {
      coursesRef.current.open = false
    }
  }

  function toggleMobileMenu() {
    if (menuOpen) {
      closeMenus()
    } else {
      setMenuOpen(true)
    }
  }

  function handleDropdownBlur(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      event.currentTarget.open = false
    }
  }

  function handleDropdownKeyDown(event) {
    if (event.key === 'Escape') {
      event.currentTarget.open = false
      event.currentTarget.querySelector('summary')?.focus()
    }
  }

  const linkClass =
    'rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-brand'

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          to="/"
          onClick={closeMenus}
          className="block max-w-[65%] shrink-0"
        >
          <img
            src={logo}
            alt="Mindscribe School of Design and Technology — Home"
            className="h-auto w-52 sm:w-60"
          />
        </Link>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="navigation-links"
          onClick={toggleMobileMenu}
          className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 lg:hidden"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <div
          id="navigation-links"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } w-full flex-col gap-2 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-2`}
        >
          {navigationLinks.map((link) =>
            link.children ? (
              <details
                key={link.label}
                ref={coursesRef}
                onBlur={handleDropdownBlur}
                onKeyDown={handleDropdownKeyDown}
                className="group relative"
              >
                <summary
                  className={`${linkClass} flex cursor-pointer list-none items-center gap-2`}
                >
                  {link.label}

                  <span
                    aria-hidden="true"
                    className="transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 rounded-xl border border-slate-200 bg-white p-2 shadow-lg lg:absolute lg:left-0 lg:top-full lg:w-72">
                  {link.children.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        onClick={closeMenus}
                        className={`${linkClass} block`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenus}
                className={linkClass}
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            to="/#enquiry"
            onClick={closeMenus}
            className="rounded-lg bg-brand px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-800"
          >
            Enquire Now
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header