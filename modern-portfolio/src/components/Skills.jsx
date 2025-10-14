import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      icon: 'bi-code-slash',
      title: 'Desenvolvimento Front-end',
      description: 'HTML5, CSS3, JavaScript moderno, Bootstrap, CSS e integração com APIs.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Qualidade de Software',
      description: 'Selenium (Java), Cypress, Tosca, automação de testes e garantia de qualidade.'
    },
    {
      icon: 'bi-cloud',
      title: 'Infraestrutura & DevOps',
      description: 'AWS, Git/GitHub, Maven e boas práticas de segurança (ISO 27001).'
    },
    {
      icon: 'bi-palette',
      title: 'Design UX/UI',
      description: 'Interfaces intuitivas, esteticamente atraentes e centradas na experiência do usuário.'
    }
  ];

  return (
    <section id="skills" className="w-full py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4">Minhas Skills</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tecnologias que domino e utilizo para criar soluções digitais impressionantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <i className={`bi ${skill.icon} text-6xl text-white mb-6`}></i>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
