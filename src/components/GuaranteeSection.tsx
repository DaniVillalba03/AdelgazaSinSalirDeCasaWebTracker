import { Shield, CheckCircle, Clock } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const GuaranteeSection = () => {
  return (
    <section className="bg-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Shield className="w-12 h-12 text-green-600" />
          <h2 className="font-bold-caps text-3xl text-secondary">
            POLÍTICA Y GARANTÍA DE SATISFACCIÓN
          </h2>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Clock className="w-8 h-8 text-green-600" />
            <span className="font-bold-caps text-2xl text-secondary">7 DÍAS DE GARANTÍA</span>
          </div>
          
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Tienes <strong>7 días</strong> a partir de la compra para probar el programa{" "}
            <strong>ADELGAZA SIN SALIR DE CASA</strong>. Si dentro de ese período nuestro programa no cumple y/o supera tus expectativas,{" "}
            <strong className="text-green-600">vamos a devolver tu dinero SIN hacer preguntas.</strong>
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="font-bold text-secondary">Te lo garantiza Hotmart®, la plataforma donde vas a realizar el pago.</span>
          </div>
          
          <div className="max-w-md mx-auto">
            <img 
              src="/assets/images/hero/7dias.png"
              alt="7 DÍAS DE GARANTÍA - Hotmart"
              className="w-full h-auto max-w-sm mx-auto object-contain"
            />
          </div>
        </div>
        
        <div className="bg-yellow-100 p-6 rounded-lg">
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