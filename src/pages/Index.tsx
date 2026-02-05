import { DanceFitButton } from "@/components/DanceFitButton";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CountdownTimer } from "@/components/CountdownTimer";
import { PaymentLogos } from "@/components/PaymentLogos";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import TrustBadges from "@/components/TrustBadges";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Home, Heart, CheckCircle, Facebook, Instagram, X } from "lucide-react";
import WaveSeparator from "@/components/WaveSeparator";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [ofertaEspecialActivada, setOfertaEspecialActivada] = useState(false);
  const [showMobileFloatingButton, setShowMobileFloatingButton] = useState(false);
  const [usuarioRechazoOferta, setUsuarioRechazoOferta] = useState(false);
  const [expandedBenefits, setExpandedBenefits] = useState(false);
  const [expandedMethod, setExpandedMethod] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showUnmuteButton, setShowUnmuteButton] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [viewerCount, setViewerCount] = useState(() => {
    // Cargar desde localStorage o generar uno nuevo
    const stored = localStorage.getItem('viewerCount');
    if (stored) {
      const count = parseInt(stored);
      // Variar ligeramente el número (±1)
      const variation = Math.random() > 0.5 ? 1 : -1;
      return Math.max(3, Math.min(8, count + variation));
    }
    // Primera visita: número aleatorio entre 3 y 8
    const initial = Math.floor(Math.random() * 6) + 3;
    localStorage.setItem('viewerCount', initial.toString());
    return initial;
  });
  const [cuposRestantes, setCuposRestantes] = useState(7);
  const [currentSocialProof, setCurrentSocialProof] = useState({ nombre: '', pais: '' });
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [showAnchorMenu, setShowAnchorMenu] = useState(false);

  // Social proof data
  const socialProofData = [
    { nombre: 'María G.', pais: 'México' },
    { nombre: 'Carlos R.', pais: 'Colombia' },
    { nombre: 'Ana S.', pais: 'España' },
    { nombre: 'Luis M.', pais: 'Argentina' },
    { nombre: 'Patricia L.', pais: 'Chile' },
    { nombre: 'Roberto F.', pais: 'Perú' },
    { nombre: 'Laura V.', pais: 'Venezuela' },
    { nombre: 'Diego P.', pais: 'Ecuador' },
    { nombre: 'Carmen T.', pais: 'Uruguay' },
    { nombre: 'Jorge A.', pais: 'Paraguay' },
    { nombre: 'Sofía M.', pais: 'Costa Rica' },
    { nombre: 'Miguel H.', pais: 'Panamá' },
    { nombre: 'Isabella R.', pais: 'República Dominicana' },
    { nombre: 'Fernando G.', pais: 'Bolivia' },
    { nombre: 'Valentina S.', pais: 'Guatemala' },
  ];

  // Auto-play video muted
  useEffect(() => {
    const playVideoMuted = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay blocked');
        }
      }
    };

    const timer = setTimeout(playVideoMuted, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleUnmute = async () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      await videoRef.current.play();
      setShowUnmuteButton(false);
    }
  };

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Progress bar and sticky button
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Show sticky button after scrolling 800px
      setShowStickyButton(window.scrollY > 800);
      
      // Show mobile bar after 600px on mobile
      if (window.innerWidth <= 768) {
        setShowMobileBar(window.scrollY > 600);
      }
      
      // Show anchor menu after 400px
      setShowAnchorMenu(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Social proof notifications - dinámicas
  useEffect(() => {
    const showProof = () => {
      const randomProof = socialProofData[Math.floor(Math.random() * socialProofData.length)];
      setCurrentSocialProof(randomProof);
      setShowSocialProof(true);
      
      setTimeout(() => setShowSocialProof(false), 6000);
    };

    // Primera notificación después de 45-60 segundos
    const initialDelay = setTimeout(showProof, 45000 + Math.random() * 15000);
    // Notificaciones subsecuentes cada 90-150 segundos
    const interval = setInterval(showProof, 90000 + Math.random() * 60000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  // Viewer count - varía dinámicamente de forma realista
  useEffect(() => {
    const updateViewers = () => {
      setViewerCount(prev => {
        // 70% de probabilidad de cambio, 30% se queda igual
        if (Math.random() > 0.3) {
          const change = Math.random() > 0.5 ? 1 : -1;
          const newCount = prev + change;
          // Rango realista de 3 a 8 personas
          const limited = Math.max(3, Math.min(8, newCount));
          // Guardar en localStorage para persistencia
          localStorage.setItem('viewerCount', limited.toString());
          return limited;
        }
        return prev;
      });
    };

    // Actualizar cada 15-25 segundos para cambios más naturales
    const interval = setInterval(updateViewers, 15000 + Math.random() * 10000);
    return () => clearInterval(interval);
  }, []);

  // Cupos restantes - disminuye ocasionalmente
  useEffect(() => {
    const decreaseCupos = () => {
      setCuposRestantes(prev => Math.max(3, prev - 1));
    };

    const interval = setInterval(decreaseCupos, 180000); // cada 3 minutos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let mouseLeftWindow = false;
    let lastScrollY = 0;
    let scrollUpCount = 0;

    // Exit intent para desktop (mouse leave)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !mouseLeftWindow && !ofertaEspecialActivada) {
        mouseLeftWindow = true;
        setShowExitIntent(true);
      }
    };

    const handleMouseEnter = () => {
      mouseLeftWindow = false;
    };

    // Exit intent para móvil (scroll rápido hacia arriba)
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar scroll hacia arriba rápido
      if (currentScrollY < lastScrollY && currentScrollY < 100) {
        scrollUpCount++;
        
        // Si hace scroll hacia arriba rápido 2 veces cerca del top
        if (scrollUpCount >= 2 && !ofertaEspecialActivada) {
          setShowExitIntent(true);
          scrollUpCount = 0; // Reset counter
        }
      } else {
        scrollUpCount = 0; // Reset si no es scroll hacia arriba
      }
      
      lastScrollY = currentScrollY;
    };

    // Timer automático para móvil (mostrar oferta después de 2 minutos)
    const mobileTimer = setTimeout(() => {
      if (window.innerWidth <= 768 && !showExitIntent && !ofertaEspecialActivada) {
        setShowExitIntent(true);
      }
    }, 120000); // 2 minutos

    // Timer para botón flotante móvil (aparecer después de 30 segundos)
    const floatingButtonTimer = setTimeout(() => {
      if (window.innerWidth <= 768 && !ofertaEspecialActivada && !showExitIntent) {
        setShowMobileFloatingButton(true);
      }
    }, 30000); // 30 segundos

    // Detección de intento de salir (beforeunload) - DESACTIVADO para no bloquear scroll
    // const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    //   if (window.innerWidth <= 768 && !showExitIntent && !ofertaEspecialActivada) {
    //     setShowExitIntent(true);
    //     e.preventDefault();
    //     e.returnValue = '';
    //     return '';
    //   }
    // };

    // Configurar eventos según el dispositivo
    if (window.innerWidth > 768) {
      // Desktop: mouse leave
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    } else {
      // Móvil: solo scroll hacia arriba (beforeunload desactivado para no interferir con scroll)
      window.addEventListener('scroll', handleScroll, { passive: true });
      // window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      // Cleanup todos los eventos
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('scroll', handleScroll);
      // window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(mobileTimer);
      clearTimeout(floatingButtonTimer);
    };
  }, [showExitIntent, ofertaEspecialActivada]);

  const handleInscribirse = () => {
    setIsLoading(true);
    const url = ofertaEspecialActivada 
      ? 'https://go.hotmart.com/T103989774P?ap=5589'  // URL con descuento
      : 'https://go.hotmart.com/T103989774P?ap=0ff3';  // URL normal
    window.open(url, '_blank');
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleAprovecharOferta = () => {
    setOfertaEspecialActivada(true);  // Activar la oferta especial
    setShowExitIntent(false);  // Cerrar el modal
    // No marcar como rechazado, permitir que no vuelva a aparecer
    const url = 'https://go.hotmart.com/T103989774P?ap=5589';  // URL con descuento
    window.open(url, '_blank');
  };

  const handleRechazarOferta = () => {
    setShowExitIntent(false);  // Cerrar el modal
    // NO marcar usuarioRechazoOferta como true para que siga apareciendo
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/50 z-[100] backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 transition-all duration-300 shadow-lg shadow-yellow-400/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky CTA Button */}
      {showStickyButton && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-up hidden md:block">
          <button
            onClick={handleInscribirse}
            disabled={isLoading}
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500 text-black font-bold-caps px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-110 transition-all duration-300 flex items-center gap-3 border-2 border-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                PROCESANDO...
              </>
            ) : (
              <>
                ⚡ ASEGURAR MI CUPO
                <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* Mobile Floating Bar */}
      {showMobileBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-fade-up bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 border-t-2 border-yellow-400 shadow-2xl">
          <div className="flex items-center justify-between p-3 gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-400 text-sm line-through">$300</span>
                <span className="text-green-400 text-xl font-bold">$49.99</span>
              </div>
              <div className="text-yellow-400 text-xs font-bold flex items-center gap-1">
                <span className="animate-pulse">🔥</span>
                Solo {cuposRestantes} cupos restantes
              </div>
            </div>
            <button
              onClick={handleInscribirse}
              disabled={isLoading}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold-caps text-sm md:text-base px-4 py-2.5 md:px-6 md:py-3 rounded-full shadow-lg flex-shrink-0 disabled:opacity-50 whitespace-nowrap"
            >
              {isLoading ? 'CARGANDO...' : 'INSCRIBIRME'}
            </button>
          </div>
        </div>
      )}

      {/* Anchor Menu */}
      {showAnchorMenu && (
        <div className="fixed top-16 left-0 right-0 z-40 animate-fade-up hidden lg:block">
          <div className="flex justify-center w-full">
            <div className="glassmorphic-dark px-6 py-3 rounded-full border border-yellow-400/30 shadow-2xl">
              <nav className="flex items-center justify-center gap-6">
                <button 
                  onClick={() => scrollToSection('video-section')}
                  className="text-white/80 hover:text-yellow-400 font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Programa
                </button>
                <button 
                  onClick={() => scrollToSection('bonuses-section')}
                  className="text-white/80 hover:text-yellow-400 font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Bonos
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials-section')}
                  className="text-white/80 hover:text-yellow-400 font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Testimonios
                </button>
                <button 
                  onClick={() => scrollToSection('guarantee-section')}
                  className="text-white/80 hover:text-yellow-400 font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Garantía
                </button>
                <button 
                  onClick={() => scrollToSection('faq-section')}
                  className="text-white/80 hover:text-yellow-400 font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  FAQ
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof Notification */}
      {showSocialProof && (
        <div className="fixed bottom-24 left-6 z-50 animate-fade-up max-w-sm">
          <div className="glassmorphic-dark p-4 rounded-xl border border-green-400/50 shadow-2xl flex items-center gap-3">
            <div className="bg-green-400 p-2 rounded-full flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">
                ¡{currentSocialProof.nombre} de {currentSocialProof.pais}
              </p>
              <p className="text-green-400 text-xs">
                acaba de inscribirse hace {Math.floor(Math.random() * 5) + 1} min
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Viewer Count Badge */}
      <div className="fixed top-20 right-6 z-40 animate-fade-up hidden md:block">
        <div className="glassmorphic-dark px-4 py-2 rounded-full border border-red-400/50 shadow-xl flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-white text-sm font-bold">
            {viewerCount} personas viendo ahora
          </span>
        </div>
      </div>

      {/* Header Hero Section - Premium */}
      <header className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 py-6 md:py-8 px-4 md:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Image with Animation */}
          <div className="animate-fade-up">
            <img 
              src="/assets/images/hero/crashing-portada.png"
              alt="Adelgaza Sin Salir De Casa - Programa de Transformación"
              className="w-full h-auto max-h-32 md:max-h-40 lg:max-h-48 object-contain
                       hover-scale transition-transform duration-500 drop-shadow-2xl"
            />
          </div>
        </div>
      </header>

  {/* Wavy separator (hero -> main content) */}
  <WaveSeparator topColor="#6b21a8" bottomColor="#000000" flip={true} height={80} />

  {/* Main Content Section - Redesigned */}
  <section id="video-section" className="relative bg-gradient-to-b from-black via-purple-950/20 to-black text-white py-16 md:py-20 px-4 overflow-hidden">
        {/* Background Decoration - Premium */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-yellow-400/20 rounded-full blur-[200px]"></div>
        </div>
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(139, 92, 246, 0.1) 35px, rgba(139, 92, 246, 0.1) 70px)' }}></div>

        {/* Trust Badges - Stats */}
        <div className="max-w-6xl mx-auto mb-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Badge 1 */}
            <div className="glassmorphic-dark p-4 rounded-xl border border-yellow-400/30 flex items-center justify-center gap-3 hover-lift">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-yellow-400 text-2xl font-bold-caps">10,000+</div>
                <div className="text-white/80 text-sm">Estudiantes Activos</div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="glassmorphic-dark p-4 rounded-xl border border-yellow-400/30 flex items-center justify-center gap-3 hover-lift">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-yellow-400 text-2xl font-bold-caps flex items-center gap-1">
                  4.9 <span className="text-base">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="text-white/80 text-sm">Valoración Promedio</div>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="glassmorphic-dark p-4 rounded-xl border border-yellow-400/30 flex items-center justify-center gap-3 hover-lift">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-yellow-400 text-2xl font-bold-caps">30+</div>
                <div className="text-white/80 text-sm">Países Conectados</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-bold-caps text-2xl md:text-3xl lg:text-4xl mb-10 leading-tight animate-fade-up px-4"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
            <span className="text-yellow-highlight">DESCUBRE</span> COMO PODER{" "}
            <span className="text-yellow-highlight">ESTAR EN FORMA</span> Y TENER UNA{" "}
            <span className="text-yellow-highlight">VIDA SALUDABLE</span>,<br />
            SIN NECESIDAD DE GASTAR DINERO EN GIMNASIOS, CON{" "}
            <span className="text-yellow-highlight">RESULTADOS</span> A PARTIR DE LA TERCER SEMANA.
          </h2>

          <div className="text-yellow-highlight text-base md:text-lg font-bold mb-8 animate-fade-up-delay-1 
                        flex items-center justify-center gap-2">
            <svg className="w-6 h-6 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-8 8h5v8h6v-8h5z"/>
            </svg>
            <span>Mira este video de 1 MINUTO para saber como</span>
            <svg className="w-6 h-6 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-8 8h5v8h6v-8h5z"/>
            </svg>
          </div>

          {/* Video Section - Premium Frame */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-up-delay-2">
            <div className="relative p-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 
                          rounded-2xl shadow-2xl hover-lift transition-all duration-500">
              <div className="relative bg-black rounded-xl overflow-hidden">
                <video 
                  ref={videoRef}
                  className="w-full h-auto aspect-video object-cover"
                  controls
                  playsInline
                  webkit-playsinline="true"
                  preload="metadata"
                  poster="/assets/images/hero/video-thumbnail.jpg"
                  style={{ WebkitTransform: 'translateZ(0)' }}
                >
                  <source src="/assets/videos/demo/video-demo.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                
                {/* Professional Unmute Button */}
                {showUnmuteButton && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                    onClick={handleUnmute}
                  >
                    <div className="relative">
                      {/* Animated rings effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div>
                      
                      {/* Main button */}
                      <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 
                                    text-black rounded-full p-8 shadow-2xl 
                                    hover:scale-110 transition-all duration-300 
                                    border-4 border-white/30 backdrop-blur-sm
                                    flex flex-col items-center gap-3 min-w-[200px]">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"/>
                        </svg>
                        <span className="font-bold-caps text-xl text-center leading-tight">
                          TOCA PARA<br/>ACTIVAR SONIDO
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Wavy separator (main content -> success message) */}
  <WaveSeparator topColor="#000000" bottomColor="#6b21a8" flip={false} height={80} />

  {/* Success Message - Enhanced */}
  <section className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 py-16 md:py-20 px-4 relative overflow-hidden">
        {/* Animated Sparkles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-purple-400 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h3 className="font-bold-caps text-2xl md:text-3xl lg:text-4xl text-white mb-0 leading-tight animate-fade-up px-4"
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.9)' }}>
            SI DESEAS LLEGAR A TU <span className="text-yellow-highlight">PESO IDEAL</span>, 
            AUMENTAR <span className="text-yellow-highlight">MASA MUSCULAR</span>, 
            TENER UN <span className="text-yellow-highlight">ABDOMEN PLANO</span> Y 
            SENTIRTE MUCHO MEJOR CONTIGO MISMO/A,{" "}
            <span className="block mt-4 text-yellow-highlight text-3xl md:text-4xl lg:text-5xl animate-pulse-slow">
              ENTONCES ESTE PROGRAMA DEFINITIVAMENTE ES PARA TI.
            </span>
          </h3>
        </div>
      </section>

  {/* Wavy separator (success -> recommendation) */}
  <WaveSeparator topColor="#6b21a8" bottomColor="#000000" flip={true} height={80} />

  {/* Recommendation and Content - Premium Layout */}
  <section className="relative bg-gradient-to-b from-black via-purple-950/20 to-black py-16 md:py-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[200px]"></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(139, 92, 246, 0.05) 100px, rgba(139, 92, 246, 0.05) 200px)' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <div className="glassmorphic-dark p-4 md:p-6 rounded-2xl border border-yellow-500/30 inline-block">
              <h4 className="text-base md:text-lg font-bold">
                <span className="text-yellow-highlight text-xl md:text-2xl">💡 Recomendación:</span>{" "}
                <span className="text-white">Mirar esta página completa para saber toda la información 🤗</span>
              </h4>
            </div>
          </div>

          {/* Two Column Layout - Premium Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            {/* Left Column - Testimonials with Animation */}
            <div className="text-center animate-fade-up-delay-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-yellow-400 rounded-2xl 
                              blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src="/assets/images/testimonials/collage.jpg"
                  alt="COLLAGE DE TESTIMONIOS - Antes y Después"
                  className="relative w-full h-auto max-w-lg mx-auto object-contain rounded-2xl shadow-2xl 
                           hover-scale transition-transform duration-500 border-2 border-purple-500/30"
                />
              </div>
            </div>

            {/* Right Column - Community Text + Image */}
            <div className="flex flex-col animate-fade-up-delay-2">
              {/* Community text above image */}
              <div className="text-center flex items-center justify-center mb-8">
                <h3 className="font-bold-caps text-lg md:text-xl lg:text-2xl text-white leading-tight">
                  CADA DÍA SON MÁS PERSONAS QUE SE UNEN A NUESTRA COMUNIDAD{" "}
                  <span className="text-yellow-highlight">"ADELGAZA SIN SALIR DE CASA"</span>{" "}
                  Y ESTÁN TOTALMENTE FELICES Y MUY AGRADECIDOS CON LOS{" "}
                  <span className="text-yellow-highlight">RESULTADOS OBTENIDOS</span>{" "}
                  CON NUESTRA METODOLOGÍA.
                </h3>
              </div>

              {/* Image below text with Hover Effect */}
              <div className="text-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-2xl 
                                blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img
                    src="/assets/images/program/cursovariosformatos.png"
                    alt="CURSO EN VARIOS FORMATOS - Desktop, Mobile, Tablet"
                    className="relative w-full h-auto max-w-lg mx-auto object-contain rounded-2xl shadow-2xl 
                             hover-scale transition-transform duration-500 border-2 border-yellow-500/30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Banner - Premium Design */}
          <div className="text-center animate-fade-up-delay-3">
            <div className="glassmorphic-dark p-6 md:p-8 rounded-2xl border-2 border-purple-500/30 
                          max-w-4xl mx-auto hover-lift">
              <h3 className="font-bold-caps text-xl md:text-2xl lg:text-3xl text-white leading-tight">
                TENDRÁS{" "}
                <span className="text-yellow-highlight" style={{ textShadow: '0 0 10px rgba(255, 230, 0, 0.5)' }}>
                  CLASES DE LUNES A VIERNES
                </span>{" "}
                POR TODO EL AÑO Y EL{" "}
                <span className="text-yellow-highlight" style={{ textShadow: '0 0 10px rgba(255, 230, 0, 0.5)' }}>
                  HORARIO LO PONES TÚ
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section - NEW Premium Feature */}
      <section className="relative bg-gradient-to-b from-black via-purple-950/30 to-black py-16 md:py-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-bold-caps text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              TU <span className="text-yellow-highlight">TRANSFORMACIÓN</span> SEMANA A SEMANA
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Descubre qué puedes esperar en cada etapa del programa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Semana 1 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-yellow-400 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
              <div className="relative glassmorphic-dark p-6 rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 h-full">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="font-bold-caps text-2xl text-purple-900">1</span>
                </div>
                <h3 className="font-bold-caps text-xl text-yellow-400 mb-3">SEMANA 1</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Adaptación inicial, conocimiento de los ejercicios, establecimiento de rutina y primeros cambios en tu energía.
                </p>
              </div>
            </div>

            {/* Semana 2-3 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-yellow-400 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
              <div className="relative glassmorphic-dark p-6 rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 h-full">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="font-bold-caps text-2xl text-purple-900">2-3</span>
                </div>
                <h3 className="font-bold-caps text-xl text-yellow-400 mb-3">SEMANAS 2-3</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-yellow-400">¡Primeros resultados visibles!</strong> Mejora en resistencia, mejor sueño, reducción de medidas y más confianza.
                </p>
              </div>
            </div>

            {/* Semana 4-6 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-yellow-400 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
              <div className="relative glassmorphic-dark p-6 rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 h-full">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="font-bold-caps text-2xl text-purple-900">4-6</span>
                </div>
                <h3 className="font-bold-caps text-xl text-yellow-400 mb-3">SEMANAS 4-6</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Transformación evidente, aumento de fuerza muscular, pérdida significativa de grasa y hábitos consolidados.
                </p>
              </div>
            </div>

            {/* Semana 7+ */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-yellow-400 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
              <div className="relative glassmorphic-dark p-6 rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 h-full">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="font-bold-caps text-2xl text-purple-900">7+</span>
                </div>
                <h3 className="font-bold-caps text-xl text-yellow-400 mb-3">SEMANA 7+</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-yellow-400">¡Nuevo estilo de vida!</strong> Cuerpo transformado, salud optimizada y energía desbordante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Categories */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12 px-4 overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-purple-500/30 group-hover:border-yellow-400/60 transition-all duration-500">
                <img
                  src="/assets/images/program/ABDOMEN.jpg"
                  alt="ABDOMEN - Ejercicios para abdomen plano"
                  className="w-full h-auto aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-purple-500/30 group-hover:border-yellow-400/60 transition-all duration-500">
                <img
                  src="/assets/images/program/miniaturagluteo.jpg"
                  alt="GLÚTEOS - Ejercicios para glúteos firmes"
                  className="w-full h-auto aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-purple-500/30 group-hover:border-yellow-400/60 transition-all duration-500">
                <img
                  src="/assets/images/program/miniaturabrazo.jpg"
                  alt="BRAZOS - Ejercicios para brazos tonificados"
                  className="w-full h-auto aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="relative bg-black py-16 px-4 overflow-hidden">
        {/* Premium layered background effects */}
        <div className="absolute inset-0">
          {/* Main gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-black to-purple-900/80"></div>
          
          {/* Animated glow orbs */}
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-yellow-400/20 to-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/20 to-yellow-400/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 via-yellow-400/10 to-purple-500/10 rounded-full blur-[150px]"></div>
          
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{ 
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Subtle light rays */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-400/50 via-transparent to-transparent blur-sm"></div>
            <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-purple-400/50 via-transparent to-transparent blur-sm"></div>
          </div>
          
          {/* Elegant shine effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-400/5 to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="group relative inline-block">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 via-purple-600/30 to-yellow-400/30 rounded-3xl opacity-60 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>
                
                {/* Image container with premium border */}
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-400 via-purple-500 to-yellow-400 rounded-2xl opacity-75 blur"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-purple-900 to-black border border-yellow-400/20">
                    <img
                      src="/assets/images/hero/PROFES-2.jpg"
                      alt="PROFESORES - Natalia Alarcón y Cristian Espinosa"
                      className="w-full h-auto max-w-md mx-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content with Premium Design */}
            <div className="text-left space-y-6">
              <div className="mb-8">
                <h3 className="font-bold-caps text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-6 leading-tight">
                  ¿QUIENES SON LOS PROFESORES Y POR QUÉ PUEDEN AYUDARTE?
                </h3>

                <div className="space-y-4">
                  <p className="text-lg text-white/90 leading-relaxed">
                    Desarrollado por <strong className="text-yellow-400 font-bold">NATALIA ALARCÓN Y CRISTIAN ESPINOSA</strong>, artistas, bailarines y entrenadores profesionales 
                    amantes de la actividad física, con más de 15 años de experiencia y un gran recorrido internacional.
                  </p>

                  <p className="text-lg text-white/90 leading-relaxed">
                    Te dan la garantía de que al hacer parte de esta bella comunidad, tendrás una metodología comprobada 
                    y altamente efectiva que te ayudará a lograr tus objetivos físicos, adquirir hábitos más saludables y mejorar tu calidad de vida.
                  </p>
                </div>
              </div>

              {/* Expandable Section 1 - Benefits with premium design */}
              <div className="group/card mb-4">
                <div 
                  className="relative bg-gradient-to-br from-purple-900/80 to-purple-950/80 backdrop-blur-sm text-white p-5 rounded-xl cursor-pointer hover:from-purple-800/80 hover:to-purple-900/80 transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400/60 shadow-lg hover:shadow-yellow-400/20"
                  onClick={() => setExpandedBenefits(!expandedBenefits)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <h4 className="font-bold-caps text-xl flex items-center justify-between relative z-10">
                    <span className="flex items-center gap-2">
                      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      ¿QUÉ MÁS VAS A LOGRAR?
                    </span>
                    <svg 
                      className={`w-6 h-6 text-yellow-400 transition-transform duration-300 ${expandedBenefits ? 'rotate-180' : 'rotate-0'}`}
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </h4>
                </div>
                {expandedBenefits && (
                  <div className="bg-gradient-to-br from-purple-950/60 to-black/60 backdrop-blur-sm text-white p-6 rounded-b-xl border-x border-b border-yellow-400/20 shadow-xl mt-[-4px]">
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Tonificar y fortalecer tu cuerpo",
                        "Prevenir y disminuir el sobrepeso", 
                        "Adquirir hábitos saludables",
                        "Transformar tu cuerpo sin gastar en gimnasios",
                        "Mejorar tu condición física",
                        "Prevenir enfermedades gracias a la actividad física",
                        "Ahorrar tiempo, con una metodología de solo 45 minutos al día",
                        "Disminuir el estrés y aumentar tu autoestima",
                        "Ahorrar dinero en membresías y mensualidades en gimnasios"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <svg className="w-5 h-5 text-yellow-400 group-hover/item:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                          </div>
                          <span className="text-white/90 text-base leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Expandable Section 2 - Method with premium design */}
              <div className="group/card">
                <div 
                  className="relative bg-gradient-to-br from-purple-900/80 to-purple-950/80 backdrop-blur-sm text-white p-5 rounded-xl cursor-pointer hover:from-purple-800/80 hover:to-purple-900/80 transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400/60 shadow-lg hover:shadow-yellow-400/20"
                  onClick={() => setExpandedMethod(!expandedMethod)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <h4 className="font-bold-caps text-xl flex items-center justify-between relative z-10">
                    <span className="flex items-center gap-2">
                      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                      ¿CÓMO LO VAS A LOGRAR?
                    </span>
                    <svg 
                      className={`w-6 h-6 text-yellow-400 transition-transform duration-300 ${expandedMethod ? 'rotate-180' : 'rotate-0'}`}
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </h4>
                </div>
                {expandedMethod && (
                  <div className="bg-gradient-to-br from-purple-950/60 to-black/60 backdrop-blur-sm text-white p-6 rounded-b-xl border-x border-b border-yellow-400/20 shadow-xl mt-[-4px]">
                    <p className="text-white/90 leading-relaxed text-base">
                      Nuestro método de entrenamiento es de tan solo <strong className="text-yellow-400 font-bold">45 minutos al día</strong>, 
                      las rutinas de ejercicio las haremos <strong className="text-yellow-400 font-bold">juntos de manera virtual</strong>, 
                      trabajaremos <strong className="text-yellow-400 font-bold">5 días por semana (DE LUNES A VIERNES)</strong> y tendrás 
                      acompañamiento constante de nuestra parte, <strong className="text-yellow-400 font-bold">podrás hacernos preguntas cuando quieras</strong>.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section - Premium Background */}
      <section className="relative bg-gradient-to-b from-black via-purple-950/30 to-black py-16 px-4 overflow-hidden">
        {/* Elegant background elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[180px]"></div>
          <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-yellow-400 rounded-full blur-[180px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-gradient-to-r from-purple-600/10 to-yellow-400/10 rounded-full blur-[150px]"></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(139, 92, 246, 0.1) 50px, rgba(139, 92, 246, 0.1) 100px)' }}></div>
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            {/* Left Column - 25 CUPOS + Info Text Below */}
            <div className="text-center lg:text-left animate-fade-up">
              {/* 25 CUPOS Section */}
              <div className="relative inline-block mb-8">
                {/* Urgency Badge */}
                <div className="absolute -top-6 -right-4 md:-right-8 z-10">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold-caps flex items-center gap-1 animate-pulse-slow shadow-lg">
                    <span className="text-yellow-400">⚡</span>
                    URGENTE
                  </div>
                </div>
                
                {/* Main "25 CUPOS" Text with Premium Effects */}
                <div className="relative">
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-2xl blur-2xl opacity-30 animate-pulse-slow"></div>
                  
                  <h1 className="font-bold-caps text-6xl md:text-7xl lg:text-8xl mb-3 relative"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))'
                      }}>
                    <span className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent"
                          style={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'scaleText 2s ease-in-out infinite',
                            transformOrigin: 'center'
                          }}>25</span>
                    <span className="text-white ml-2 md:ml-4">
                      CUPOS
                    </span>
                  </h1>
                </div>
              </div>
              
              <h2 className="font-bold-caps text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 tracking-wider">
                DISPONIBLES HASTA{" "}
                <span className="text-yellow-highlight">HOY</span>
              </h2>
              
              {/* Decorative Line */}
              <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 mx-auto lg:mx-0 rounded-full animate-pulse-slow mb-8"></div>

              {/* Info Text from Red Box - Below 25 CUPOS */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  TENDRÁS ACCESO A <span className="text-yellow-400">6 NIVELES DE DIFICULTAD</span>
                </h2>
                <p className="text-white text-lg mb-2">
                  EL PRECIO NORMAL POR CADA NIVEL ES DE 50 DÓLARES, EL PROGRAMA COMPLETO
                </p>
                <p className="text-red-500 text-xl font-bold">
                  CUESTA <span className="line-through">300 DÓLARES</span>
                </p>
              </div>
            </div>

            {/* Right Column - Course Modules Single Image with Border */}
            <div className="animate-fade-up-delay-2">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500"></div>
                <div className="relative p-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-2xl shadow-2xl">
                  <div className="relative bg-black rounded-xl p-4 overflow-hidden">
                    <img
                      src="/assets/images/program/MODULOS-min.png"
                      alt="6 Niveles de Dificultad - Programa Completo"
                      className="w-full h-auto object-contain rounded-lg transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Centered */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Offer Text */}
            <div className="mb-8 animate-fade-up-delay-3">
              <h3 className="text-3xl font-bold text-white mb-4">
                LLEVA <span className="text-yellow-400">TODOS</span> LOS NIVELES POR EL <span className="text-yellow-400">PRECIO DE UNO</span>
              </h3>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-gray-400 text-3xl line-through">$300</span>
                <span className="text-green-400 text-5xl font-bold">$49.99</span>
              </div>
              <p className="text-white text-sm">
                (La oferta convertida a tu moneda local)
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8 px-4">
              <p className="text-yellow-400 text-base md:text-xl font-bold mb-4 text-center">
                LA OFERTA TERMINARÁ EN...
              </p>
              <CountdownTimer />
            </div>

            {/* CTA Button */}
            <div className="mb-8 px-4">
              <DanceFitButton 
                onClick={handleInscribirse}
                variant="primary"
                disabled={isLoading}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 md:py-4 px-4 md:px-8 rounded-full text-base md:text-xl shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 w-full md:w-auto"
              >
                {isLoading ? 'PROCESANDO...' : (
                  <span className="block">
                    <span className="hidden md:inline">SÍ, QUIERO TRANSFORMAR MI CUERPO</span>
                    <span className="md:hidden">QUIERO TRANSFORMARME</span>
                  </span>
                )}
              </DanceFitButton>
            </div>

            {/* Trust Badges - NEW */}
            <div className="mb-8">
              <TrustBadges />
            </div>

            {/* Payment Logos */}
            <PaymentLogos />

            {/* Comparison Table */}
            <div className="mt-12 glassmorphic-dark p-4 md:p-6 lg:p-8 rounded-2xl border-2 border-yellow-400/30 backdrop-blur-xl mx-2 md:mx-0">
              <h3 className="font-bold-caps text-xl md:text-2xl lg:text-3xl text-white mb-6 text-center px-2">
                ¿QUÉ OBTENDRÁS CON ESTE PROGRAMA?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Left Column - Con el Programa */}
                <div className="bg-gradient-to-br from-green-900/50 to-emerald-950/50 rounded-xl p-6 border-2 border-green-400/50">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" fill="currentColor" />
                    <h4 className="font-bold-caps text-xl text-green-400">CON EL PROGRAMA</h4>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                      <span>6 niveles de dificultad progresivos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                      <span>Entrenamientos de solo 45 minutos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                      <span>Guía de alimentación incluida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                      <span>Acompañamiento constante</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                      <span>Comunidad de apoyo activa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                      <span>Resultados desde la 3ra semana</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" />
                      <span className="font-bold text-yellow-400">Todo por $49.99 USD</span>
                    </li>
                  </ul>
                </div>

                {/* Right Column - Sin el Programa */}
                <div className="bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-xl p-6 border-2 border-red-400/50">
                  <div className="flex items-center gap-3 mb-4">
                    <X className="w-8 h-8 text-red-400" />
                    <h4 className="font-bold-caps text-xl text-red-400">SIN EL PROGRAMA</h4>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Gimnasio: $30-80 mensuales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Entrenador personal: $200+/mes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Nutricionista: $100+/mes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Tiempo perdido en traslados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Sin flexibilidad de horarios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Resultados más lentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="font-bold text-red-400">Total: $300+ al mes</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-yellow-400 text-xl font-bold-caps">
                  ¡AHORRA MÁS DE $250 AL MES!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Bonuses Section */}
      <section id="bonuses-section" className="relative bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4 overflow-hidden">
        {/* Premium decorative background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[200px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 70%)' }}></div>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-bold-caps text-3xl md:text-4xl lg:text-5xl text-white mb-4 flex items-center justify-center gap-4 flex-wrap">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
              <span>INSCRÍBETE AHORA Y RECIBE ESTOS BONOS</span>
              <svg className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
              <span className="text-yellow-highlight w-full text-center">¡TOTALMENTE GRATIS!</span>
            </h2>
          </div>

          {/* Grid de Bonos - Primera Fila: 3 Bonos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-10 px-4 md:px-8">
            {/* Guía Alimenticia */}
            <div className="group relative transform hover:-translate-y-3 transition-all duration-500">
              {/* Outer glow container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-purple-900/60 to-purple-950/80 rounded-2xl p-6 border border-purple-500/30 group-hover:border-yellow-400/60 transition-all duration-500 shadow-xl backdrop-blur-sm">
                <div className="relative mb-5 overflow-hidden rounded-xl shadow-2xl">
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-[10px] font-bold-caps z-10 shadow-2xl flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                    </svg>
                    <span>PROGRAMA DE REGALO</span>
                  </div>
                  <img
                    src="/assets/images/program/GUÍAALIMENTICIA.png"
                    alt="Guía Alimenticia"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-bold-caps text-xl text-white mb-3 text-center group-hover:text-yellow-400 transition-colors duration-300 tracking-wide">
                  GUÍA ALIMENTICIA
                </h3>
                <p className="text-center text-sm text-white/80">
                  PRECIO ESTIMADO:{" "}
                  <span className="text-red-400 line-through font-bold">20 DÓLARES</span>
                </p>
              </div>
            </div>

            {/* Ejercicio para Adulto Mayor */}
            <div className="group relative transform hover:-translate-y-3 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-purple-900/60 to-purple-950/80 rounded-2xl p-6 border border-purple-500/30 group-hover:border-yellow-400/60 transition-all duration-500 shadow-xl backdrop-blur-sm">
                <div className="relative mb-5 overflow-hidden rounded-xl shadow-2xl">
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-[10px] font-bold-caps z-10 shadow-2xl flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                    </svg>
                    <span>PROGRAMA DE REGALO</span>
                  </div>
                  <img
                    src="/assets/images/program/EJERCICIOPARAADULTOMAYOR.png"
                    alt="Ejercicio para Adulto Mayor"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-bold-caps text-xl text-white mb-3 text-center group-hover:text-yellow-400 transition-colors duration-300 tracking-wide">
                  EJERCICIO PARA ADULTO MAYOR
                </h3>
                <p className="text-center text-sm text-white/80">
                  PRECIO ESTIMADO:{" "}
                  <span className="text-red-400 line-through font-bold">40 DÓLARES</span>
                </p>
              </div>
            </div>

            {/* Ejercicios para Mujeres en Embarazo */}
            <div className="group relative transform hover:-translate-y-3 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-purple-900/60 to-purple-950/80 rounded-2xl p-6 border border-purple-500/30 group-hover:border-yellow-400/60 transition-all duration-500 shadow-xl backdrop-blur-sm">
                <div className="relative mb-5 overflow-hidden rounded-xl shadow-2xl">
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-[10px] font-bold-caps z-10 shadow-2xl flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                    </svg>
                    <span>PROGRAMA DE REGALO</span>
                  </div>
                  <img
                    src="/assets/images/program/EJERCICIOSPARAEMBARAZO.png"
                    alt="Ejercicios para Mujeres en Embarazo"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-bold-caps text-xl text-white mb-3 text-center group-hover:text-yellow-400 transition-colors duration-300 tracking-wide">
                  EJERCICIOS PARA MUJERES EN EMBARAZO
                </h3>
                <p className="text-center text-sm text-white/80">
                  PRECIO ESTIMADO:{" "}
                  <span className="text-red-400 line-through font-bold">40 DÓLARES</span>
                </p>
              </div>
            </div>
          </div>

          {/* Grid de Bonos - Segunda Fila: 2 Bonos Centrados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto mb-16 px-4 md:px-8">
            {/* Estiramientos y Relajación */}
            <div className="group relative transform hover:-translate-y-3 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-purple-900/60 to-purple-950/80 rounded-2xl p-6 border border-purple-500/30 group-hover:border-yellow-400/60 transition-all duration-500 shadow-xl backdrop-blur-sm">
                <div className="relative mb-5 overflow-hidden rounded-xl shadow-2xl">
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-[10px] font-bold-caps z-10 shadow-2xl flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                    </svg>
                    <span>PROGRAMA DE REGALO</span>
                  </div>
                  <img
                    src="/assets/images/program/ESTIRAMIENTOSYRELAJACIÓN.png"
                    alt="Estiramientos y Relajación"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-bold-caps text-xl text-white mb-3 text-center group-hover:text-yellow-400 transition-colors duration-300 tracking-wide">
                  ESTIRAMIENTOS Y RELAJACIÓN
                </h3>
                <p className="text-center text-sm text-white/80">
                  PRECIO ESTIMADO:{" "}
                  <span className="text-red-400 line-through font-bold">40 DÓLARES</span>
                </p>
              </div>
            </div>

            {/* Clases de Baile */}
            <div className="group relative transform hover:-translate-y-3 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-purple-900/60 to-purple-950/80 rounded-2xl p-6 border border-purple-500/30 group-hover:border-yellow-400/60 transition-all duration-500 shadow-xl backdrop-blur-sm">
                <div className="relative mb-5 overflow-hidden rounded-xl shadow-2xl">
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-[10px] font-bold-caps z-10 shadow-2xl flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                    </svg>
                    <span>PROGRAMA DE REGALO</span>
                  </div>
                  <img
                    src="/assets/images/program/CLASESDEBAILE.png"
                    alt="Clases de Baile"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-bold-caps text-xl text-white mb-3 text-center group-hover:text-yellow-400 transition-colors duration-300 tracking-wide">
                  CLASES DE BAILE
                </h3>
                <p className="text-center text-sm text-white/80">
                  PRECIO ESTIMADO:{" "}
                  <span className="text-red-400 line-through font-bold">60 DÓLARES</span>
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-8">
            <p className="font-bold-caps text-2xl md:text-3xl text-white mb-4">
              PRECIO ESTIMADO EN SÓLO BONOS = <span className="text-yellow-highlight">$230 DÓLARES</span>
            </p>
            <p className="font-bold-caps text-lg md:text-xl text-white mb-6 flex items-center justify-center gap-3 flex-wrap">
              <span>RECIBE EL PROGRAMA COMPLETO + LOS 6 BONOS</span>
              <svg className="w-6 h-6 text-yellow-400 inline-block" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
              <span>ANTES QUE EL CONTADOR LLEGUE A CERO.</span>
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <CountdownTimer />
          </div>

          {/* Precio y CTA */}
          <div className="text-center mb-8">
            <div className="mb-6">
              <span className="text-4xl md:text-5xl text-red-500 line-through font-bold mr-4">$300</span>
              <span className="text-5xl md:text-7xl text-green-400 font-bold-caps">$49.99</span>
            </div>
            
            <DanceFitButton 
              onClick={handleInscribirse}
              disabled={isLoading}
              className="mb-6 mx-auto text-base md:text-2xl px-4 py-4 md:px-8 md:py-6 disabled:opacity-50 w-full max-w-md"
              variant="primary"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-6 w-6 inline mr-2" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESANDO...
                </>
              ) : (
                <>
                  <span className="hidden md:inline">⚡ COMENZAR MI TRANSFORMACIÓN HOY</span>
                  <span className="md:hidden">⚡ COMENZAR MI TRANSFORMACIÓN</span>
                </>
              )}
            </DanceFitButton>

            {/* Payment Logos */}
            <div className="mb-4">
              <PaymentLogos />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-3">
              <span className="text-white font-bold text-lg tracking-wide">SOLO QUEDAN 7 CUPOS</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-2 bg-white/20 backdrop-blur-sm rounded-full overflow-hidden border border-white/10">
                <div className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 w-[85%] transition-all duration-300 shadow-lg"
                     style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)' }}></div>
              </div>
              <span className="text-white font-bold text-lg min-w-[50px] text-right">85%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Bonuses Section - 10 First People */}
      <section className="relative bg-gradient-to-br from-purple-950 via-fuchsia-900 to-purple-950 py-16 px-4 overflow-hidden">
        {/* Dynamic background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-fuchsia-500 rounded-full blur-[250px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[250px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 100px, rgba(217, 70, 239, 0.1) 100px, rgba(217, 70, 239, 0.1) 200px)' }}></div>
        <div className="max-w-7xl mx-auto">
          {/* Header con fondo destacado */}
          <div className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 rounded-2xl p-6 md:p-8 mb-12 text-center shadow-2xl border-2 border-yellow-400/50">
            <h2 className="font-bold-caps text-2xl md:text-3xl lg:text-4xl text-white mb-2 flex items-center justify-center gap-4">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
              <span>Y AÚN HAY MÁS</span>
            </h2>
            <p className="font-bold-caps text-lg md:text-2xl text-white">
              <span className="text-yellow-300">3 BONOS SUPER EXCLUSIVOS</span> SOLO PARA LAS PRIMERAS{" "}
              <span className="text-yellow-300">10 PERSONAS</span> QUE SE INSCRIBAN{" "}
              <span className="text-yellow-300">EL DÍA DE HOY</span>
            </p>
          </div>

          {/* Grid de 3 Bonos Exclusivos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12">
            {/* Certificado Hotmart */}
            <div className="group relative transform hover:-translate-y-3 transition-all duration-500">
              {/* Outer glow container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-purple-900/60 to-purple-950/80 rounded-2xl p-6 border border-purple-500/30 group-hover:border-yellow-400/60 transition-all duration-500 shadow-xl backdrop-blur-sm">
                <h3 className="font-bold-caps text-sm md:text-base text-white mb-5 leading-tight min-h-[60px] flex items-center justify-center group-hover:text-yellow-400 transition-colors duration-300">
                  CERTIFICADO AL CULMINAR EL PROGRAMA AVALADO POR HOTMART
                </h3>
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src="/assets/images/hero/CERTIFICADOHOTMART.jpg"
                    alt="Certificado Hotmart"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* WhatsApp Personal */}
            <div className="group relative transform hover:-translate-y-3 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-green-400 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-purple-900/60 to-purple-950/80 rounded-2xl p-4 md:p-6 border border-purple-500/30 group-hover:border-green-400/60 transition-all duration-500 shadow-xl backdrop-blur-sm">
                <h3 className="font-bold-caps text-xs md:text-base text-white mb-4 md:mb-5 leading-tight min-h-[50px] md:min-h-[60px] flex items-center justify-center group-hover:text-green-400 transition-colors duration-300">
                  <span className="hidden md:inline">ACCESO A NUESTRO WHATSAPP PERSONAL PARA ASESORÍA Y ACOMPAÑAMIENTO PERSONALIZADO</span>
                  <span className="md:hidden text-center">WHATSAPP PERSONAL<br />ASESORÍA Y ACOMPAÑAMIENTO</span>
                </h3>
                <div className="relative overflow-hidden rounded-xl flex items-center justify-center py-4 md:py-8">
                  <img
                    src="/assets/images/hero/whatsapp.png"
                    alt="WhatsApp"
                    className="w-auto h-20 md:h-32 lg:h-40 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Grupo Facebook */}
            <div className="group relative transform hover:-translate-y-3 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-400 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-purple-900/60 to-purple-950/80 rounded-2xl p-4 md:p-6 border border-purple-500/30 group-hover:border-blue-400/60 transition-all duration-500 shadow-xl backdrop-blur-sm">
                <h3 className="font-bold-caps text-xs md:text-base text-white mb-4 md:mb-5 leading-tight min-h-[50px] md:min-h-[60px] flex items-center justify-center group-hover:text-blue-400 transition-colors duration-300">
                  <span className="hidden md:inline">ACCESO A NUESTRO GRUPO EXCLUSIVO DE FACEBOOK EN DONDE TE APOYAMOS Y MOTIVAMOS SIEMPRE</span>
                  <span className="md:hidden text-center">GRUPO EXCLUSIVO<br />FACEBOOK - APOYO Y MOTIVACIÓN</span>
                </h3>
                <div className="relative overflow-hidden rounded-xl flex items-center justify-center py-4 md:py-8">
                  <img
                    src="/assets/images/hero/facebook.png"
                    alt="Facebook"
                    className="w-auto h-20 md:h-32 lg:h-40 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8 px-2">
            <DanceFitButton 
              onClick={handleInscribirse}
              disabled={isLoading}
              className="mb-6 mx-auto text-base md:text-xl lg:text-2xl px-6 md:px-12 py-4 md:py-6 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 text-black font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 w-full max-w-md"
              variant="primary"
            >
              {isLoading ? '⏳ CARGANDO...' : (
                <>
                  <span className="hidden md:inline">🎁 ASEGURAR MI CUPO + BONOS GRATIS</span>
                  <span className="md:hidden">🎁 ASEGURAR CUPO + BONOS</span>
                </>
              )}
            </DanceFitButton>

            {/* Payment Logos */}
            <div>
              <PaymentLogos />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div id="testimonials-section">
        <TestimonialsSection />
      </div>

      {/* Impressive Stats Section - NEW Premium Feature */}
      <section className="relative bg-gradient-to-b from-black via-purple-950/40 to-black py-16 md:py-20 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[200px] animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-bold-caps text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              RESULTADOS QUE <span className="text-yellow-highlight">HABLAN POR SÍ SOLOS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Stat 1 - Estudiantes Transformados */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-yellow-400 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
              <div className="relative glassmorphic-dark p-6 md:p-8 rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 text-center h-full">
                <div className="mb-3 md:mb-4">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <AnimatedCounter 
                  end={3500}
                  suffix="+"
                  className="text-4xl md:text-5xl font-bold-caps text-yellow-400 mb-2"
                />
                <p className="text-white/80 text-sm uppercase tracking-wide">
                  Estudiantes<br/>Transformados
                </p>
              </div>
            </div>

            {/* Stat 2 - Kilos Perdidos */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-yellow-400 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
              <div className="relative glassmorphic-dark p-6 md:p-8 rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 text-center h-full">
                <div className="mb-3 md:mb-4">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"/>
                  </svg>
                </div>
                <AnimatedCounter 
                  end={8}
                  prefix="~"
                  suffix=" kg"
                  className="text-4xl md:text-5xl font-bold-caps text-green-400 mb-2"
                />
                <p className="text-white/80 text-sm uppercase tracking-wide">
                  Promedio de Peso<br/>Perdido
                </p>
              </div>
            </div>

            {/* Stat 3 - Años de Experiencia */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-yellow-400 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
              <div className="relative glassmorphic-dark p-6 md:p-8 rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 text-center h-full">
                <div className="mb-3 md:mb-4">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
                <AnimatedCounter 
                  end={15}
                  suffix="+"
                  className="text-4xl md:text-5xl font-bold-caps text-purple-400 mb-2"
                />
                <p className="text-white/80 text-sm uppercase tracking-wide">
                  Años de<br/>Experiencia
                </p>
              </div>
            </div>

            {/* Stat 4 - Países */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-yellow-400 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
              <div className="relative glassmorphic-dark p-6 md:p-8 rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300 text-center h-full">
                <div className="mb-3 md:mb-4">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <AnimatedCounter 
                  end={18}
                  suffix="+"
                  className="text-4xl md:text-5xl font-bold-caps text-blue-400 mb-2"
                />
                <p className="text-white/80 text-sm uppercase tracking-wide">
                  Países<br/>Alcanzados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Guarantee Two-column layout - Premium Design */}
      <section id="guarantee-section" className="relative bg-gradient-to-br from-purple-950 via-black to-purple-950 py-16 md:py-20 px-4 overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[250px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[250px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(139, 92, 246, 0.1) 80px, rgba(139, 92, 246, 0.1) 160px)' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-start">
            {/* Left: FAQ Accordion */}
            <div id="faq-section" className="bg-gradient-to-br from-gray-900/95 via-black to-gray-900/95 rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-8 border-2 border-purple-500/30 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
              <FAQSection />
            </div>

            {/* Right: Guarantee */}
            <div className="space-y-6 md:space-y-8 lg:col-span-1">
              {/* Guarantee Section with Premium Card */}
              <div className="bg-gradient-to-br from-green-900/90 via-emerald-950/95 to-green-950/90 rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-8 border-2 border-green-500/30 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm">
                <GuaranteeSection />
              </div>
            </div>

            {/* CTA Card - Premium Design - Centered on Desktop */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 rounded-xl md:rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-yellow-400/30 w-full lg:max-w-3xl">
                {/* Timer Section */}
                <div className="mb-6 md:mb-8">
                  <p className="text-yellow-400 text-xl md:text-2xl font-bold-caps mb-6 text-center tracking-wide">
                    LA OFERTA TERMINARÁ EN...
                  </p>
                  <div className="flex justify-center mb-6">
                    <CountdownTimer />
                  </div>
                </div>

                {/* CTA Button Premium */}
                <div className="mb-8 flex justify-center">
                  <DanceFitButton 
                    variant="accent" 
                    size="xl" 
                    disabled={isLoading}
                    className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-500 text-black font-bold-caps text-lg md:text-xl px-12 py-5 shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-300 disabled:opacity-50"
                    onClick={handleInscribirse}
                  >
                    {isLoading ? '⏳ PROCESANDO...' : '🚀 SÍ, QUIERO MI TRANSFORMACIÓN AHORA'}
                  </DanceFitButton>
                </div>

                {/* Discount Badge - Dinámico */}
                <div className="bg-yellow-400 text-black rounded-xl p-4 mb-6 max-w-md mx-auto text-center shadow-lg border-2 border-yellow-500">
                  <p className="font-bold-caps text-sm mb-2">SOLO QUEDAN {cuposRestantes} CUPOS - ¡{Math.round((cuposRestantes / 25) * 100)}% OCUPADO!</p>
                  <div className="bg-white rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-red-600 to-red-500 h-full transition-all duration-1000" style={{ width: `${100 - (cuposRestantes / 25) * 100}%` }}></div>
                  </div>
                </div>

                {/* Payment Section Premium */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-white font-bold-caps text-center mb-4 text-lg flex items-center justify-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-400" fill="currentColor" />
                    PAGO 100% SEGURO
                  </p>
                  <div className="max-w-md mx-auto">
                    <PaymentLogos />
                  </div>
                  <p className="text-white/80 text-xs text-center mt-4">
                    Procesado por Hotmart® - Plataforma líder mundial en pagos digitales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-8 px-4 overflow-hidden">
        {/* Subtle footer decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-yellow-400 rounded-full blur-[200px]"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Social Media Links */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 px-4">
            <a 
              href="https://www.facebook.com/tu-pagina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-secondary-foreground hover:text-yellow-highlight transition-all duration-300 transform hover:scale-105 w-full md:w-auto justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:border-yellow-highlight group-hover:bg-yellow-highlight/10 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 animate-pulse-slow flex-shrink-0">
                <Facebook className="w-5 h-5" />
              </div>
              <span className="font-bold text-base md:text-lg">Síguenos en Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/tu-cuenta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-secondary-foreground hover:text-yellow-highlight transition-all duration-300 transform hover:scale-105 w-full md:w-auto justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:border-yellow-highlight group-hover:bg-yellow-highlight/10 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 animate-pulse-slow flex-shrink-0" style={{ animationDelay: '0.5s' }}>
                <Instagram className="w-5 h-5" />
              </div>
              <span className="font-bold text-base md:text-lg">Síguenos en Instagram</span>
            </a>
            <a 
              href="https://www.tiktok.com/@tu-cuenta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-secondary-foreground hover:text-yellow-highlight transition-all duration-300 transform hover:scale-105 w-full md:w-auto justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:border-yellow-highlight group-hover:bg-yellow-highlight/10 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 animate-pulse-slow flex-shrink-0" style={{ animationDelay: '1s' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <span className="font-bold text-base md:text-lg">Síguenos en Tiktok</span>
            </a>
          </div>

          {/* Logo and Footer Content */}
          <div className="text-center mb-8">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
              <img
                src="/assets/images/hero/crashing-portada.png"
                alt="Adelgaza sin salir de casa - Logo"
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>

            {/* Copyright */}
            <p className="text-white text-sm mb-4">
              © 2026 – Adelgaza sin salir de casa | Todos los derechos reservados
            </p>

            {/* Disclaimer */}
            <div className="max-w-5xl mx-auto space-y-4 text-white/80 text-xs md:text-sm leading-relaxed">
              <p className="font-semibold">
                DESCARGOS DE RESPONSABILIDAD IMPORTANTES: Este sitio no es parte del sitio web de Facebook o Facebook, Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
              </p>
              
              <p>
                DESCARGO DE RESPONSABILIDAD: Este producto no sustituye el asesoramiento médico profesional, consulte siempre a un médico para tratar problemas de salud. Los resultados de nuestro sistema pueden variar y ver resultados si siguen la metodología, son constantes y disciplinados, lo recomendado es el entrenamiento de 45 minutos completo y por 5 días a la semana. Tendrán dos instructores profesionales con más de 15 años de experiencia en actividad física, comprometidos con ayudarles a obtener los resultados que tanto desean. Pero si usted no esta comprometido, o quiere obtener resultados sin esfuerzo y sin hacer el entrenamiento como nosotros le lo proponemos, mejor NO OBTENGA ESTE CURSO. Al enviar su dirección de correo electrónico y número de teléfono en este sitio web, usted está autorizando a nuestra empresa a enviarle información y promociones por correo electrónico, llamadas telefónicas y mensajes de texto. Los ejercicios deben hacerse de la forma correcta, tal cual como nosotros lo explicamos, si usted tiene alguna prescripción médica, o alguna molestia física, mejor absténgase de hacer los ejercicios y consulte a su médico previamente. Usted es el único responsable de sus propios resultados y compromiso con su estado físico y emocional. Usted acepta que el Programa Adelgaza sin salir de casa no es responsables de ninguna manera de sus resultados al usar nuestro programa.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in overflow-y-auto">
          <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-black rounded-2xl p-8 max-w-md w-full relative shadow-2xl border border-yellow-400/30">
            {/* Decorative elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
            
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center text-white relative">
              {/* Icon and Title */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h2 className="font-bold-caps text-3xl mb-2 text-yellow-400">
                  ¡ESPERA!
                </h2>
                <h3 className="font-bold text-xl text-white/90">
                  ANTES DE IRTE...
                </h3>
              </div>
              
              <p className="text-lg mb-6 text-white/80">
                Tenemos una <strong className="text-yellow-400">OFERTA ESPECIAL</strong> solo para ti
              </p>
              
              {/* Discount Box */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-purple-900 rounded-xl p-6 mb-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                    </svg>
                    <h4 className="font-bold-caps text-xl">
                      DESCUENTO EXCLUSIVO
                    </h4>
                  </div>
                  <p className="font-bold-caps text-4xl mb-1">25% OFF</p>
                  <p className="text-sm font-semibold opacity-90">Solo por los próximos 10 minutos</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-3 mb-4">
                <button
                  onClick={handleAprovecharOferta}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 font-bold-caps py-4 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl text-lg"
                >
                  ¡APROVECHAR DESCUENTO!
                </button>
                
                <button
                  onClick={handleRechazarOferta}
                  className="text-white/60 hover:text-white/80 text-sm underline transition-colors duration-300"
                >
                  No, gracias. Continuar sin descuento
                </button>
              </div>
              
              <div className="text-xs text-white/50">
                * Oferta válida solo una vez por usuario
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Botón Flotante Móvil */}
      {showMobileFloatingButton && !showExitIntent && !ofertaEspecialActivada && (
        <div className="fixed bottom-4 right-4 z-40 md:hidden">
          <button
            onClick={() => {
              setShowMobileFloatingButton(false);
              setShowExitIntent(true);
            }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce flex items-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
            </svg>
            <span>¡DESCUENTO ESPECIAL!</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;