import { motion } from 'framer-motion';
import { useState } from 'react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      id: 1,
      title: 'LANDING PAGE',
      description: 'Desenvolvimento de landing page responsiva para campanha de marketing digital, com foco em alta conversão e performance otimizada.',
      tag: 'Front-end',
      images: ['/assets/img/projeto1-1.png', '/assets/img/projeto1-2.png', '/assets/img/projeto1-3.png']
    },
    {
      id: 2,
      title: 'Cypress',
      description: 'Especializado em testes automatizados com Cypress, assegurando aplicações web estáveis e eficientes.',
      tag: 'QA Automation',
      images: ['/assets/img/projeto2-1.png', '/assets/img/projeto2-2.png', '/assets/img/projeto2-3.png']
    },
    {
      id: 3,
      title: 'A colocar algo',
      description: 'To pensando o que eu vou colocar',
      tag: 'Web Design',
      images: ['/assets/img/projeto3-1.png', '/assets/img/projeto3-2.png', '/assets/img/projeto3-3.png']
    },
    {
      id: 4,
      title: 'Eu tambem to pensando no que colcoar',
      description: 'Socorro Deus',
      tag: 'Front-end',
      images: ['/assets/img/projeto4-1.png', '/assets/img/projeto4-2.png', '/assets/img/projeto4-3.png']
    }
  ];

  const nextSlide = (caseId) => {
    const caseIndex = cases.findIndex(c => c.id === caseId);
    const images = cases[caseIndex].images;
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (caseId) => {
    const caseIndex = cases.findIndex(c => c.id === caseId);
    const images = cases[caseIndex].images;
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="portfolio" className="w-full py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">Portfolio</h1>
          <span className="text-lg text-gray-300">
            Alguns dos projetos que desenvolvi, unindo precisão técnica e sensibilidade criativa.
          </span>
        </motion.div>

        <div className="space-y-16">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={caseItem.images[currentSlide]}
                    alt={`Projeto ${caseItem.id}`}
                    className="w-full h-96 object-cover"
                  />
                  <button
                    onClick={() => prevSlide(caseItem.id)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button
                    onClick={() => nextSlide(caseItem.id)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 text-white">
                <h1 className="text-3xl font-bold mb-4">{caseItem.title}</h1>
                <p className="text-gray-300 mb-4">{caseItem.description}</p>
                <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">{caseItem.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
