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
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ImagePlaceholder 
            title="TESTIMONIO 1 - Resultado de transformación"
            aspectRatio="square"
          />
          <ImagePlaceholder 
            title="TESTIMONIO 2 - Resultado de transformación"
            aspectRatio="square"
          />
          <ImagePlaceholder 
            title="TESTIMONIO 3 - Resultado de transformación"
            aspectRatio="square"
          />
          <ImagePlaceholder 
            title="TESTIMONIO 4 - Resultado de transformación"
            aspectRatio="square"
          />
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
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full h-auto"
              poster="/assets/images/testimonials/collage.jpg"
            >
              <source src="/assets/videos/testimonials/testimonios_adelgaza.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};