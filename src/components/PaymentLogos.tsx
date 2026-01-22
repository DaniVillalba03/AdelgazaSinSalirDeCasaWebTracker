import { CreditCard, Shield, Smartphone, Wallet, Lock, CheckCircle2, Sparkles } from "lucide-react";

export const PaymentLogos = () => {
  const paymentMethods = [
    { name: "VISA", bgColor: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800", iconColor: "text-blue-100" },
    { name: "MC", bgColor: "bg-gradient-to-br from-red-500 via-red-600 to-red-700", iconColor: "text-red-100" },
    { name: "AMEX", bgColor: "bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900", iconColor: "text-blue-100" },
    { name: "PayPal", bgColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600", iconColor: "text-blue-100" },
  ];

  return (
    <div className="relative glassmorphic-dark p-6 md:p-8 rounded-3xl shadow-2xl mb-8 border border-white/20 backdrop-blur-xl animate-fade-up overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10">
        {/* Premium Header with Enhanced Design */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="relative">
            <Shield className="w-7 h-7 md:w-8 md:h-8 text-green-400 drop-shadow-glow animate-pulse-slow" fill="currentColor" />
            <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <h4 className="font-bold-caps text-center bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent text-2xl md:text-3xl tracking-wider drop-shadow-lg">
            PAGO 100% SEGURO
          </h4>
          <div className="relative">
            <Shield className="w-7 h-7 md:w-8 md:h-8 text-green-400 drop-shadow-glow animate-pulse-slow" fill="currentColor" />
            <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -left-1 animate-pulse" />
          </div>
        </div>
        
        {/* Payment Methods - Premium Cards with Enhanced Shadows */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-5">
          {paymentMethods.map((method, index) => (
            <div 
              key={method.name}
              className={`${method.bgColor} text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg md:text-xl
                         hover-lift card-3d shadow-2xl hover:shadow-3xl cursor-pointer
                         transition-all duration-300 border-2 border-white/30 hover:border-white/50
                         relative overflow-hidden group
                         ${index === 0 ? 'animate-fade-up-delay-1' : ''}
                         ${index === 1 ? 'animate-fade-up-delay-2' : ''}
                         ${index === 2 ? 'animate-fade-up-delay-3' : ''}
                         ${index === 3 ? 'animate-fade-up-delay-3' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={`Aceptamos ${method.name}`}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="drop-shadow-2xl relative z-10 tracking-wide">{method.name}</span>
            </div>
          ))}
        </div>
        
        {/* Security Icons - Enhanced Premium Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-5 py-3">
          <div className="flex flex-col items-center gap-2 group hover-scale cursor-pointer" 
               role="button" 
               tabIndex={0}
               aria-label="Pago seguro con tarjeta">
            <div className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300 border border-purple-400/30">
              <CreditCard className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300"></div>
            </div>
            <span className="text-white/90 text-sm md:text-base font-bold tracking-wide">Tarjetas</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 group hover-scale cursor-pointer"
               role="button" 
               tabIndex={0}
               aria-label="Protección SSL">
            <div className="relative bg-gradient-to-br from-green-400 via-green-500 to-green-600 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all duration-300 border border-green-400/30">
              <Lock className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300"></div>
            </div>
            <span className="text-white/90 text-sm md:text-base font-bold tracking-wide">SSL</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 group hover-scale cursor-pointer"
               role="button" 
               tabIndex={0}
               aria-label="Compatible con móviles">
            <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 border border-blue-400/30">
              <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300"></div>
            </div>
            <span className="text-white/90 text-sm md:text-base font-bold tracking-wide">Móvil</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 group hover-scale cursor-pointer"
               role="button" 
               tabIndex={0}
               aria-label="Múltiples métodos de pago">
            <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-yellow-500/50 transition-all duration-300 border border-yellow-400/30">
              <Wallet className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-all duration-300"></div>
            </div>
            <span className="text-white/90 text-sm md:text-base font-bold tracking-wide">E-Wallet</span>
          </div>
        </div>
        
        {/* Trust Badge - Enhanced Premium Design */}
        <div className="relative bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-blue-900/50 p-4 md:p-5 rounded-2xl border-2 border-purple-400/30 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-purple-400/5"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle2 className="w-6 h-6 text-green-400 drop-shadow-glow animate-pulse-slow" fill="currentColor" />
              <p className="text-center text-base md:text-lg text-white font-bold tracking-wide">
                Procesado por <span className="text-yellow-400 font-extrabold drop-shadow-glow">Hotmart®</span>
              </p>
              <CheckCircle2 className="w-6 h-6 text-green-400 drop-shadow-glow animate-pulse-slow" fill="currentColor" />
            </div>
            <p className="text-center text-sm md:text-base text-white/80 leading-relaxed font-medium">
              Plataforma líder mundial en pagos digitales con más de <span className="text-yellow-400 font-bold">10 millones</span> de transacciones seguras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};