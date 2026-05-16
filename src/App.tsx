/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Truck, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Package, 
  Route, 
  Warehouse, 
  Star, 
  MoveRight, 
  Share2, 
  Mail 
} from 'lucide-react';
import { motion } from 'motion/react';

const COLORS = {
  primary: '#000000',
  secondary: '#ba0627',
  background: '#f7f9fc',
  surface: '#ffffff',
  text: '#191c1e',
  textSecondary: '#45474c',
};

const navLinks = [
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Frota', href: '#frota' },
  { name: 'Contato', href: '#contato' },
];

const services = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Transporte de Cargas',
    description: 'Transporte rodoviário de alta performance para cargas fechadas e fracionadas em todo o território nacional.',
  },
  {
    icon: <Route className="w-8 h-8" />,
    title: 'Logística Integrada',
    description: 'Planejamento estratégico de rotas e gestão inteligente da cadeia de suprimentos para otimizar custos.',
  },
  {
    icon: <Warehouse className="w-8 h-8" />,
    title: 'Armazenagem',
    description: 'Estrutura moderna de centros de distribuição com controle rigoroso de estoque e segurança 24 horas.',
  },
];

const stats = [
  { value: '200+', label: 'Clientes Atendidos' },
  { value: '500+', label: 'Veículos na Frota' },
  { value: '15+', label: 'Anos de Experiência' },
  { value: '99%', label: 'Entregas no Prazo' },
];

const steps = [
  { number: 1, title: 'Solicitação', description: 'Entre em contato e detalhe suas necessidades de transporte.' },
  { number: 2, title: 'Planejamento', description: 'Nossa equipe cria a estratégia logística mais eficiente.' },
  { number: 3, title: 'Execução', description: 'Transportamos sua carga com total segurança e pontualidade.' },
];

