import { DanceFitButton } from "./DanceFitButton";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { CountdownTimer } from "./CountdownTimer";
import { PaymentLogos } from "./PaymentLogos";
import { CheckCircle, Gift } from "lucide-react";

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

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Limited Spots Available */}
        <div className="mb-8">
          <h1 className="font-bold-caps text-5xl text-yellow-highlight mb-2">
            25<span className="text-secondary">CUPOS</span>
          </h1>
          <h2 className="font-bold-caps text-2xl text-secondary mb-4">
            DISPONIBLES HASTA HOY
          </h2>
        </div>

        {/* Course Levels */}
        <h2 className="font-bold-caps text-2xl text-secondary mb-8">
          TENDRÁS ACCESO A <span className="text-yellow-highlight">6 NIVELES DE DIFICULTAD</span>
        </h2>
        
        <h3 className="font-bold-caps text-lg text-secondary mb-6">
          EL PRECIO NORMAL POR CADA NIVEL ES DE 50 DOLARES, EL PROGRAMA COMPLETO CUESTA{" "}
          <span className="text-yellow-highlight">300 DOLARES</span>
        </h3>
        
        <div className="mb-8">
          <ImagePlaceholder 
            title="MÓDULOS DEL CURSO - 6 Niveles de dificultad"
            aspectRatio="wide"
          />
        </div>
        
        <h2 className="font-bold-caps text-4xl text-secondary mb-8">
          LLEVA <span className="text-yellow-highlight">TODOS</span> LOS NIVELES POR EL{" "}
          <span className="text-yellow-highlight">PRECIO DE UNO</span>
        </h2>
        
        {/* Price Display */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl font-bold text-gray-400 line-through">$300</span>
            <span className="text-6xl font-bold text-green-500">$49.99</span>
          </div>
          <p className="text-secondary text-lg">
            (Lo tendrás convertido a tu moneda local)
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8">
          <p className="text-secondary font-bold text-lg mb-4">
            LA OFERTA TERMINARÁ EN...
          </p>
          <CountdownTimer />
        </div>
        
        {/* Progress Bar */}
        <div className="bg-gray-200 rounded-full h-4 mb-2 max-w-md mx-auto">
          <div className="bg-yellow-highlight h-4 rounded-full" style={{ width: '85%' }}></div>
        </div>
        <p className="text-secondary font-bold mb-8">
          SOLO QUEDAN 7 CUPOS - 85%
        </p>
        
        {/* Bonuses Section */}
        <div className="bg-accent/10 p-8 rounded-xl mb-8">
          <h3 className="font-bold-caps text-2xl text-secondary mb-6 flex items-center justify-center gap-2">
            <Gift className="w-8 h-8 text-yellow-highlight" />
            INSCRÍBETE AHORA Y RECIBE ESTOS BONOS🎁 ¡TOTALMENTE GRATIS!
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <ImagePlaceholder 
                  title={bonus.title}
                  aspectRatio="square"
                  className="mb-4"
                />
                <h4 className="font-bold text-secondary mb-2">{bonus.title}</h4>
                <p className="text-yellow-highlight font-bold">
                  PRECIO ESTIMADO {bonus.price}
                </p>
              </div>
            ))}
          </div>
          
          <h4 className="font-bold-caps text-xl text-secondary mb-4">
            PRECIO ESTIMADO EN SÓLO BONOS = <span className="text-yellow-highlight">$230 DÓLARES</span>
          </h4>
        </div>
        
        {/* Exclusive Bonuses */}
        <div className="bg-primary/10 p-8 rounded-xl mb-8">
          <h3 className="font-bold-caps text-2xl text-secondary mb-6">
            😍 Y AÚN HAY MÁS
          </h3>
          <h4 className="font-bold-caps text-lg text-secondary mb-6">
            3 BONOS SUPER EXCLUSIVOS SOLO PARA LAS PRIMERAS 10 PERSONAS QUE SE INSCRIBAN EL DÍA DE HOY
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <ImagePlaceholder 
                title="CERTIFICADO AVALADO POR HOTMART"
                aspectRatio="portrait"
                className="mb-4"
              />
              <h5 className="font-bold text-secondary">
                CERTIFICADO AL CULMINAR EL PROGRAMA AVALADO POR HOTMART
              </h5>
            </div>
            
            <div className="text-center">
              <ImagePlaceholder 
                title="WHATSAPP PERSONAL"
                aspectRatio="portrait"
                className="mb-4"
              />
              <h5 className="font-bold text-secondary">
                ACCESO A NUESTRO WHATSAPP PERSONAL PARA ASESORIA Y ACOMPAÑAMIENTO PERSONALIZADO
              </h5>
            </div>
            
            <div className="text-center">
              <ImagePlaceholder 
                title="GRUPO EXCLUSIVO FACEBOOK"
                aspectRatio="portrait"
                className="mb-4"
              />
              <h5 className="font-bold text-secondary">
                ACCESO A NUESTRO GRUPO EXCLUSIVO DE FACEBOOK EN DONDE TE APOYAMOS Y MOTIVAMOS SIEMPRE
              </h5>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <DanceFitButton 
          variant="accent" 
          size="xl" 
          className="mb-8"
          onClick={handleInscribirse}
        >
          INSCRÍBETE AL PROGRAMA AQUÍ
        </DanceFitButton>

        {/* Payment Logos */}
        <PaymentLogos />
      </div>
    </section>
  );
};