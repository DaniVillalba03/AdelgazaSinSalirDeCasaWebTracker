import { Star, Users, TrendingUp, Heart } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-purple-950/20 to-black py-16 md:py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-400 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="animate-fade-up mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500 animate-pulse-slow" fill="currentColor" />
            <h2 className="font-bold-caps text-3xl md:text-4xl lg:text-5xl text-white leading-tight px-4">
              ESTO ES LO QUE OPINAN
              <br className="md:hidden" />
              <span className="text-yellow-highlight"> NUESTROS ESTUDIANTES</span>
            </h2>
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-500 animate-pulse-slow" fill="currentColor" />
          </div>
          
          {/* Stars Rating with Animation */}
          <div className="flex justify-center items-center gap-2 mb-4 animate-fade-up-delay-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-7 h-7 md:w-10 md:h-10 text-yellow-highlight hover-scale cursor-pointer transition-all" 
                fill="currentColor"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <p className="text-white/80 text-base md:text-lg font-semibold">
            Calificación promedio: <span className="text-yellow-highlight">5.0/5.0</span>
          </p>
        </div>
        
        {/* Testimonials Carousel - Premium con 7 testimonios */}
        <div className="relative mb-12 animate-fade-up-delay-2 max-w-6xl mx-auto rounded-2xl">
          {/* Gradient Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600 rounded-2xl opacity-50 blur-sm"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 md:p-6">
            <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
              <div className="flex items-center animate-scroll gap-4 md:gap-6 w-max">
                {/* Testimonios 1-7 duplicados para loop infinito */}
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio1.jpg"
                    alt="Testimonio 1 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio2.jpg"
                    alt="Testimonio 2 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio3.jpg"
                    alt="Testimonio 3 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio4.jpeg"
                    alt="Testimonio 4 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio5.jpeg"
                    alt="Testimonio 5 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio6.jpeg"
                    alt="Testimonio 6 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio7.jpg"
                    alt="Testimonio 7 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                
                {/* Duplicados para loop infinito */}
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio1.jpg"
                    alt="Testimonio 1 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio2.jpg"
                    alt="Testimonio 2 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio3.jpg"
                    alt="Testimonio 3 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio4.jpeg"
                    alt="Testimonio 4 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio5.jpeg"
                    alt="Testimonio 5 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio6.jpeg"
                    alt="Testimonio 6 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
                <div className="flex-shrink-0 hover-lift transition-all duration-300">
                  <img 
                    src="/assets/images/testimonials/testimonio7.jpg"
                    alt="Testimonio 7 - Transformación fitness"
                    className="h-80 md:h-96 w-auto object-contain rounded-xl shadow-2xl border-2 border-purple-500/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-up-delay-2">
          <div className="glassmorphic-dark p-6 rounded-xl border border-purple-500/30 hover-lift">
            <Users className="w-10 h-10 md:w-12 md:h-12 text-yellow-highlight mx-auto mb-3" />
            <h4 className="font-bold-caps text-2xl md:text-3xl text-white mb-2">+1,000</h4>
            <p className="text-white/70 text-sm md:text-base">Estudiantes Activos</p>
          </div>
          <div className="glassmorphic-dark p-6 rounded-xl border border-yellow-500/30 hover-lift">
            <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-green-400 mx-auto mb-3" />
            <h4 className="font-bold-caps text-2xl md:text-3xl text-white mb-2">95%</h4>
            <p className="text-white/70 text-sm md:text-base">Satisfacción</p>
          </div>
          <div className="glassmorphic-dark p-6 rounded-xl border border-purple-500/30 hover-lift">
            <Star className="w-10 h-10 md:w-12 md:h-12 text-yellow-highlight mx-auto mb-3" fill="currentColor" />
            <h4 className="font-bold-caps text-2xl md:text-3xl text-white mb-2">5.0</h4>
            <p className="text-white/70 text-sm md:text-base">Calificación</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="animate-fade-up-delay-3">
          <h3 className="font-bold-caps text-2xl md:text-3xl text-white mb-4">
            Ya son más de mil estudiantes en todo el mundo
          </h3>
          
          <h3 className="font-bold-caps text-3xl md:text-4xl lg:text-5xl text-yellow-highlight mb-8 animate-pulse-slow"
              style={{ 
                textShadow: '0 0 20px rgba(255, 230, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.8)'
              }}>
            ¡SOLO FALTAS TU!
          </h3>
          
          <div className="text-white text-base md:text-lg font-bold mb-6 flex items-center justify-center gap-2">
            <span>Mira este video para ver lo que opinan ellos</span>
            <span className="text-2xl animate-bounce">👇</span>
          </div>
        </div>
        
        {/* Testimonials Video - Premium Frame */}
        <div className="max-w-3xl mx-auto mb-12 animate-fade-up-delay-3">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl p-1 bg-gradient-to-r from-purple-600 via-yellow-400 to-purple-600">
            <div className="relative rounded-xl overflow-hidden bg-black">
              <video 
                controls 
                className="w-full h-auto"
                poster="/assets/images/testimonials/video-poster.jpg"
              >
                <source src="/assets/videos/testimonials/testimonios_adelgaza.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>

        {/* Comienza Hoy Mismo Block - Redesigned */}
        <div className="glassmorphic-dark p-6 md:p-10 rounded-2xl max-w-3xl mx-auto border border-yellow-500/30 
                       animate-fade-up-delay-3 hover-lift relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-600/10 rounded-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="font-bold-caps text-2xl md:text-3xl text-yellow-highlight mb-6 flex items-center justify-center gap-3">
              <span className="text-3xl">🚀</span>
              ¡COMIENZA HOY MISMO!
              <span className="text-3xl">🚀</span>
            </h3>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
              Imagina cómo sería tu vida si dedicaras tan solo{" "}
              <strong className="text-yellow-highlight">45 MINUTOS</strong> al día para ejercitarte…{" "}
              No solo vas a prevenir un gran número de enfermedades, sino que además te sentirás con mucha más fuerza y vitalidad.
            </p>
            <p className="font-bold-caps text-xl md:text-2xl text-white">
              ¿<span className="text-yellow-highlight" style={{ 
                textShadow: '0 0 10px rgba(255, 230, 0, 0.5)'
              }}>Cuánto vale para ti TENER BUENA SALUD?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};