import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import CoursePage from './pages/CoursePage'
import Footer from './components/Footer'
import ScrollToLocation from './components/ScrollToLocation'

function App() {
  return (
    <BrowserRouter>
    <ScrollToLocation />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/courses/ux-ui-design"
          element={<CoursePage />}
        />

        <Route
          path="*"
          element={
            <main className="mx-auto max-w-7xl px-6 py-20">
              <h1 className="text-3xl font-bold text-slate-900">
                Page not found
              </h1>

              <Link
                to="/"
                className="mt-6 inline-block font-semibold text-brand underline"
              >
                Return to Home
              </Link>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App