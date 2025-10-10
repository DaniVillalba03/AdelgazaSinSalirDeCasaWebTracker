import { Star } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const TestimonialsSection = () => {
  return (
    <section className="bg-secondary py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-bold-caps text-3xl text-secondary-foreground mb-4">
          ESTO ES LO QUE OPINAN NUESTROS ESTUDIANTES
        </h2>
        
        {/* Stars Rating */}
        <div className="flex justify-center items-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 text-yellow-highlight" fill="currentColor" />
          ))}
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-scroll gap-6" style={{
            width: 'calc(200% + 24px)'
          }}>
            {/* First set of testimonials */}
            <div className="flex gap-6 min-w-full">
              <div className="w-1/2">
                <ImagePlaceholder 
                  title="TESTIMONIO 1 - Resultado de transformación"
                  aspectRatio="square"
                />
              </div>
              <div className="w-1/2">
                <ImagePlaceholder 
                  title="TESTIMONIO 2 - Resultado de transformación"
                  aspectRatio="square"
                />
              </div>
            </div>
            {/* Second set of testimonials */}
            <div className="flex gap-6 min-w-full">
              <div className="w-1/2">
                <ImagePlaceholder 
                  title="TESTIMONIO 3 - Resultado de transformación"
                  aspectRatio="square"
                />
              </div>
              <div className="w-1/2">
                <ImagePlaceholder 
                  title="TESTIMONIO 4 - Resultado de transformación"
                  aspectRatio="square"
                />
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="font-bold-caps text-2xl text-secondary-foreground mb-4">
          Ya son más de mil estudiantes en todo el mundo
        </h3>
        
        <h3 className="font-bold-caps text-3xl text-yellow-highlight mb-8">
          ¡SOLO FALTAS TU!
        </h3>
        
        <div className="text-secondary-foreground text-lg font-bold mb-6">
          Mira este video para ver lo que opinan ellos👇
        </div>
        
        {/* Testimonials Video */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full h-auto"
            >
              <source src="/assets/videos/testimonials/testimonios_adelgaza.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>

        {/* Comienza Hoy Mismo Block */}
        <div className="bg-yellow-100 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-bold-caps text-xl text-secondary mb-4">
            ¡COMIENZA HOY MISMO!
          </h3>
          <p className="text-secondary text-lg leading-relaxed mb-4">
            Imagina cómo sería tu vida si dedicaras tan solo <strong>45 MINUTOS</strong> al día para ejercitarte… 
            No solo vas a prevenir un gran número de enfermedades, sino que además te sentirás con mucha más fuerza y vitalidad.
          </p>
          <p className="font-bold-caps text-xl text-secondary">
            ¿<span className="text-yellow-highlight">Cuánto vale para ti TENER BUENA SALUD?</span>
          </p>
        </div>
      </div>
    </section>
  );
};