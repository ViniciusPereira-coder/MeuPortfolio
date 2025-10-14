import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full p-6 flex items-center justify-between z-50 bg-black/90 backdrop-blur-md">
      <div className="logo">
        <img src="/assets/img/logonovapng.png" alt="Logo" className="w-40 h-auto" />
      </div>
      <div className="menu">
        <label className="hamburger cursor-pointer">
          <input type="checkbox" id="menuToggle" onChange={toggleMenu} />
          <svg viewBox="0 0 32 32" className="h-12 transition-transform duration-600">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </div>
      <motion.nav
        className={`menu-aberto fixed left-0 top-0 h-0 w-full z-40 flex items-center justify-center overflow-hidden bg-black transition-all duration-500 ${isMenuOpen ? 'h-screen opacity-100' : 'opacity-0'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={isMenuOpen ? { height: '100vh', opacity: 1 } : { height: 0, opacity: 0 }}
      >
        <div className="nav-menu flex flex-col items-center justify-center gap-16">
          <a href="#inicio" className="text-white text-6xl font-bold opacity-0 transform translate-y-5 transition-all duration-500 hover:text-gray-300" style={{ animationDelay: '0.1s' }}>INÍCIO</a>
          <a href="#sobre" className="text-white text-6xl font-bold opacity-0 transform translate-y-5 transition-all duration-500 hover:text-gray-300" style={{ animationDelay: '0.2s' }}>SOBRE</a>
          <a href="#servicos" className="text-white text-6xl font-bold opacity-0 transform translate-y-5 transition-all duration-500 hover:text-gray-300" style={{ animationDelay: '0.3s' }}>SERVIÇOS</a>
          <a href="#portfolio" className="text-white text-6xl font-bold opacity-0 transform translate-y-5 transition-all duration-500 hover:text-gray-300" style={{ animationDelay: '0.4s' }}>PORTFOLIO</a>
          <a href="#contato" className="text-white text-6xl font-bold opacity-0 transform translate-y-5 transition-all duration-500 hover:text-gray-300" style={{ animationDelay: '0.5s' }}>CONTATO</a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
