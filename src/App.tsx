/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Instagram, Info, MessageCircle, Star, Send, Clock, Sparkles, Diamond } from 'lucide-react';
import { Modal } from './components/Modal';

export default function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isLogoSpinning, setIsLogoSpinning] = useState(false);

  // Form states
  const [contactName, setContactName] = useState('');
  const [contactAge, setContactAge] = useState('');
  const [contactReason, setContactReason] = useState('');

  const handleLogoClick = () => {
    setIsLogoSpinning(true);
    setTimeout(() => {
      setIsLogoSpinning(false);
      setIsAboutOpen(true);
    }, 600);
  };

  const handleRating = (stars: number) => {
    setRating(stars);
    setTimeout(() => {
      setIsRatingOpen(false);
      if (stars === 5) {
        window.open('https://search.google.com/local/writereview?placeid=ChIJtb3KaP4b6JQR0Gd_j_TuKb8', '_blank');
      } else {
        setIsFeedbackOpen(true);
      }
    }, 400);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${contactName}, tenho ${contactAge} anos. Gostaria de falar sobre: ${contactReason}`;
    const url = `https://wa.me/5542999442531?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsContactOpen(false);
  };

  const links = [
    {
      title: 'Contato',
      subtitle: '55 42 99944-2531',
      icon: <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1} />,
      onClick: () => setIsContactOpen(true),
    },
    {
      title: 'Horário de Atendimento',
      subtitle: 'Segunda a Sábado',
      icon: <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1} />,
      onClick: () => setIsHoursOpen(true),
    },
    {
      title: 'Nossa Localização',
      subtitle: 'Av. Bonifácio Vilela, 126',
      icon: <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1} />,
      onClick: () => setIsLocationOpen(true),
    },
    {
      title: 'Instagram',
      icon: <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1} />,
      href: 'https://www.instagram.com/jo.acessorios.contemporaneos/',
    },
    {
      title: 'Avaliação',
      icon: <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1} />,
      onClick: () => setIsRatingOpen(true),
    },
  ];

  return (
    <div className="h-[100dvh] w-full bg-animated-gradient flex items-center justify-center p-4 relative overflow-hidden font-sans text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(15,60,200,0.15),transparent_60%)] pointer-events-none mix-blend-screen z-0" />
      <div className="absolute top-[-20%] left-[-20%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_top_left,rgba(15,60,200,0.15),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(193,154,91,0.08),transparent_60%)] pointer-events-none z-0" />


      <main className="w-full max-w-[420px] max-h-[96vh] glass-card rounded-2xl p-4 sm:p-6 flex flex-col items-center relative overflow-y-auto no-scrollbar shadow-2xl border border-white/10 z-10 custom-scrollbar">
        {/* Transparent Card Background Image */}
        <div className="absolute inset-0 bg-[url('/fundo.png')] bg-cover bg-center opacity-[0.05] pointer-events-none mix-blend-overlay z-0" />
        
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-4 w-full relative z-10"
        >
          <div className="relative mb-3">
            <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(193,154,91,0.2)] z-0" />
            <img 
              src="/logo.png" 
              alt="Jô Acessórios Contemporâneos" 
              referrerPolicy="no-referrer"
              onClick={handleLogoClick}
              className={`relative w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border border-[#C19A5B]/20 cursor-pointer transition-all ${isLogoSpinning ? 'animate-coin' : 'hover:scale-105'}`}
            />
          </div>
          
          <h1 className="text-xl sm:text-[22px] font-sans font-extralight text-white mb-0.5 tracking-widest uppercase leading-tight drop-shadow-sm">
            Jô Acessórios
            <br />
            <span className="font-light tracking-[0.25em] text-white/70 text-[10px] sm:text-xs">Contemporâneos</span>
          </h1>
          
          <p className="text-[10px] sm:text-[11px] font-light text-white/50 px-2 leading-relaxed mb-4 uppercase tracking-[0.1em]">
            Semi joias e acessórios de luxo 
          </p>

          <div className="flex items-center justify-center">
             <span className="text-[9px] sm:text-[10px] text-[#C19A5B]/90 font-medium bg-[#C19A5B]/10 px-3 py-1 rounded-sm border border-[#C19A5B]/20 flex items-center gap-1.5 uppercase tracking-wider">
                Prêmio melhores do ano 2023
             </span>
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-2 mb-4 flex-1 justify-center relative z-10">
          {links.map((link, i) => (
            <motion.a
              key={link.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              target={link.href ? "_blank" : undefined}
              rel={link.href ? "noopener noreferrer" : undefined}
              className={`relative group overflow-hidden bg-white/5 rounded-lg p-2 sm:p-2.5 flex items-center transition-all cursor-pointer border border-white/20 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(193,154,91,0.25)] hover:border-[#C19A5B]/50`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full duration-1000 transition-all ease-out" />
              <div className="absolute inset-0 bg-[#071329]/10 group-hover:bg-[#C19A5B]/10 transition-colors" />
              
              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-sm bg-white/5 border border-[#C19A5B]/30 text-[#C19A5B] shadow-inner shrink-0 relative z-10 group-hover:bg-[#C19A5B] group-hover:text-white transition-all">
                {link.icon}
              </div>
              <div className="flex-1 text-center pr-9 relative z-10">
                <span className={`block font-medium text-[11px] sm:text-xs tracking-wide text-white group-hover:text-white transition-colors`}>
                  {link.title}
                </span>
                {link.subtitle && <span className={`block text-[9px] sm:text-[10px] text-white/70 group-hover:text-[#E6C88A] mt-0.5 tracking-wider font-light`}>{link.subtitle}</span>}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center w-full mt-auto relative z-10"
        >
          <button 
            onClick={() => setIsCreditsOpen(true)}
            className="text-[10px] sm:text-xs text-white/40 hover:text-white/80 transition-colors tracking-wide"
          >
            Desenvolvido por <span className="font-semibold">InteligenciArte.IA</span>
          </button>
        </motion.footer>
      </main>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 bg-[#020617]/50 backdrop-blur-md border border-[#C19A5B]/30 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(193,154,91,0.15)] hover:bg-[#C19A5B]/10 hover:border-[#C19A5B]/60 transition-all z-40 text-[#E6C88A]"
      >
        <MessageCircle className="w-5 h-5" strokeWidth={1} />
      </motion.button>

      {/* Modals */}
      <Modal isOpen={isHoursOpen} onClose={() => setIsHoursOpen(false)} title="Horário de Atendimento">
        <div className="w-full flex flex-col gap-4">
           <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10">
             <div className="flex flex-col">
                <span className="text-white/90 font-medium text-sm">Segunda a Sexta</span>
                <span className="text-[#C19A5B] text-[10px] sm:text-xs mt-0.5">Não fechamos pro almoço</span>
             </div>
             <span className="text-white font-medium text-sm tracking-wide bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">09:30 - 18:00</span>
           </div>

           <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10">
             <span className="text-white/90 font-medium text-sm">Sábado</span>
             <span className="text-white font-medium text-sm tracking-wide bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">09:30 - 15:00</span>
           </div>
           
           <div className="mt-2 text-center text-[10px] sm:text-xs text-white/50 tracking-wider uppercase">
             Esperamos por você!
           </div>
        </div>
      </Modal>

      <Modal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)}>
        {/* Visual Header */}
        <div className="relative h-28 sm:h-36 rounded-xl overflow-hidden mb-6 border border-white/10 flex items-center justify-center -mt-2">
           <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617] opacity-80" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(193,154,91,0.1)_0%,transparent_70%)]" />
           <img src="/logo.png" className="w-16 h-16 sm:w-20 sm:h-20 relative z-10 border border-[#C19A5B]/20 rounded-full shadow-[0_0_20px_rgba(193,154,91,0.15)]" alt="Logo" />
        </div>

        <div className="space-y-6 font-sans text-xs sm:text-sm leading-relaxed text-white/80 px-1">
           <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#C19A5B]/5 flex items-center justify-center shrink-0 border border-[#C19A5B]/20">
                 <Sparkles className="text-[#C19A5B] w-5 h-5" />
              </div>
              <p className="pt-0.5">
                 Desde a sua criação, a <span className="font-sans font-medium text-[#E6C88A]">Jô Acessórios</span> vem construindo sua presença com <strong className="text-white font-medium">estilo e autenticidade</strong>.
              </p>
           </div>

           <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#C19A5B]/5 flex items-center justify-center shrink-0 border border-[#C19A5B]/20">
                 <Diamond className="text-[#C19A5B] w-5 h-5" />
              </div>
              <p className="pt-0.5">
                 Com uma curadoria cuidadosa, conquistamos clientes que valorizam <strong className="text-white font-medium">design moderno, versatilidade e identidade</strong>.
              </p>
           </div>

           <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#C19A5B]/5 flex items-center justify-center shrink-0 border border-[#C19A5B]/20">
                 <MapPin className="text-[#C19A5B] w-5 h-5" />
              </div>
              <p className="pt-0.5">
                 Localizada em Ponta Grossa, seguimos conectando você com acessórios que expressam <strong className="text-white font-medium text-[13px] sm:text-base border-b border-[#C19A5B]/30 pb-0.5">quem você é</strong>.
              </p>
           </div>
        </div>
      </Modal>

      <Modal isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} title="Nossa Localização">
        <div className="w-full flex flex-col gap-4">
           <div className="text-xs sm:text-sm text-white/80 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C19A5B] to-[#85612D]"></div>
              Av. Bonifácio Vilela, 126 - A - Centro,<br/>
              Ponta Grossa - PR, 84010-330<br/>
              Telefone: 55 42 99944-2531
           </div>
           
           <div className="w-full rounded-xl overflow-hidden border border-white/10 h-48 sm:h-56 relative bg-black/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.29767275552!2d-50.161864224621524!3d-25.09178297777901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81bfe68cabdb5%3A0xbf29eef48f7f67d0!2sJo%20Acess%C3%B3rios%20Contempor%C3%A2neos!5e0!3m2!1spt-BR!2sbr!4v1777988949481!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
           </div>
           
           <a 
             href="https://maps.google.com/?q=-25.09178297777901,-50.161864224621524" 
             target="_blank" 
             rel="noopener noreferrer"
             className="w-full py-3 bg-transparent border border-[#C19A5B]/40 rounded-xl text-center font-medium text-[#C19A5B] hover:bg-[#C19A5B]/10 hover:border-[#C19A5B]/60 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
           >
             <MapPin size={16} /> Abrir no Google Maps
           </a>
        </div>
      </Modal>

      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} title="Fale Conosco">
        <form onSubmit={handleContactSubmit} className="flex flex-col gap-3">
          <div>
             <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 ml-1" htmlFor="name">Nome completo</label>
             <input 
               id="name"
               required
               value={contactName}
               onChange={e => setContactName(e.target.value)}
               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C19A5B]/50 transition-colors"
               placeholder="Como podemos te chamar?"
             />
          </div>
          <div>
             <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 ml-1" htmlFor="age">Idade</label>
             <input 
               id="age"
               type="number"
               required
               value={contactAge}
               onChange={e => setContactAge(e.target.value)}
               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C19A5B]/50 transition-colors"
               placeholder="Sua idade"
             />
          </div>
          <div>
             <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1 ml-1" htmlFor="reason">Motivo do Contato</label>
             <textarea 
               id="reason"
               required
               rows={3}
               value={contactReason}
               onChange={e => setContactReason(e.target.value)}
               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C19A5B]/50 transition-colors resize-none"
               placeholder="Como podemos ajudar?"
             />
          </div>
          
          <button 
             type="submit"
             className="w-full mt-1 py-3.5 bg-transparent border border-[#C19A5B]/40 rounded-xl text-center font-medium text-[#C19A5B] hover:bg-[#C19A5B]/10 hover:border-[#C19A5B]/60 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
           >
             <Send size={16} /> Enviar Mensagem
           </button>
        </form>
      </Modal>

      <Modal isOpen={isRatingOpen} onClose={() => setIsRatingOpen(false)} title="Sua experiência">
        <div className="flex flex-col items-center py-4">
           <div className="flex gap-1.5 sm:gap-2" onMouseLeave={() => setHoverRating(0)}>
             {[1, 2, 3, 4, 5].map((star) => (
               <button
                 key={star}
                 onClick={() => handleRating(star)}
                 onMouseEnter={() => setHoverRating(star)}
                 className="p-1.5 focus:outline-none relative group"
               >
                 <motion.div
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.8, rotate: -10 }}
                    animate={rating === star ? { scale: [1, 1.3, 1], rotate: [0, 15, 0] } : {}}
                    transition={{ duration: 0.3 }}
                    className="relative"
                 >
                    {rating === star && (
                       <motion.div 
                         initial={{ scale: 0.5, opacity: 1 }}
                         animate={{ scale: 2, opacity: 0 }}
                         transition={{ duration: 0.4 }}
                         className="absolute inset-0 rounded-full bg-[#C19A5B]/40 blur-sm z-0"
                       />
                    )}
                    <Star 
                       className={`w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 relative z-10 ${
                         (hoverRating || rating) >= star 
                           ? 'text-[#C19A5B] fill-[#C19A5B] drop-shadow-[0_0_12px_rgba(193,154,91,0.6)]' 
                           : 'text-white/20'
                       }`} 
                    />
                 </motion.div>
               </button>
             ))}
           </div>
           <p className="text-white/40 text-xs mt-4">Selecione uma nota de 1 a 5 estrelas</p>
        </div>
      </Modal>

      <Modal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} title="Sua opinião importa">
         <form 
           action="https://formsubmit.co/your-email@example.com" 
           method="POST" 
           className="flex flex-col gap-3"
           onSubmit={() => setTimeout(() => setIsFeedbackOpen(false), 500)}
         >
          <input type="hidden" name="_subject" value="Novo Feedback - Jô Acessórios" />
          <input type="hidden" name="Rating" value={rating} />
          
          <p className="text-white/70 text-xs sm:text-sm mb-1 leading-relaxed">
            Pedimos desculpas se não fomos perfeitos. Gostaríamos muito de saber o que houve e como podemos melhorar.
          </p>
          
          <div>
             <textarea 
               name="Feedback"
               required
               rows={4}
               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C19A5B]/50 transition-colors resize-none"
               placeholder="Conte para nós..."
             />
          </div>
          
          <button 
             type="submit"
             className="w-full mt-1 py-3 bg-transparent border border-[#C19A5B]/40 rounded-xl text-center font-medium text-[#C19A5B] hover:bg-[#C19A5B]/10 hover:border-[#C19A5B]/60 transition-all text-xs uppercase tracking-widest"
           >
             Enviar Avaliação
           </button>
        </form>
      </Modal>

      <Modal isOpen={isCreditsOpen} onClose={() => setIsCreditsOpen(false)} title="InteligenciArte.IA">
        <div className="flex flex-col items-center text-center gap-5 py-2">
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
            Criamos experiências digitais únicas, elegantes e exclusivas.
            <br/><br/>
            Este é um aviso de confirmação. Ao clicar no botão abaixo, você será redirecionado para falar com o desenvolvedor.
          </p>
          
          <a 
             href="https://www.instagram.com/inteligenciarte.ia"
             target="_blank"
             rel="noopener noreferrer"
             className="text-[#C19A5B] hover:text-[#E6C88A] font-medium text-xs sm:text-sm tracking-wide border-b border-[#C19A5B]/30 pb-0.5 flex items-center gap-1.5 transition-colors"
          >
             <Instagram size={14}/> Siga no Instagram
          </a>

          <button 
             onClick={() => {
                const name = prompt("Qual o seu nome?");
                if(name) {
                  const msg = `Olá, vi o link da *Jô Acessórios Contemporâneos* e quero um site igual! Meu nome é ${name}.`;
                  window.open(`https://wa.me/5541988710303?text=${encodeURIComponent(msg)}`, '_blank');
                  setIsCreditsOpen(false);
                }
             }}
             className="w-full mt-2 py-3.5 bg-transparent border border-green-500/40 rounded-xl text-center font-medium text-green-400 hover:bg-green-500/10 hover:border-green-500/60 transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-xs"
           >
             Quer um site igual?
           </button>
        </div>
      </Modal>

    </div>
  );
}

