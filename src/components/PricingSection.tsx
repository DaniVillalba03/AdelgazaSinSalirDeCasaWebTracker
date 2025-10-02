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
    <section className="bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* 25 CUPOS */}
            <h1 className="font-bold-caps text-6xl text-yellow-highlight mb-2">
              25<span className="text-white">CUPOS</span>
            </h1>
            <h2 className="font-bold-caps text-2xl text-white mb-8">
              DISPONIBLES HASTA HOY
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};