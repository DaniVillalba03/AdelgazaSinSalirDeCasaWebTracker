import { DanceFitButton } from "./DanceFitButton";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { CountdownTimer } from "./CountdownTimer";
import { PaymentLogos } from "./PaymentLogos";
import { CheckCircle, Gift, Zap } from "lucide-react";

interface PricingSectionProps {
  ofertaEspecialActivada?: boolean;
}

export const PricingSection = ({ ofertaEspecialActivada = false }: PricingSectionProps) => {
  const handleInscribirse = () => {
    const url = ofertaEspecialActivada 
      ? 'https://go.hotmart.com/Y102004689J?ap=5589'  // URL con descuento
      : 'https://go.hotmart.com/Y102004689J?ap=0ff3';  // URL normal
    window.open(url, '_blank');
  };

  const bonuses = [
    {
      title: "GUÍA ALIMENTICIA",
      price: "20 DÓLARES"
    },
    {
      title: "RUTINAS PARA ADULTOS MAYORES",
      price: "40 DÓLARES"
    },
    {
      title: "RUTINAS DE ESTIRAMIENTO",
      price: "40 DÓLARES"
    },
    {
      title: "RUTINAS PARA EMBARAZADAS",
      price: "60 DÓLARES"
    },
    {
      title: "CLASES DE BAILE",
      price: "60 DÓLARES"
    }
  ];

  const courseModules = [
    { title: "NIVEL BÁSICO 1", delay: "grid-item-1" },
    { title: "NIVEL BÁSICO 2", delay: "grid-item-2" },
    { title: "NIVEL INTERMEDIO 1", delay: "grid-item-3" },
    { title: "NIVEL INTERMEDIO 2", delay: "grid-item-4" },
    { title: "NIVEL AVANZADO 1", delay: "grid-item-5" },
    { title: "NIVEL AVANZADO 2", delay: "grid-item-6" },
  ];

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout - Premium Design */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - 25 CUPOS Text with Glow Effect */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="relative inline-block">
              {/* Urgency Badge */}
              <div className="absolute -top-6 -right-4 md:-right-8 z-10">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold-caps flex items-center gap-1 animate-pulse-slow shadow-lg">
                  <Zap className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" />
                  URGENTE
                </div>
              </div>
              
              {/* Main "25 CUPOS" Text */}
              <h1 className="font-bold-caps text-6xl md:text-7xl lg:text-8xl mb-3 relative">
                <span className="text-yellow-highlight animate-glow inline-block" 
                      style={{ 
                        textShadow: '0 0 20px rgba(255, 230, 0, 0.8), 0 0 40px rgba(255, 230, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.9)'
                      }}>
                  25
                </span>
                <span className="text-white ml-2 md:ml-4">
                  CUPOS
                </span>
              </h1>
            </div>
            
            <h2 className="font-bold-caps text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 tracking-wider">
              DISPONIBLES HASTA{" "}
              <span className="text-yellow-highlight">HOY</span>
            </h2>
            
            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 mx-auto lg:mx-0 rounded-full animate-pulse-slow"></div>
          </div>

          {/* Right Column - Course Modules Grid with Interactive Hover */}
          <div className="animate-fade-up-delay-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
              {courseModules.map((module, index) => (
                <div 
                  key={index}
                  className={`hover-lift ${module.delay} opacity-0 animate-fade-up rounded-xl overflow-hidden shadow-lg
                             transition-all duration-300 cursor-pointer group relative
                             ring-2 ring-transparent hover:ring-purple-500/50`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Módulo ${module.title}`}
                >
                  <ImagePlaceholder 
                    title={module.title}
                    aspectRatio="video"
                    className="rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg
                                flex items-end justify-center pb-3">
                    <span className="text-white text-xs font-bold-caps tracking-wider">VER CONTENIDO</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Call to Action */}
        <div className="text-center animate-fade-up-delay-2">
          <h2 className="font-bold-caps text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 leading-tight px-4">
            LLEVA{" "}
            <span className="text-yellow-highlight relative inline-block">
              TODOS
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
            </span>
            {" "}LOS NIVELES
            <br className="md:hidden" />
            <span className="md:inline"> POR EL </span>
            <span className="text-yellow-highlight relative inline-block">
              PRECIO DE UNO
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
            </span>
          </h2>
          
          {/* Value Proposition */}
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 px-4">
            Acceso completo a todos los niveles de entrenamiento, desde básico hasta avanzado.
            <br className="hidden md:block" />
            <span className="text-yellow-highlight font-semibold">¡Empieza hoy mismo y transforma tu cuerpo!</span>
          </p>
        </div>
      </div>
    </section>
  );
};