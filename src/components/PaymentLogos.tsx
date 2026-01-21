import { CreditCard, Shield, Smartphone, Wallet, Lock, CheckCircle2 } from "lucide-react";

export const PaymentLogos = () => {
  const paymentMethods = [
    { name: "VISA", bgColor: "bg-gradient-to-br from-blue-600 to-blue-700", iconColor: "text-blue-100" },
    { name: "MC", bgColor: "bg-gradient-to-br from-red-500 to-red-600", iconColor: "text-red-100" },
    { name: "AMEX", bgColor: "bg-gradient-to-br from-blue-800 to-blue-900", iconColor: "text-blue-100" },
    { name: "PayPal", bgColor: "bg-gradient-to-br from-blue-500 to-blue-600", iconColor: "text-blue-100" },
  ];

  return (
    <div className="glassmorphic-dark p-6 md:p-8 rounded-2xl shadow-2xl mb-8 border border-white/10 backdrop-blur-xl animate-fade-up">
      {/* Header with Shield Icon */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Shield className="w-6 h-6 md:w-7 md:h-7 text-green-400" fill="currentColor" />
        <h4 className="font-bold-caps text-center text-white text-xl md:text-2xl tracking-wider">
          PAGO 100% SEGURO
        </h4>
        <Shield className="w-6 h-6 md:w-7 md:h-7 text-green-400" fill="currentColor" />
      </div>
      
      {/* Payment Methods - Glassmorphic Cards */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6">
        {paymentMethods.map((method, index) => (
          <div 
            key={method.name}
            className={`${method.bgColor} text-white px-5 py-3 md:px-6 md:py-3.5 rounded-xl font-bold text-base md:text-lg
                       hover-lift card-3d shadow-lg hover:shadow-2xl cursor-pointer
                       transition-all duration-300 border border-white/20
                       ${index === 0 ? 'animate-fade-up-delay-1' : ''}
                       ${index === 1 ? 'animate-fade-up-delay-2' : ''}
                       ${index === 2 ? 'animate-fade-up-delay-3' : ''}
                       ${index === 3 ? 'animate-fade-up-delay-3' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={`Aceptamos ${method.name}`}
          >
            <span className="drop-shadow-lg">{method.name}</span>
          </div>
        ))}
      </div>
      
      {/* Security Icons - Premium Style */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-6 py-4">
        <div className="flex flex-col items-center gap-1 group hover-scale cursor-pointer" 
             role="button" 
             tabIndex={0}
             aria-label="Pago seguro con tarjeta">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-3 rounded-full shadow-lg group-hover:shadow-purple-500/50 transition-all">
            <CreditCard className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <span className="text-white/70 text-xs font-semibold">Tarjetas</span>
        </div>
        
        <div className="flex flex-col items-center gap-1 group hover-scale cursor-pointer"
             role="button" 
             tabIndex={0}
             aria-label="Protección SSL">
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-full shadow-lg group-hover:shadow-green-500/50 transition-all">
            <Lock className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <span className="text-white/70 text-xs font-semibold">SSL</span>
        </div>
        
        <div className="flex flex-col items-center gap-1 group hover-scale cursor-pointer"
             role="button" 
             tabIndex={0}
             aria-label="Compatible con móviles">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-full shadow-lg group-hover:shadow-blue-500/50 transition-all">
            <Smartphone className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <span className="text-white/70 text-xs font-semibold">Móvil</span>
        </div>
        
        <div className="flex flex-col items-center gap-1 group hover-scale cursor-pointer"
             role="button" 
             tabIndex={0}
             aria-label="Múltiples métodos de pago">
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-full shadow-lg group-hover:shadow-yellow-500/50 transition-all">
            <Wallet className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <span className="text-white/70 text-xs font-semibold">E-Wallet</span>
        </div>
      </div>
      
      {/* Trust Badge */}
      <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-4 rounded-xl border border-purple-500/30">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CheckCircle2 className="w-5 h-5 text-green-400" fill="currentColor" />
          <p className="text-center text-sm md:text-base text-white font-semibold">
            Procesado por <span className="text-yellow-400 font-bold">Hotmart®</span>
          </p>
        </div>
        <p className="text-center text-xs md:text-sm text-white/70 leading-relaxed">
          Plataforma líder mundial en pagos digitales con más de 10 millones de transacciones seguras.
        </p>
      </div>
    </div>
  );
};