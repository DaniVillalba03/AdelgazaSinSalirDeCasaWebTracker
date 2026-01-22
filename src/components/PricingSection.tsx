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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          {/* Right Column - Course Modules Single Image */}
          <div className="animate-fade-up-delay-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-yellow-400 rounded-2xl 
                            blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="/assets/images/program/MODULOS-min.png"
                alt="6 Niveles de Dificultad - Programa Completo"
                className="relative w-full h-auto max-w-2xl mx-auto object-contain rounded-2xl shadow-2xl 
                         hover-scale transition-transform duration-500 border-2 border-purple-500/30"
              />
            </div>
          </div>
        </div>

        {/* New Bonuses Section */}
        <div className="mt-16 md:mt-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-bold-caps text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              🎁 INSCRÍBETE AHORA Y RECIBE ESTOS BONOS 🎁{" "}
              <span className="text-yellow-highlight">¡TOTALMENTE GRATIS!</span>
            </h2>
          </div>

          {/* Grid de Bonos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Guía Alimenticia */}
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover-scale">
              <div className="relative mb-4">
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold-caps z-10">
                  🎁 PROGRAMA DE REGALO
                </div>
                <ImagePlaceholder title="GUÍA ALIMENTICIA" aspectRatio="video" />
              </div>
              <h3 className="font-bold-caps text-xl text-white mb-2 text-center">
                GUÍA ALIMENTICIA
              </h3>
              <p className="text-center text-sm text-white/70 mb-2">
                PRECIO ESTIMADO:{" "}
                <span className="text-red-500 line-through">20 DÓLARES</span>
              </p>
            </div>

            {/* Ejercicio para Adulto Mayor */}
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover-scale">
              <div className="relative mb-4">
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold-caps z-10">
                  🎁 PROGRAMA DE REGALO
                </div>
                <ImagePlaceholder title="EJERCICIO PARA ADULTO MAYOR" aspectRatio="video" />
              </div>
              <h3 className="font-bold-caps text-xl text-white mb-2 text-center">
                EJERCICIO PARA ADULTO MAYOR
              </h3>
              <p className="text-center text-sm text-white/70 mb-2">
                PRECIO ESTIMADO:{" "}
                <span className="text-red-500 line-through">40 DÓLARES</span>
              </p>
            </div>

            {/* Ejercicios para Mujeres en Embarazo */}
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover-scale">
              <div className="relative mb-4">
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold-caps z-10">
                  🎁 PROGRAMA DE REGALO
                </div>
                <ImagePlaceholder title="EJERCICIOS PARA EMBARAZO" aspectRatio="video" />
              </div>
              <h3 className="font-bold-caps text-xl text-white mb-2 text-center">
                EJERCICIOS PARA MUJERES EN EMBARAZO
              </h3>
              <p className="text-center text-sm text-white/70 mb-2">
                PRECIO ESTIMADO:{" "}
                <span className="text-red-500 line-through">40 DÓLARES</span>
              </p>
            </div>

            {/* Estiramientos y Relajación */}
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover-scale">
              <div className="relative mb-4">
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold-caps z-10">
                  🎁 PROGRAMA DE REGALO
                </div>
                <ImagePlaceholder title="ESTIRAMIENTOS Y RELAJACIÓN" aspectRatio="video" />
              </div>
              <h3 className="font-bold-caps text-xl text-white mb-2 text-center">
                ESTIRAMIENTOS Y RELAJACIÓN
              </h3>
              <p className="text-center text-sm text-white/70 mb-2">
                PRECIO ESTIMADO:{" "}
                <span className="text-red-500 line-through">40 DÓLARES</span>
              </p>
            </div>

            {/* Clases de Baile */}
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover-scale">
              <div className="relative mb-4">
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold-caps z-10">
                  🎁 PROGRAMA DE REGALO
                </div>
                <ImagePlaceholder title="CLASES DE BAILE" aspectRatio="video" />
              </div>
              <h3 className="font-bold-caps text-xl text-white mb-2 text-center">
                CLASES DE BAILE
              </h3>
              <p className="text-center text-sm text-white/70 mb-2">
                PRECIO ESTIMADO:{" "}
                <span className="text-red-500 line-through">60 DÓLARES</span>
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-8">
            <p className="font-bold-caps text-2xl md:text-3xl text-white mb-4">
              PRECIO ESTIMADO EN SÓLO BONOS = <span className="text-yellow-highlight">$230 DÓLARES</span>
            </p>
            <p className="font-bold-caps text-lg md:text-xl text-white mb-6">
              RECIBE EL PROGRAMA COMPLETO + LOS 6 BONOS 🎁 ANTES QUE EL CONTADOR LLEGUE A CERO.
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
              className="mb-6 mx-auto text-xl md:text-2xl px-8 py-6"
            >
              INSCRÍBETE AL PROGRAMA AQUÍ
            </DanceFitButton>

            {/* Payment Logos */}
            <div className="flex justify-center gap-4 mb-4">
              <img src="/assets/images/payment/paypal.png" alt="PayPal" className="h-8 md:h-10" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <img src="/assets/images/payment/visa.png" alt="Visa" className="h-8 md:h-10" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <img src="/assets/images/payment/mastercard.png" alt="Mastercard" className="h-8 md:h-10" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <img src="/assets/images/payment/amex.png" alt="Amex" className="h-8 md:h-10" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between text-white text-sm mb-2">
              <span>¡CASI QUEDAN 0 CUPOS!</span>
            </div>
            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-600 to-red-400 w-[95%] animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};