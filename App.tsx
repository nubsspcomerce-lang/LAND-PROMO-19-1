
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Calendar, 
  ChevronRight, 
  MapPin, 
  Clock,
  ArrowRight,
  Tag,
  Zap
} from 'lucide-react';

// Constantes de Imagem (Assets oficiais da Loja Intro)
const IMAGES = {
  LOGO: 'https://storage.googleapis.com/vibe-v2-production.appspot.com/6686ebca6a326a27e1f13ef4/677fcc92be7e954504107567/678a8767e7c48f219f72740a.png',
  PRODUCT_1: 'https://storage.googleapis.com/vibe-v2-production.appspot.com/6686ebca6a326a27e1f13ef4/677fcc92be7e954504107567/678a8764e7c48f219f727407.png', // Camisa Polo Branca
  PRODUCT_2: 'https://storage.googleapis.com/vibe-v2-production.appspot.com/6686ebca6a326a27e1f13ef4/677fcc92be7e954504107567/678a8766e7c48f219f727408.png'  // Camisa Teaser Marrom
};

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Lógica do Contador para 19 de Janeiro
  useEffect(() => {
    const targetDate = new Date('2025-01-19T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const joinWhatsApp = () => {
    window.open('https://chat.whatsapp.com/invite/loja-intro-vip', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center selection:bg-yellow-400 selection:text-black font-sans">
      
      {/* Header Fixo com Desfoque */}
      <nav className="w-full py-5 flex justify-center sticky top-0 bg-black/80 backdrop-blur-md z-[100] border-b border-white/5">
        <img src={IMAGES.LOGO} alt="Loja Intro" className="h-10 md:h-14 object-contain" />
      </nav>

      {/* Hero Section - Foco Total na Data e Preços */}
      <section className="w-full max-w-6xl px-4 py-12 md:py-24 flex flex-col items-center text-center overflow-hidden">
        
        {/* Badge de Urgência */}
        <div className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-8 animate-pulse">
          <Zap size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-yellow-400">Oferta Exclusiva Grupo VIP</span>
        </div>

        {/* Data Gigante 19/01 */}
        <div className="relative mb-10">
          <div className="absolute inset-0 blur-[100px] bg-yellow-400/10 rounded-full animate-pulse"></div>
          <span className="block text-zinc-500 font-black uppercase tracking-[0.5em] text-xs md:text-sm mb-2">Grande Dia</span>
          <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none text-white relative">
            19<span className="text-yellow-400">.</span>01
          </h2>
        </div>
        
        <h1 className="text-5xl md:text-[7.5rem] font-black mb-10 tracking-tighter uppercase leading-[0.85] italic">
          PREÇOS DE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">REVENDA</span>
        </h1>
        
        {/* Card de Preços em Destaque */}
        <div className="bg-zinc-900/40 border border-white/10 p-8 md:p-12 rounded-[2.5rem] mb-14 max-w-3xl backdrop-blur-xl relative overflow-hidden group hover:border-yellow-400/30 transition-all duration-500 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
          <p className="text-zinc-400 text-xl md:text-3xl font-medium leading-tight">
            Camisas Peruana por apenas <span className="text-yellow-400 font-black text-4xl md:text-5xl">R$ 30</span> <br className="hidden md:block" />
            <span className="block mt-4 md:mt-2">
              Camisa Teaser por <span className="text-yellow-400 font-black text-4xl md:text-5xl">R$ 60</span>
            </span>
          </p>
        </div>

        {/* Cronômetro Profissional */}
        <div className="grid grid-cols-4 gap-3 md:gap-8 mb-16">
          {[
            { label: 'Dias', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center bg-zinc-900/90 p-5 md:p-10 rounded-[2rem] w-20 md:w-36 border border-white/5 shadow-2xl transform hover:scale-105 transition-transform">
              <span className="text-2xl md:text-6xl font-black tabular-nums tracking-tighter text-white">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2 font-black">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Principal WhatsApp */}
        <button 
          onClick={joinWhatsApp}
          className="whatsapp-gradient hover:scale-[1.03] active:scale-95 transition-all duration-300 px-12 py-7 rounded-[2rem] flex items-center space-x-5 shadow-[0_20px_80px_rgba(37,211,102,0.3)] w-full md:w-auto justify-center group"
        >
          <MessageCircle size={32} fill="currentColor" className="text-white" />
          <span className="text-xl md:text-2xl font-black uppercase tracking-wider">ENTRAR NO GRUPO VIP</span>
          <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </section>

      {/* Seção de Vitrine de Produtos */}
      <section className="w-full bg-zinc-950 py-28 px-4 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-green-500 mb-4">
                <Tag size={20} />
                <span className="font-black uppercase tracking-[0.5em] text-[10px] md:text-xs text-zinc-400">Tabela de Lançamento 19/01</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">OFERTAS REAIS</h2>
            </div>
            <div className="bg-white/5 px-8 py-4 rounded-full border border-white/10 hidden md:block">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest italic">Acesso restrito ao grupo VIP</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Camisa Peruana */}
            <div className="group relative overflow-hidden rounded-[3.5rem] bg-zinc-900 border border-white/5 shadow-2xl">
              <div className="absolute top-10 left-10 z-10">
                <span className="bg-red-600 text-white text-[12px] font-black uppercase px-6 py-3 rounded-2xl tracking-widest shadow-2xl rotate-[-3deg] inline-block">57% OFF</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={IMAGES.PRODUCT_1} 
                  alt="Camisas Peruana" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 md:p-14 w-full bg-gradient-to-t from-black to-transparent">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic leading-none">Camisas Peruana</h3>
                <div className="flex items-center space-x-6">
                  <span className="text-zinc-600 line-through text-2xl font-bold italic">R$ 70</span>
                  <div className="flex flex-col">
                    <span className="text-yellow-400 text-6xl md:text-8xl font-black tracking-tighter italic leading-none">R$ 30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Camisa Teaser */}
            <div className="group relative overflow-hidden rounded-[3.5rem] bg-zinc-900 border border-white/5 shadow-2xl">
              <div className="absolute top-10 left-10 z-10">
                <span className="bg-red-600 text-white text-[12px] font-black uppercase px-6 py-3 rounded-2xl tracking-widest shadow-2xl rotate-[3deg] inline-block">45% OFF</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={IMAGES.PRODUCT_2} 
                  alt="Camisa Teaser" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-2" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 md:p-14 w-full bg-gradient-to-t from-black to-transparent">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic leading-none">Camisa Teaser</h3>
                <div className="flex items-center space-x-6">
                  <span className="text-zinc-600 line-through text-2xl font-bold italic">R$ 110</span>
                  <div className="flex flex-col">
                    <span className="text-yellow-400 text-6xl md:text-8xl font-black tracking-tighter italic leading-none">R$ 60</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios e Regras */}
      <section className="w-full max-w-5xl px-4 py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: <Clock size={36} className="text-yellow-400" />, 
              title: "Lote Cronometrado", 
              desc: "O link oficial será liberado no dia 19/01 pontualmente às 08:00h da manhã. Esteja pronto." 
            },
            { 
              icon: <Zap size={36} className="text-yellow-400" />, 
              title: "Acesso de Elite", 
              desc: "O grupo VIP recebe o link 30 minutos antes de ser postado no Instagram da loja." 
            },
            { 
              icon: <MapPin size={36} className="text-yellow-400" />, 
              title: "Base de Operação", 
              desc: "Direto de Vitória de Santo Antão para todo o Brasil. Envio via Correios e Transportadora." 
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-zinc-900/60 border border-white/5 p-12 rounded-[3rem] hover:border-yellow-400/20 transition-all duration-500">
              <div className="mb-8 p-5 bg-yellow-400/5 w-fit rounded-3xl border border-yellow-400/10">{benefit.icon}</div>
              <h4 className="text-2xl font-black uppercase mb-5 tracking-tighter italic">{benefit.title}</h4>
              <p className="text-zinc-500 text-base font-medium leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé e CTA Final */}
      <footer className="w-full py-32 px-4 bg-zinc-950 border-t border-white/5 flex flex-col items-center">
        <div className="max-w-2xl text-center">
          <img src={IMAGES.LOGO} alt="Loja Intro" className="h-12 mx-auto mb-16 opacity-40" />
          
          <div className="mb-10">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-4">GRUPO VIP LOTANDO</h2>
            <div className="text-yellow-400 text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4 italic">19.01</div>
            <p className="text-zinc-500 text-xl font-medium italic max-w-lg mx-auto leading-relaxed">Não perca a chance de levar as melhores peças por apenas R$ 30.</p>
          </div>
          
          <button 
            onClick={joinWhatsApp}
            className="w-full md:w-auto px-16 py-8 bg-white text-black font-black uppercase rounded-[2.5rem] hover:bg-yellow-400 hover:scale-105 transition-all flex items-center justify-center space-x-4 tracking-[0.15em] shadow-2xl shadow-white/5 group"
          >
            <span className="text-xl">GARANTIR MEU ACESSO VIP</span>
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Informações Legais e Localização */}
        <div className="mt-36 flex flex-col md:flex-row items-center gap-10 text-[11px] text-zinc-700 uppercase font-black tracking-[0.4em]">
          <span>© 2025 LOJA INTRO</span>
          <span className="hidden md:block opacity-30">•</span>
          <span>ESTILO AUTÊNTICO INTRO</span>
          <span className="hidden md:block opacity-30">•</span>
          <span className="text-zinc-500">VITÓRIA DE SANTO ANTÃO-PE</span>
        </div>
      </footer>

      {/* Botão Flutuante Mobile (Obrigatório para conversão) */}
      <div className="fixed bottom-10 left-6 right-6 md:hidden z-[1000]">
        <button 
          onClick={joinWhatsApp}
          className="w-full whatsapp-gradient py-7 rounded-[2.5rem] flex flex-col items-center justify-center shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/20 active:scale-95 transition-transform"
        >
          <div className="flex items-center space-x-3">
            <MessageCircle size={28} fill="currentColor" />
            <span className="font-black text-lg uppercase tracking-wider italic">GRUPO VIP • 19/01</span>
          </div>
          <span className="text-[10px] font-black opacity-90 mt-1 uppercase tracking-widest italic">PREÇOS A PARTIR DE <span className="text-yellow-400">R$ 30,00</span></span>
        </button>
      </div>

    </div>
  );
};

export default App;