const testimonials = [
  {
    name: 'Ricardo Santos',
    role: 'Diretor de Logística, Indústrias Metal',
    text: '"A LOGITRANS transformou nossa operação logística. A precisão nos horários de coleta e entrega é algo que nunca havíamos experimentado com outros fornecedores."',
    stars: 5,
  },
  {
    name: 'Mariana Oliveira',
    role: 'CEO, Distribuidora Solar',
    text: '"O rastreamento em tempo real nos dá uma segurança incrível. Saber exatamente onde nossa carga está a qualquer momento mudou nossa relação com os clientes."',
    stars: 5,
  },
  {
    name: 'André Costa',
    role: 'Gerente de Operações, AgroFort',
    text: '"Equipe altamente profissional e frota impecável. Recomendo para qualquer empresa que precise de transporte pesado confiável e de alta qualidade."',
    stars: 5,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-[#ba0627] selection:text-white">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-black">LOGITRANS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-600 hover:text-[#ba0627] font-semibold text-sm transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button className="bg-[#ba0627] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#92001b] transition-all transform active:scale-95">
            Solicitar Orçamento
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#0A1628]/70 z-10" />
            <img
              alt="Logitrans Fleet"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANIyg1DnoQ-SsPHJi21027m6MSy4JCqaWLA5p6XvHbU5ngrImqXrLULf1CPgm4aJB-tnYC66UizeHMid8lkSNlgNsRTSg43qkYlg-fynPQMwfg90Siv_m7GpBMJlVOELJB6Ok1vyqp2bZd1Jl2RmOYpyOu5-aVAb95Q6NVyYwDjXDpB3kbtl5x0vwiFI5cEQigB9HRB_CDx2hET34MGBmnUy0mo_CtcR1BAqbBOmTuiijqabLW3s-A8HWYDBgAFeNhXyNqu9i3Muc"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center py-24 text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl leading-tight font-black mb-6 tracking-tighter"
            >
              Logística de Precisão para o<br className="hidden md:block" /> Futuro do seu Negócio
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10"
            >
              Soluções completas em transporte pesado e distribuição nacional com segurança, tecnologia e eficiência operacional inigualável.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
            >
              <button className="w-full md:w-auto bg-[#ba0627] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(186,6,39,0.4)] transition-all">
                Solicitar Transporte
              </button>
              <button className="w-full md:w-auto bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all">
                Conheça a Frota
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80"
            >
              <div className="flex items-center gap-3">
                <MapPin className="text-[#ba0627] w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-widest">Rastreamento 24h</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20" />
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#ba0627] w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-widest">Seguro Garantido</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/20" />
              <div className="flex items-center gap-3">
                <Clock className="text-[#ba0627] w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-widest">Entrega no Prazo</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Nossos Serviços</h2>
              <div className="w-20 h-1.5 bg-[#ba0627] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-200 hover:border-[#ba0627] transition-all group"
                >
                  <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ba0627] transition-colors">
                    <div className="text-black group-hover:text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-black py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center border-r border-white/10 last:border-0">
                  <div className="text-[#ba0627] font-black text-4xl md:text-5xl mb-2">{stat.value}</div>
                  <div className="text-neutral-400 font-bold text-xs uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Como Funciona</h2>
              <div className="w-20 h-1.5 bg-[#ba0627] mx-auto rounded-full" />
            </div>

            <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-4">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-neutral-200" />
              
              {steps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center w-full md:w-[30%]">
                  <div className="w-24 h-24 bg-[#ba0627] rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl mb-8 ring-8 ring-white">
                    {step.number}
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-3">{step.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet/Coverage */}
        <section id="frota" className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#0A1628] p-12 md:p-24 flex flex-col justify-center items-start text-white">
            <motion.h2 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            >
              Cobertura em Todo o Território Nacional
            </motion.h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
              Nossa malha logística abrange todos os estados brasileiros, utilizando centros de distribuição estrategicamente localizados para garantir agilidade no "last mile" e segurança em rotas de longa distância.
            </p>
            <button className="bg-[#ba0627] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all flex items-center gap-3">
              Ver Rotas
              <MoveRight className="w-5 h-5" />
            </button>
          </div>
          <div className="h-[400px] md:h-auto bg-neutral-900 border-l border-white/5">
            <img
              alt="Brazil Logistics Network Map"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAFXYf_fqJvMSOhOgWTH8oBHP-z7p5gv0tpO8RQnuSKiBSM0Gyi0jvPEzYfqkhnFU7DqjMrrTSv25SZFMywlmDf-I4brJaTSyc5JTEDc-vGmoABjSnHY-TFfO_6NxgZbws27Ok8H9nWF6hVQQ9l7l36RFsMGhzuyS5kQzW7x81FCASLTFti3DlzieCAHF6L6vaQ7F_2xpSmxURd8JvIqO1_2zJg1wuhSpgUgilywWYsqXhNxYbjLTiMxVJbQjZAwaww5zbzIjLpec"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-4">O que dizem nossos parceiros</h2>
              <div className="w-20 h-1.5 bg-[#ba0627] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-200 flex flex-col">
                  <div className="text-[#ba0627] mb-6">
                    {/* Hardcoded quote icon style from design */}
                    <svg className="w-12 h-12 fill-current opacity-20" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.34315 15.3601 2 17.017 2H20.017C21.6738 2 23.017 3.34315 23.017 5V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.01697 21L1.01697 18C1.01697 16.8954 1.9124 16 3.01697 16H6.01697C6.56925 16 7.01697 15.5523 7.01697 15V9C7.01697 8.44772 6.56925 8 6.01697 8H3.01697C1.9124 8 1.01697 7.10457 1.01697 6V5C1.01697 3.34315 2.36012 2 4.01697 2H7.01697C8.67382 2 10.017 3.34315 10.017 5V15C10.017 18.3137 7.33068 21 4.01697 21H1.01697Z" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 italic leading-relaxed mb-8 flex-grow">
                    {t.text}
                  </p>
                  <div className="pt-6 border-t border-neutral-100">
                    <div className="font-bold text-black">{t.name}</div>
                    <div className="text-sm text-neutral-500 mb-3">{t.role}</div>
                    <div className="flex gap-0.5 text-[#ba0627]">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section id="contato" className="bg-[#ba0627] py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Pronto para otimizar sua logística?</h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Fale com nossos especialistas agora mesmo e receba um orçamento personalizado.
            </p>
            <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-white hover:text-[#ba0627] transition-all">
              Fale Conosco Agora
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <span className="text-3xl font-black tracking-tighter">LOGITRANS</span>
            <p className="text-neutral-500 text-sm max-w-xs">
              © 2024 LOGITRANS. Logística de Precisão e Transporte Pesado em todo o Brasil.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href="#" className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors">Portal do Motorista</a>
            <a href="#" className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors">Suporte 24h</a>
          </nav>

          <div className="flex gap-4">
            {[Share2, Mail].map((Icon, idx) => (
              <div 
                key={idx}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ba0627] transition-all cursor-pointer group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
