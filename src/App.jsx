import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import CV from "./components/SeeCv"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  const HomeWrapper = () => {
    return (
      <>
        <Home />
        <About />
        <Projects />
        <Contact />
      </>
    )
  }
  return (
    <Router>
      <div className="max-w-7xl mx-auto">
        <Header />

        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/cv" element={<CV />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
