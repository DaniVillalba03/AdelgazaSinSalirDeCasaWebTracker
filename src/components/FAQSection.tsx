import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "¿EL PAGO ES SEGURO?",
      answer: "Los pagos se realizan a través de Hotmart® que es uno de los procesadores de pago más importantes del mundo. ADELGAZA SIN SALIR DE CASA no tiene acceso a tus datos de pago, tu pago es 100% seguro."
    },
    {
      question: "¿EN QUE FORMATO RECIBIRÉ EL PROGRAMA?",
      answer: "Nuestro curso se encuentra dividido por módulos en formato de vídeo, por lo que podrás acceder siempre para revisar todas las clases. Puedes avanzar, pausar y retomar las veces que desees."
    },
    {
      question: "¿CUANTO TIEMPO TIENE DE GARANTÍA MI DINERO?",
      answer: "A partir del momento de la compra tienes 7 días de garantía para la devolución total de su dinero si realizas el pago con tarjeta de crédito sera mucho mas fácil para realizar tu reembolso, si el programa no satisface tus expectativas"
    },
    {
      question: "¿POR QUÉ DEBERÍA TOMAR ESTE CURSO VIRTUAL?",
      answer: "Porque NUNCA HABÍA SIDO TAN FACIL lograr los resultados que tanto deseas, al ser un programa virtual, no necesitas salir de casa ni gastar tanto DINERO ni TIEMPO Y Adicional tendras la MOTIVACIÓN que te hacia falta con nuestras rutinas 100% guiadas."
    },
    {
      question: "¿EL PROGRAMA ES APTO PARA MI?",
      answer: "Este programa es apto para todos, tenemos estudiantes mujeres y hombres de distintas edades, con resultados muy buenos (Personas que han bajado 4 kilos, 6 kilos y más) Además están mejorando su salud y adquiriendo hábitos más saludables."
    }
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold-caps text-3xl text-secondary text-center mb-8">
          PREGUNTAS FRECUENTES
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-50 rounded-lg border border-gray-200 px-6"
            >
              <AccordionTrigger className="font-bold-caps text-left text-secondary hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};