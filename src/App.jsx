import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import CV from "./components/SeeCv";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const HomeWrapper = () => {
    return (
      <>
        <Home />
        <About />
        <Projects />
        <Contact />
      </>
    );
  };
  return (
    <Router>
      <div className="flex sticky top-0 z-20 justify-center items-center w-full bg-[#021320] shadow-lg shadow-[#090b1b]">
        <Header />
      </div>
      <div className="mx-auto max-w-7xl">
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/cv" element={<CV />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
