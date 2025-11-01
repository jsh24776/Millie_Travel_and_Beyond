import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // persist preference
    try { localStorage.setItem('camille:dark', JSON.stringify(darkMode)); } catch (e) {}
  }, [darkMode]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('camille:dark'));
      if (typeof stored === 'boolean') setDarkMode(stored);
    } catch (e) {}
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Destinations />
      <Packages />
      <Testimonials />
      <Contact />
      <footer className="text-center py-6 border-t mt-12 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} Camille Travel Agency. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
