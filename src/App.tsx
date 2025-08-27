import { useState, type FormEvent } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    window.location.href = `https://wa.me/+552126062981?text=Olá, me chamo ${name} e tenho uma solicitação: ${message}. Meu e-mail: ${email}`;
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      <header
        id="header"
        className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-700">
            <img src="/Logo.jpeg" className="w-24" alt="" />
          </a>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-[18px]"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-[18px]"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-[18px]"
            >
              Sobre Nós
            </a>
            <a
              href="#contato"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-[18px]"
            >
              Contato
            </a>
          </nav>

          <div className="flex flex-row items-center gap-8">
            <a
              href="#contato"
              className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-transform hover:scale-105"
            >
              Solicite um Orçamento
            </a>

            <a
              href="https://wa.me/+552126062981?text=Ol%C3%A1!+vim+pelo+site+e+gostaria+de+solicitar+um+or%C3%A7amento."
              className="text-green-500 "
            >
              <IoLogoWhatsapp size={40} />
            </a>
          </div>

          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden bg-white border-t">
          <a
            href="#inicio"
            className="block px-6 py-3 text-gray-600 hover:bg-blue-50"
          >
            Início
          </a>
          <a
            href="#servicos"
            className="block px-6 py-3 text-gray-600 hover:bg-blue-50"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="block px-6 py-3 text-gray-600 hover:bg-blue-50"
          >
            Sobre Nós
          </a>
          <a
            href="#contato"
            className="block px-6 py-3 text-gray-600 hover:bg-blue-50"
          >
            Contato
          </a>
          <div className="p-4">
            <a
              href="#contato"
              className="w-full text-center block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-transform hover:scale-105"
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          // className="relative bg-[url(/Fundo.jpg)] bg-fixed bg-cover bg-center text-white pt-32 pb-20 md:pt-40 md:pb-28"
          className="relative bg-[url(/Fundo.jpg)] bg-center bg-cover bg-scroll text-white pt-32 pb-20 md:pt-40 md:pb-28"
        >
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Conteúdo */}
          <div className="relative z-10 container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Conectando seu Mundo com Tecnologia de Ponta
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-blue-100">
              Soluções completas em telecomunicações e TI para sua empresa ou
              residência. Segurança, conectividade e eficiência ao seu alcance.
            </p>
            <a
              href="#servicos"
              className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition-transform hover:scale-105 transform shadow-lg"
            >
              Conheça Nossos Serviços
            </a>
          </div>
        </section>

        <section id="servicos" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Nossas Soluções
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Oferecemos um portfólio completo para atender todas as suas
                necessidades de tecnologia e telecomunicações.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-video w-8 h-8"
                  >
                    <path d="m22 8-6 4 6 4V8Z" />
                    <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">CFTV e CATV</h3>
                <p className="text-gray-600">
                  Sistemas de vigilância por vídeo e TV a cabo. Instalação e
                  manutenção para sua segurança e entretenimento.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-key-round w-8 h-8"
                  >
                    <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                    <circle cx="16.5" cy="7.5" r=".5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Controle de Acesso</h3>
                <p className="text-gray-600">
                  Soluções modernas para controle de entrada e saída, com
                  biometria, cartões ou senhas.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-wifi w-8 h-8"
                  >
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <line x1="12" x2="12.01" y1="20" y2="20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Internet e Rede Interna
                </h3>
                <p className="text-gray-600">
                  Projetos e implementação de redes cabeadas e Wi-Fi de alta
                  performance para empresas e residências.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-server w-8 h-8"
                  >
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Servidores e Máquinas
                </h3>
                <p className="text-gray-600">
                  Montagem, configuração e manutenção de servidores,
                  computadores e notebooks.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-printer w-8 h-8"
                  >
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect width="12" height="8" x="6" y="14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Impressoras</h3>
                <p className="text-gray-600">
                  Instalação, configuração em rede e manutenção de impressoras
                  de todos os tipos e modelos.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-siren w-8 h-8"
                  >
                    <path d="M6.2 4.3a10 10 0 0 1 11.6 0" />
                    <path d="M9.4 7.5a5 5 0 0 1 5.2 0" />
                    <path d="M12 10c-1.7 0-3 1.3-3 3v1h6v-1c0-1.7-1.3-3-3-3Z" />
                    <path d="M12 2v2" />
                    <path d="M12 14v8" />
                    <path d="M5 14H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
                    <path d="M19 14h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Interfones e Automação
                </h3>
                <p className="text-gray-600">
                  Sistemas de interfonia e automação de portões para condomínios
                  e residências, aliando conforto e segurança.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://placehold.co/600x400/3b82f6/ffffff?text=Nossa+Equipe"
                  alt="Equipe da TelecomGigaLink trabalhando"
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Sua Parceira Estratégica em Tecnologia
                </h2>
                <p className="text-gray-600 mb-4">
                  Na TelecomGigaLink, nossa missão é simplificar a tecnologia
                  para você. Com vasta experiência no mercado, nossa equipe de
                  especialistas é apaixonada por encontrar a solução perfeita
                  para cada desafio, seja para grandes empresas ou para o
                  conforto do seu lar.
                </p>
                <p className="text-gray-600 mb-6">
                  Combinamos conhecimento técnico com um atendimento próximo e
                  dedicado, garantindo que cada projeto seja entregue com a
                  máxima qualidade e eficiência. Acreditamos que a tecnologia
                  deve ser uma aliada, e estamos aqui para fazer isso acontecer.
                </p>
                <a
                  href="#contato"
                  className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform hover:scale-105"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Entre em Contato
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Tem um projeto em mente? Preencha o formulário abaixo ou utilize
                nossos canais de atendimento.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
              <form id="contact-form" onSubmit={handleSubmitForm}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-3 px-12 rounded-full hover:bg-blue-700 transition-transform hover:scale-105 text-lg"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
              <div id="form-feedback" className="text-center mt-4"></div>
            </div>
            <div className="text-center mt-12 text-gray-600">
              <p className="text-lg font-medium">
                Ou fale conosco diretamente:
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:contato@telecomgigalink.com.br"
                  className="text-blue-600 hover:underline"
                >
                  tglinktelecom@gmail.com
                </a>
              </p>
              <p>
                Telefone:{" "}
                <a
                  href="tel:+5521999998888"
                  className="text-blue-600 hover:underline"
                >
                  (21) 96778-8218
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8 text-center">
          <a href="#" className="text-2xl font-bold">
            Telecom<span className="text-blue-400">Gig@Link</span>
          </a>
          <div className="flex justify-center space-x-6 my-4">
            <a href="#inicio" className="hover:text-blue-400">
              Início
            </a>
            <a href="#servicos" className="hover:text-blue-400">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-blue-400">
              Sobre Nós
            </a>
            <a href="#contato" className="hover:text-blue-400">
              Contato
            </a>
          </div>
          <p className="text-gray-400">
            &copy; 2025 TelecomGig@Link. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
