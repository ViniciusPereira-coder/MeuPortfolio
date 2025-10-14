import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contato" className="w-full py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-light text-white mb-4">Vamos construir algo incrível juntos</h2>
            <p className="text-gray-300 mb-8">
              Se você busca um profissional que entrega soluções completas e não apenas códigos, estou pronto para transformar seu projeto digital.
            </p>
            <form
              action="https://formsubmit.co/vinicius.moraespereira021@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <div className="relative">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  required
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none py-2"
                />
                <label htmlFor="nome" className="absolute left-0 top-2 text-gray-400 transition-all duration-300">
                  Seu nome completo
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none py-2"
                />
                <label htmlFor="email" className="absolute left-0 top-2 text-gray-400 transition-all duration-300">
                  Seu melhor e-mail
                </label>
              </div>
              <div className="relative">
                <textarea
                  name="mensagem"
                  id="mensagem"
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none py-2 resize-none"
                ></textarea>
                <label htmlFor="mensagem" className="absolute left-0 top-2 text-gray-400 transition-all duration-300">
                  Descreva seu projeto ou necessidade
                </label>
              </div>
              <input type="hidden" name="_next" value="https://seusite.com/obrigado.html" />
              <input type="hidden" name="_captcha" value="false" />
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                <span>Enviar Mensagem</span>
                <svg className="inline ml-2 w-4 h-3" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <i className="bi bi-whatsapp text-2xl text-green-400"></i>
                  <div>
                    <h4 className="text-white font-semibold">WhatsApp</h4>
                    <p className="text-gray-300">
                      <a href="https://wa.me/5511930222977" className="hover:text-white">(11) 9 3022-2977</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <i className="bi bi-envelope text-2xl text-blue-400"></i>
                  <div>
                    <h4 className="text-white font-semibold">E-mail</h4>
                    <p className="text-gray-300">
                      <a href="mailto:vinicius.moraespereira021@gmail.com" className="hover:text-white">
                        vinicius.moraespereira021@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <i className="bi bi-geo-alt text-2xl text-red-400"></i>
                  <div>
                    <h4 className="text-white font-semibold">Localização</h4>
                    <p className="text-gray-300">São Paulo, Brasil | Remoto Global</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/ViniciusPereira-coder" target="_blank" className="text-gray-400 hover:text-white text-2xl">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/vinicius-de-moraes-10b50b151/" target="_blank" className="text-gray-400 hover:text-white text-2xl">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/ninicius_?igsh=NndmeDR0cjJ1azFo" target="_blank" className="text-gray-400 hover:text-white text-2xl">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://wa.me/5511930246426" target="_blank" className="text-gray-400 hover:text-white text-2xl">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
