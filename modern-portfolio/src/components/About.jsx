import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre" className="w-full min-h-screen flex items-center justify-center px-4 py-24 bg-black">
      <div className="max-w-6xl w-full">
        {/* Headline */}
        <motion.div
          className="overflow-hidden flex items-center justify-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex whitespace-nowrap">
            <span className="text-4xl md:text-6xl font-bold text-white mx-4 animate-pulse">QUALIDADE</span>
            <span className="text-4xl md:text-6xl font-light text-gray-400 mx-4">INOVAÇÃO</span>
            <span className="text-4xl md:text-6xl font-bold text-white mx-4 animate-pulse">PRECISÃO</span>
            <span className="text-4xl md:text-6xl font-light text-gray-400 mx-4">CRIATIVIDADE</span>
            <span className="text-4xl md:text-6xl font-bold text-white mx-4 animate-pulse">EXCELÊNCIA</span>
            <span className="text-4xl md:text-6xl font-light text-gray-400 mx-4">TECNOLOGIA</span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6">Olá, me chamo Vinicius Pereira</h1>
            <p className="text-lg text-gray-300 mb-8">
              Especialista em Qualidade de Software e desenvolvimento front-end, combino visão técnica com paixão por inovação para criar experiências digitais marcantes e funcionais.
            </p>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/ninicius_?igsh=NndmeDR0cjJ1azFo&utm_source=qr" target="_blank" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700">
                INSTAGRAM <span className="text-xl">→</span>
              </a>
              <a href="https://github.com/ViniciusPereira-coder" target="_blank" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700">
                GITHUB <span className="text-xl">→</span>
              </a>
              <a href="https://www.linkedin.com/in/vinicius-de-moraes-10b50b151/r" target="_blank" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700">
                LINKEDIN <span className="text-xl">→</span>
              </a>
              <a href="https://wa.me/5511930222977" target="_blank" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700">
                WHATSAPP <span className="text-xl">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <img
                src="/assets/img/Trocando foto.jpg"
                alt="Vinicius Pereira"
                className="w-96 h-96 object-cover rounded-full border-4 border-gray-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
