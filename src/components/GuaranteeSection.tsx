import { Shield, CheckCircle, Clock, Award, TrendingUp } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const GuaranteeSection = () => {
  return (
    <section className="bg-gradient-to-b from-green-950 via-emerald-900/50 to-green-950 py-16 md:py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-green-500 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-emerald-400 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Header with Shield Animation */}
        <div className="flex items-center justify-center gap-1.5 md:gap-4 mb-6 md:mb-8 animate-fade-up px-2">
          <Shield className="w-5 h-5 md:w-16 md:h-16 text-green-400 animate-pulse-slow drop-shadow-[0_0_20px_rgba(74,222,128,0.5)] flex-shrink-0" 
                  fill="currentColor" />
          <h2 className="font-bold-caps text-sm md:text-4xl lg:text-5xl text-white text-center leading-tight">
            <span className="hidden md:inline">POLÍTICA Y GARANTÍA DE SATISFACCIÓN</span>
            <span className="md:hidden">GARANTÍA<br />DE SATISFACCIÓN</span>
          </h2>
          <Shield className="w-5 h-5 md:w-16 md:h-16 text-green-400 animate-pulse-slow drop-shadow-[0_0_20px_rgba(74,222,128,0.5)] flex-shrink-0" 
                  fill="currentColor" />
        </div>
        
        {/* Main Guarantee Card */}
        <div className="glassmorphic-dark p-4 md:p-10 rounded-xl md:rounded-2xl shadow-2xl mb-6 md:mb-8 border-2 border-green-500/30 
                       animate-fade-up-delay-1 hover-lift relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-xl md:rounded-2xl"></div>
          
          <div className="relative z-10">
            {/* 7 Days Badge */}
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
                <div className="relative bg-gradient-to-br from-green-400 to-green-600 p-3 md:p-8 rounded-full 
                              shadow-lg hover-scale cursor-pointer border-2 md:border-4 border-white/20">
                  <Clock className="w-8 h-8 md:w-16 md:h-16 text-white" strokeWidth={3} />
                </div>
              </div>
              <div className="text-left">
                <span className="font-bold-caps text-2xl md:text-5xl lg:text-6xl text-green-400 block leading-none mb-1 md:mb-2"
                      style={{ textShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}>
                  7 DÍAS
                </span>
                <span className="font-bold-caps text-sm md:text-2xl text-white/90">DE GARANTÍA</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xs md:text-lg lg:text-xl text-white/90 leading-relaxed mb-4 md:mb-8 max-w-3xl mx-auto px-1">
              Tienes <strong className="text-green-400">7 días</strong> a partir de la compra para probar el programa{" "}
              <strong className="text-yellow-400">ADELGAZA SIN SALIR DE CASA</strong>. Si dentro de ese período nuestro programa no cumple y/o supera tus expectativas,{" "}
              <strong className="text-green-400 text-xl md:text-2xl">vamos a devolver tu dinero SIN hacer preguntas.</strong>
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <div className="glassmorphic p-4 rounded-xl border border-green-400/30 hover-scale">
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-400 mx-auto mb-3" fill="currentColor" />
                <p className="text-white font-bold text-xs sm:text-sm md:text-base break-words">Sin Preguntas</p>
                <p className="text-white/60 text-xs md:text-sm mt-1 break-words">Proceso rápido</p>
              </div>
              <div className="glassmorphic p-4 rounded-xl border border-green-400/30 hover-scale">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-green-400 mx-auto mb-3" />
                <p className="text-white font-bold text-xs sm:text-sm md:text-base break-words">100% Seguro</p>
                <p className="text-white/60 text-xs md:text-sm mt-1 break-words">Garantizado</p>
              </div>
              <div className="glassmorphic p-4 rounded-xl border border-green-400/30 hover-scale">
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-green-400 mx-auto mb-3" />
                <p className="text-white font-bold text-xs sm:text-sm md:text-base break-words">Reembolso<br className="hidden sm:inline" /> Total</p>
                <p className="text-white/60 text-xs md:text-sm mt-1 break-words">Sin complicaciones</p>
              </div>
            </div>
            
            {/* Hotmart Badge */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 
                          bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-4 md:p-6 rounded-xl 
                          border border-green-500/30">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" fill="currentColor" />
              <p className="text-center md:text-left text-sm md:text-base text-white font-semibold">
                Te lo garantiza <span className="text-yellow-400 font-bold text-lg md:text-xl">Hotmart®</span>,
                <br className="md:hidden" /> la plataforma donde vas a realizar el pago.
              </p>
            </div>
            
            {/* Guarantee Image */}
            <div className="max-w-md mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl 
                            blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img 
                src="/assets/images/hero/7dias.png"
                alt="7 DÍAS DE GARANTÍA - Hotmart"
                className="relative w-full h-auto max-w-sm mx-auto object-contain drop-shadow-2xl 
                         hover-scale transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="animate-fade-up-delay-2">
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            <span className="text-green-400 font-bold">Cero riesgos.</span> Prueba el programa por 7 días y si no ves resultados,
            <br className="hidden md:block" />
            <span className="text-yellow-400 font-bold"> recuperas el 100% de tu inversión.</span>
          </p>
        </div>
      </div>
    </section>
  );
};