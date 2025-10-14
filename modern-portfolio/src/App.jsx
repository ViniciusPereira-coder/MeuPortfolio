import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO />
        <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
