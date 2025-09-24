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
import { useState, useEffect } from "react";

const Index = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    let mouseLeftWindow = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detectar si el mouse sale por arriba de la ventana (típico comportamiento de salida)
      if (e.clientY <= 0 && !mouseLeftWindow) {
        mouseLeftWindow = true;
        setShowExitIntent(true);
      }
    };

    const handleMouseEnter = () => {
      mouseLeftWindow = false;
    };

    // Solo activar en desktop, no en móvil
    if (window.innerWidth > 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header Hero Section */}
      <header className="bg-purple-gradient py-2 px-2">
        <div className="w-full">
          {/* Hero Image */}
          <div>
            <img 
              src="/assets/images/hero/crashing-portada.png"
              alt=""
              className="w-full h-auto aspect-[32/9] object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold-caps text-2xl mb-8 text-shadow">
            <span className="text-yellow-highlight">DESCUBRE</span> COMO PODER{" "}
            <span className="text-yellow-highlight">ESTAR EN FORMA</span> Y TENER UNA{" "}
            <span className="text-yellow-highlight">VIDA SALUDABLE</span>,<br />
            SIN NECESIDAD DE GASTAR DINERO EN GIMNASIOS, CON{" "}
            <span className="text-yellow-highlight">RESULTADOS</span> A PARTIR DE LA TERCER SEMANA.
          </h2>

          <div className="text-yellow-highlight text-lg font-bold mb-8">
            👇 Mira este video de 1 MINUTO para saber como
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg overflow-hidden shadow-xl">
              <video 
                className="w-full h-auto aspect-video object-cover"
                controls
                preload="metadata"
              >
                <source src="/assets/videos/demo/video-demo.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className="bg-purple-gradient py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-bold-caps text-2xl text-white mb-0">
            SI DESEAS LLEGAR A TU <span className="text-yellow-highlight">PESO IDEAL</span>, 
            AUMENTAR <span className="text-yellow-highlight">MASA MUSCULAR</span>, 
            TENER UN <span className="text-yellow-highlight">ABDOMEN PLANO</span> Y 
            SENTIRTE MUCHO MEJOR CONTIGO MISM@, ENTONCES ESTE PROGRAMA DEFINITIVAMENTE ES PARA TI.
          </h3>
        </div>
      </section>

      {/* Recommendation and Content */}
      <section className="bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/20 p-4 rounded-lg mb-8">
            <h4 className="text-lg font-bold text-white">
              📋 Recomendación: Mirar esta página completa para saber toda la información🤗
            </h4>
          </div>

          {/* Testimonials Collage */}
          <div className="mb-12">
            <img
              src="/assets/images/testimonials/collage.jpg"
              alt="COLLAGE DE TESTIMONIOS - Antes y Después"
              className="w-full h-auto object-contain rounded-lg shadow-lg mb-4 max-h-96"
            />
          </div>

          <h3 className="font-bold-caps text-2xl text-white mb-8">
            CADA DÍA SON MÁS PERSONAS QUE SE UNEN A NUESTRA COMUNIDAD{" "}
            <span className="text-yellow-highlight">«ADELGAZA SIN SALIR DE CASA»</span>{" "}
            Y ESTÁN TOTALMENTE FELICES Y MUY AGRADECIDOS CON LOS RESULTADOS OBTENIDOS CON NUESTRA METODOLOGÍA.
          </h3>
        </div>
      </section>

      {/* Course Formats */}
      <section className="bg-black py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <ImagePlaceholder 
              title="CURSO EN VARIOS FORMATOS - Desktop, Mobile, Tablet"
              aspectRatio="wide"
              className="mb-4"
            />
          </div>

          <h3 className="font-bold-caps text-2xl text-secondary-foreground mb-12">
            TENDRÁS <span className="text-yellow-highlight">CLASES DE LUNES A VIERNES</span>{" "}
            POR TODO EL AÑO Y EL <span className="text-yellow-highlight">HORARIO LO PONES TÚ</span>
          </h3>

          {/* Exercise Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <img
                src="/assets/images/program/ABDOMEN.jpg"
                alt="ABDOMEN - Ejercicios para abdomen plano"
                className="w-full h-auto aspect-square object-cover rounded-lg shadow-lg mb-4"
              />
              <h4 className="font-bold-caps text-yellow-highlight text-lg">ABDOMEN</h4>
            </div>
            <div className="text-center">
              <ImagePlaceholder 
                title="GLÚTEOS - Ejercicios para glúteos firmes"
                aspectRatio="square"
                className="mb-4"
              />
              <h4 className="font-bold-caps text-yellow-highlight text-lg">GLÚTEOS</h4>
            </div>
            <div className="text-center">
              <ImagePlaceholder 
                title="BRAZOS - Ejercicios para brazos tonificados"
                aspectRatio="square"
                className="mb-4"
              />
              <h4 className="font-bold-caps text-yellow-highlight text-lg">BRAZOS</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <ImagePlaceholder 
              title="PROFESORES - Natalia Alarcón y Cristian Espinosa"
              aspectRatio="wide"
            />
          </div>

          <h3 className="font-bold-caps text-2xl text-secondary mb-6">
            ¿QUIENES SON LOS PROFESORES Y POR QUÉ PUEDEN AYUDARTE?
          </h3>

          <p className="text-lg text-secondary leading-relaxed mb-8">
            Desarrollado por <strong>NATALIA ALARCÓN Y CRISTIAN ESPINOSA</strong> artistas, bailarines y entrenadores profesionales 
            amantes de la actividad física, con más de 15 años de experiencia y un gran recorrido internacional.
          </p>

          <p className="text-lg text-secondary leading-relaxed mb-12">
            Te dan la garantía de que al hacer parte de esta bella comunidad, tendrás una metodología comprobada 
            y altamente efectiva que te ayudará a lograr tus objetivos físicos, adquirir hábitos más saludables y mejorar tu calidad de vida.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              "Tonificar y fortalecer tu cuerpo",
              "Prevenir y disminuir el sobrepeso", 
              "Adquirir hábitos saludables",
              "Transformar tu cuerpo sin gastar en gimnasios",
              "Mejorar tu condición física",
              "Prevenir enfermedades gracias a la actividad física",
              "Ahorrar tiempo, con una metodología de solo 45 minutos al día",
              "Disminuir el estrés y aumentar tu autoestima"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="font-bold text-secondary">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-accent/10 p-8 rounded-xl">
            <h3 className="font-bold-caps text-2xl text-secondary mb-4">
              ¿CÓMO LO VAS A LOGRAR?
            </h3>
            <p className="text-lg text-secondary leading-relaxed">
              Nuestro método de entrenamiento es de tan solo <strong>45 minutos al día</strong>, 
              las rutinas de ejercicio las haremos <strong>juntos de manera virtual</strong>, 
              trabajaremos <strong>5 días por semana (DE LUNES A VIERNES)</strong> y tendrás 
              acompañamiento constante de nuestra parte, podrás hacernos preguntas cuando quieras.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Countdown Timer */}
      <section className="bg-secondary py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <CountdownTimer />
          
          <div className="text-center">
            <h3 className="font-bold-caps text-2xl text-secondary-foreground mb-8">
              RECIBE EL PROGRAMA COMPLETO + LOS 6 BONOS 🎁 ANTES QUE EL CONTADOR LLEGUE A CERO.
            </h3>
            
            <DanceFitButton variant="accent" size="xl" className="mb-8">
              INSCRÍBETE AQUÍ
            </DanceFitButton>
            
            {/* Payment Logos */}
            <PaymentLogos />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Guarantee Section */}
      <GuaranteeSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <section className="bg-purple-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <CountdownTimer />
          
          <DanceFitButton variant="accent" size="xl" className="mb-8">
            INSCRÍBETE AQUÍ
          </DanceFitButton>

          <div className="bg-yellow-highlight text-accent-foreground rounded-lg p-4 mb-8 max-w-md mx-auto">
            <div className="bg-red-500 rounded-full h-4 mb-2" style={{ width: '85%' }}></div>
            <span className="font-bold">SOLO QUEDAN 7 CUPOS - 85%</span>
          </div>
          
          <PaymentLogos />
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
            <ImagePlaceholder 
              title="LOGO TIKTOK"
              aspectRatio="wide"
              className="max-w-xs mx-auto mb-4"
            />
            <p className="text-secondary-foreground mb-6">Síguenos en Tiktok</p>
          </div>

          <div className="text-center text-sm text-secondary-foreground">
            <p className="mb-2">© 2024 – Adelgaza sin salir de casa | Todos los derechos reservados</p>
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
                  onClick={() => setShowExitIntent(false)}
                >
                  ¡APROVECHAR DESCUENTO!
                </DanceFitButton>
                
                <button
                  onClick={() => setShowExitIntent(false)}
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
    </div>
  );
};

export default Index;