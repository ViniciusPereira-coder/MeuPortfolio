import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Hero = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section id="inicio" className="relative w-full h-screen flex items-center justify-center px-4 pt-24">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-light mb-4">Vinicius Pereira</h1>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-thin mb-8">Arquiteto de Experiências Digitais</h1>
        </motion.div>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Transformo ideias em sistemas que funcionam, páginas que encantam e testes que asseguram confiança. Cada projeto carrega uma entrega acima do esperado.
        </motion.p>
        <motion.a
          href="#contato"
          className="inline-block px-8 py-4 border border-white text-white font-light text-lg hover:bg-white hover:text-black transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span>Fale Comigo</span>
          <svg className="inline ml-2 w-4 h-3" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
