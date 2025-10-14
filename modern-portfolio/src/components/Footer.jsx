import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Column */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="/assets/img/logonovapng.png" alt="Vinicius Pereira - Logo" className="w-32 h-auto mb-4" />
            <p className="text-gray-400 text-center md:text-left">Arquitetura de Experiências Digitais</p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/ninicius_" target="_blank" className="text-gray-400 hover:text-white">
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a href="https://github.com/ViniciusPereira-coder" target="_blank" className="text-gray-400 hover:text-white">
                <i className="bi bi-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/vinicius-de-moraes-10b50b151/" target="_blank" className="text-gray-400 hover:text-white">
                <i className="bi bi-linkedin text-xl"></i>
              </a>
              <a href="https://wa.me/5511930246426" target="_blank" className="text-gray-400 hover:text-white">
                <i className="bi bi-whatsapp text-xl"></i>
              </a>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a>
              <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
            </nav>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="flex flex-col gap-2 text-gray-400">
              <p><i className="bi bi-envelope mr-2"></i> vinicius.moraespereira021@gmail.com</p>
              <p><i className="bi bi-whatsapp mr-2"></i> (11) 9 3022-2977</p>
              <p><i className="bi bi-geo-alt mr-2"></i> São Paulo, Brasil</p>
            </div>
          </motion.div>

          {/* Newsletter Column (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Receba dicas e novidades sobre desenvolvimento web.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black py-2 rounded font-semibold hover:bg-gray-200 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Vinicius Pereira. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
