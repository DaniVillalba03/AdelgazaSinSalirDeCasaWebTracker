import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "¿EL PAGO ES SEGURO?",
      answer: "Los pagos se realizan a través de Hotmart® que es uno de los procesadores de pago más importantes del mundo. ADELGAZA SIN SALIR DE CASA no tiene acceso a tus datos de pago, tu pago es 100% seguro.",
      icon: "🔒"
    },
    {
      question: "¿EN QUE FORMATO RECIBIRÉ EL PROGRAMA?",
      answer: "Nuestro curso se encuentra dividido por módulos en formato de vídeo, por lo que podrás acceder siempre para revisar todas las clases. Puedes avanzar, pausar y retomar las veces que desees.",
      icon: "📱"
    },
    {
      question: "¿CUANTO TIEMPO TIENE DE GARANTÍA MI DINERO?",
      answer: "A partir del momento de la compra tienes 7 días de garantía para la devolución total de su dinero si realizas el pago con tarjeta de crédito sera mucho mas fácil para realizar tu reembolso, si el programa no satisface tus expectativas",
      icon: "✅"
    },
    {
      question: "¿POR QUÉ DEBERÍA TOMAR ESTE CURSO VIRTUAL?",
      answer: "Porque NUNCA HABÍA SIDO TAN FACIL lograr los resultados que tanto deseas, al ser un programa virtual, no necesitas salir de casa ni gastar tanto DINERO ni TIEMPO Y Adicional tendras la MOTIVACIÓN que te hacia falta con nuestras rutinas 100% guiadas.",
      icon: "💪"
    },
    {
      question: "¿EL PROGRAMA ES APTO PARA MI?",
      answer: "Este programa es apto para todos, tenemos estudiantes mujeres y hombres de distintas edades, con resultados muy buenos (Personas que han bajado 4 kilos, 6 kilos y más) Además están mejorando su salud y adquiriendo hábitos más saludables.",
      icon: "👥"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 animate-fade-up">
          <div className="flex items-center justify-center gap-1.5 md:gap-3 mb-3 md:mb-4">
            <HelpCircle className="w-4 h-4 md:w-10 md:h-10 text-yellow-highlight animate-pulse-slow flex-shrink-0" />
            <h2 className="font-bold-caps text-base md:text-4xl lg:text-5xl text-white text-center leading-tight">
              <span className="hidden md:inline">PREGUNTAS FRECUENTES</span>
              <span className="md:hidden">PREGUNTAS<br />FRECUENTES</span>
            </h2>
            <Sparkles className="w-4 h-4 md:w-10 md:h-10 text-purple-400 animate-pulse-slow flex-shrink-0" />
          </div>
          <p className="text-white/70 text-xs md:text-lg max-w-2xl mx-auto px-2">
            Resuelve todas tus dudas antes de comenzar tu transformación
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-2 md:space-y-4 animate-fade-up-delay-1">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glassmorphic-dark rounded-lg md:rounded-xl border border-white/10 px-2 py-1 md:px-8 
                         hover-lift transition-all duration-300
                         hover:border-purple-500/30 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="font-bold-caps text-left text-white hover:text-yellow-highlight 
                                          text-xs md:text-lg py-3 md:py-5 transition-colors duration-300
                                          [&[data-state=open]]:text-yellow-highlight">
                <div className="flex items-center gap-1.5 md:gap-3 pr-1">
                  <span className="text-base md:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {faq.icon}
                  </span>
                  <span className="leading-tight text-left">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-white/80 leading-relaxed pt-2 pb-3 md:pb-5 text-[10px] md:text-base
                                         border-t border-white/5 mt-1 pr-1 md:pr-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-12 text-center animate-fade-up-delay-2">
          <div className="glassmorphic-dark p-6 md:p-8 rounded-2xl border border-purple-500/30">
            <p className="text-white text-lg md:text-xl font-bold-caps mb-2">
              ¿AÚN TIENES DUDAS?
            </p>
            <p className="text-white/70 text-sm md:text-base">
              Recuerda que tienes <span className="text-yellow-highlight font-bold">7 días de garantía</span> para probar el programa sin riesgo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};