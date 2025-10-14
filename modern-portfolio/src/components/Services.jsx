import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento Web Personalizado',
      icon: 'bi-layout-text-window'
    },
    {
      title: 'Automação de Testes de Software',
      icon: 'bi-robot'
    },
    {
      title: 'Landing Pages de Alta Conversão',
      icon: 'bi-megaphone'
    },
    {
      title: 'Debug & Soluções',
      icon: 'bi-bug-fill'
    },
    {
      title: 'Consultoria em Qualidade de Software',
      icon: 'bi-graph-up-arrow'
    },
    {
      title: 'Otimização de Performance',
      icon: 'bi-speedometer2'
    }
  ];

  return (
    <section id="servicos" className="w-full py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4">Serviços</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Trabalho com excelência porque entendo que qualidade não é um diferencial — é o mínimo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300 ${index % 2 === 0 ? 'md:col-span-1' : 'md:col-span-1'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <i className={`bi ${service.icon} text-6xl text-white mb-6`}></i>
              <h1 className="text-xl font-semibold text-white">{service.title}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
