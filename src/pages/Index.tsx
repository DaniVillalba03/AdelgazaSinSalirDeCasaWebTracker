import { DanceFitButton } from "@/components/DanceFitButton";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CountdownTimer } from "@/components/CountdownTimer";
import { PaymentLogos } from "@/components/PaymentLogos";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
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

    // Timer automático para móvil (mostrar oferta después de 30 segundos)
    const mobileTimer = setTimeout(() => {
      if (window.innerWidth <= 768 && !showExitIntent && !ofertaEspecialActivada) {
        setShowExitIntent(true);
      }
    }, 30000); // 30 segundos

    // Timer para botón flotante móvil (aparecer después de 15 segundos)
    const floatingButtonTimer = setTimeout(() => {
      if (window.innerWidth <= 768 && !ofertaEspecialActivada && !showExitIntent) {
        setShowMobileFloatingButton(true);
      }
    }, 15000); // 15 segundos

    // Detección de intento de salir (beforeunload)
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Solo en móvil y si no se ha mostrado ya y no se aceptó la oferta
      if (window.innerWidth <= 768 && !showExitIntent && !ofertaEspecialActivada) {
        setShowExitIntent(true);
        e.preventDefault();
        e.returnValue = ''; // Requerido por algunos navegadores
        return ''; // Para compatibilidad
      }
    };

    // Configurar eventos según el dispositivo
    if (window.innerWidth > 768) {
      // Desktop: mouse leave
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    } else {
      // Móvil: scroll hacia arriba y beforeunload
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      // Cleanup todos los eventos
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(mobileTimer);
      clearTimeout(floatingButtonTimer);
    };
  }, [showExitIntent, ofertaEspecialActivada]);

  const handleInscribirse = () => {
    const url = ofertaEspecialActivada 
      ? 'https://go.hotmart.com/Y102004689J?ap=5589'  // URL con descuento
      : 'https://go.hotmart.com/Y102004689J?ap=0ff3';  // URL normal
    window.open(url, '_blank');
  };

  const handleAprovecharOferta = () => {
    setOfertaEspecialActivada(true);  // Activar la oferta especial
    setShowExitIntent(false);  // Cerrar el modal
    // No marcar como rechazado, permitir que no vuelva a aparecer
    const url = 'https://go.hotmart.com/Y102004689J?ap=5589';
    window.open(url, '_blank');
  };

  const handleRechazarOferta = () => {
    setShowExitIntent(false);  // Cerrar el modal
    // NO marcar usuarioRechazoOferta como true para que siga apareciendo
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header Hero Section - Premium */}
      <header className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 py-2 px-2 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="w-full relative z-10">
          {/* Hero Image with Animation */}
          <div className="animate-fade-up">
            <img 
              src="/assets/images/hero/crashing-portada.png"
              alt="Adelgaza Sin Salir De Casa - Programa de Transformación"
              className="w-full h-auto aspect-[32/9] object-cover rounded-lg shadow-2xl 
                       hover-scale transition-transform duration-500"
            />
          </div>
        </div>
      </header>

  {/* Wavy separator (hero -> main content) */}
  <WaveSeparator topColor="#6b21a8" bottomColor="#000000" flip={true} height={80} />

  {/* Main Content Section - Redesigned */}
  <section className="bg-black text-white py-16 md:py-20 px-4 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-[120px]"></div>
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
            <span className="text-2xl animate-bounce">👇</span>
            <span>Mira este video de 1 MINUTO para saber como</span>
            <span className="text-2xl animate-bounce">👇</span>
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
                  preload="auto"
                  poster="/assets/images/hero/video-thumbnail.jpg"
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
  <section className="bg-black py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
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

      {/* Exercise Categories */}
      <section className="bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <img
                src="/assets/images/program/ABDOMEN.jpg"
                alt="ABDOMEN - Ejercicios para abdomen plano"
                className="w-full h-auto aspect-square object-cover rounded-lg shadow-lg mb-4"
              />
            </div>
            <div className="text-center">
              <img
                src="/assets/images/program/miniaturagluteo.jpg"
                alt="GLÚTEOS - Ejercicios para glúteos firmes"
                className="w-full h-auto aspect-square object-cover rounded-lg shadow-lg mb-4"
              />
            </div>
            <div className="text-center">
              <img
                src="/assets/images/program/miniaturabrazo.jpg"
                alt="BRAZOS - Ejercicios para brazos tonificados"
                className="w-full h-auto aspect-square object-cover rounded-lg shadow-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="text-center">
              <img
                src="/assets/images/hero/PROFES-2.jpg"
                alt="PROFESORES - Natalia Alarcón y Cristian Espinosa"
                className="w-full h-auto max-w-md mx-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Text Content with Expandable Sections */}
            <div className="text-center lg:text-left">
              <h3 className="font-bold-caps text-2xl text-yellow-400 mb-6">
                ¿QUIENES SON LOS PROFESORES Y POR QUÉ PUEDEN AYUDARTE?
              </h3>

              <p className="text-lg text-white leading-relaxed mb-8">
                Desarrollado por <strong className="text-yellow-300">NATALIA ALARCÓN Y CRISTIAN ESPINOSA</strong> artistas, bailarines y entrenadores profesionales 
                amantes de la actividad física, con más de 15 años de experiencia y un gran recorrido internacional.
              </p>

              <p className="text-lg text-white leading-relaxed mb-8">
                Te dan la garantía de que al hacer parte de esta bella comunidad, tendrás una metodología comprobada 
                y altamente efectiva que te ayudará a lograr tus objetivos físicos, adquirir hábitos más saludables y mejorar tu calidad de vida.
              </p>

              {/* Expandable Section 1 - Benefits */}
              <div className="mb-6">
                <div 
                  className="bg-purple-800 text-white p-4 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors border-2 border-purple-300"
                  onClick={() => setExpandedBenefits(!expandedBenefits)}
                >
                  <h4 className="font-bold text-lg flex items-center justify-between">
                    ¿QUÉ MÁS VAS A LOGRAR?
                    <span className="text-2xl transform transition-transform duration-200" style={{
                      transform: expandedBenefits ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}>⊕</span>
                  </h4>
                </div>
                {expandedBenefits && (
                  <div className="bg-purple-700 text-white p-4 rounded-b-lg border-2 border-t-0 border-purple-300">
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "✅ Tonificar y fortalecer tu cuerpo",
                        "✅ Prevenir y disminuir el sobrepeso", 
                        "✅ Adquirir hábitos saludables",
                        "✅ Transformar tu cuerpo sin gastar en gimnasios",
                        "✅ Mejorar tu condición física",
                        "✅ Prevenir enfermedades gracias a la actividad física",
                        "✅ Ahorrar tiempo, con una metodología de solo 45 minutos al día",
                        "✅ Disminuir el estrés y aumentar tu autoestima",
                        "✅ Ahorrar dinero en membresías y mensualidades en gimnasios"
                      ].map((benefit, index) => (
                        <div key={index} className="text-left">
                          <span className="text-white text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Expandable Section 2 - Method */}
              <div className="mb-6">
                <div 
                  className="bg-purple-800 text-white p-4 rounded-lg cursor-pointer hover:bg-purple-700 transition-colors border-2 border-purple-300"
                  onClick={() => setExpandedMethod(!expandedMethod)}
                >
                  <h4 className="font-bold text-lg flex items-center justify-between">
                    ¿CÓMO LO VAS A LOGRAR?
                    <span className="text-2xl transform transition-transform duration-200" style={{
                      transform: expandedMethod ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}>⊕</span>
                  </h4>
                </div>
                {expandedMethod && (
                  <div className="bg-purple-700 text-white p-4 rounded-b-lg border-2 border-t-0 border-purple-300">
                    <p className="text-white leading-relaxed">
                      Nuestro método de entrenamiento es de tan solo <strong className="text-yellow-300">45 minutos al día</strong>, 
                      las rutinas de ejercicio las haremos <strong className="text-yellow-300">juntos de manera virtual</strong>, 
                      trabajaremos <strong className="text-yellow-300">5 días por semana (DE LUNES A VIERNES)</strong> y tendrás 
                      acompañamiento constante de nuestra parte, <strong className="text-yellow-300">podrás hacernos preguntas cuando quieras</strong>.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section - Black Background */}
      <section className="bg-black py-16 px-4">
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
              <div className="relative p-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-2xl shadow-2xl">
                <div className="relative bg-black rounded-xl p-4">
                  <img
                    src="/assets/images/program/MODULOS-min.png"
                    alt="6 Niveles de Dificultad - Programa Completo"
                    className="w-full h-auto object-contain rounded-lg"
                  />
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
            <div className="mb-8">
              <p className="text-yellow-400 text-xl font-bold mb-4">
                LA OFERTA TERMINARÁ EN...
              </p>
              <CountdownTimer />
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <DanceFitButton 
                variant="primary"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                INSCRÍBETE AL PROGRAMA AQUÍ
              </DanceFitButton>
            </div>

            {/* Payment Logos */}
            <PaymentLogos />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ + Guarantee Two-column layout */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: FAQ Accordion */}
            <div>
              <FAQSection />
            </div>

            {/* Right: Guarantee / Timer / CTA */}
            <div>
              <GuaranteeSection />

              {/* Moved CTA block: Countdown, CTA button, progress and payment logos */}
              <div className="mt-8 p-6 bg-transparent">
                <div className="mb-8">
                  <p className="text-yellow-400 text-xl font-bold mb-4 text-center">LA OFERTA TERMINARÁ EN...</p>
                  <div className="flex justify-center">
                    <CountdownTimer />
                  </div>
                </div>

                <div className="mb-6 flex justify-center">
                  <DanceFitButton 
                    variant="accent" 
                    size="xl" 
                    className="mb-4"
                    onClick={handleInscribirse}
                  >
                    INSCRÍBETE AQUÍ
                  </DanceFitButton>
                </div>

                <div className="bg-yellow-highlight text-accent-foreground rounded-lg p-4 mb-6 max-w-md mx-auto text-center">
                  <div className="bg-red-500 rounded-full h-4 mb-2" style={{ width: '85%' }}></div>
                  <span className="font-bold">SOLO QUEDAN 7 CUPOS - 85%</span>
                </div>

                <div className="max-w-md mx-auto">
                  <PaymentLogos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-secondary py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-8 mb-6">
            <a href="#" className="flex items-center gap-2 text-secondary-foreground hover:text-yellow-highlight">
              <Facebook className="w-6 h-6" />
              <span className="font-bold">Síguenos en Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-secondary-foreground hover:text-yellow-highlight">
              <Instagram className="w-6 h-6" />
              <span className="font-bold">Síguenos en Instagram</span>
            </a>
          </div>

          <div className="text-center">
            <img
              src="/assets/images/hero/tiktok-4-min.png"
              alt="Logo Tiktok"
              className="w-24 h-24 mx-auto mb-4 object-contain optimize-image"
            />
            <p className="text-secondary-foreground mb-6">Síguenos en Tiktok</p>
          </div>

          <div className="text-center text-sm text-secondary-foreground">
            <p className="mb-2">© 2025 – Adelgaza sin salir de casa | Todos los derechos reservados</p>
            <p>
              DESCARGOS DE RESPONSABILIDAD IMPORTANTES: Este sitio no es parte del sitio web de Facebook o Facebook, Inc. 
              Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </footer>

      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-8 max-w-md w-full relative animate-pulse shadow-2xl">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-white hover:text-yellow-highlight"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center text-white">
              <h2 className="font-bold-caps text-2xl mb-4 text-yellow-highlight">
                ¡ESPERA! 🛑
              </h2>
              
              <h3 className="font-bold text-xl mb-4">
                ANTES DE IRTE...
              </h3>
              
              <p className="text-lg mb-6">
                Tenemos una <strong className="text-yellow-highlight">OFERTA ESPECIAL</strong> solo para ti
              </p>
              
              <div className="bg-yellow-highlight text-purple-800 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-lg mb-2">🎁 DESCUENTO EXCLUSIVO</h4>
                <p className="font-bold text-2xl">25% OFF</p>
                <p className="text-sm">Solo por los próximos 10 minutos</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <DanceFitButton 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  onClick={handleAprovecharOferta}
                >
                  ¡APROVECHAR DESCUENTO!
                </DanceFitButton>
                
                <button
                  onClick={handleRechazarOferta}
                  className="text-white/80 hover:text-white text-sm underline"
                >
                  No, gracias. Continuar sin descuento
                </button>
              </div>
              
              <div className="text-xs text-white/60">
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
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce"
          >
            🎁 ¡DESCUENTO ESPECIAL!
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;