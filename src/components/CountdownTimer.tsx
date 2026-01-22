import { Clock, Zap, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 15,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isUrgent = timeLeft.hours === 0 && timeLeft.minutes < 5;

  return (
    <div className="relative glassmorphic-dark rounded-2xl p-3 md:p-6 lg:p-10 mb-8 shadow-2xl border-2 border-yellow-500/30 
                   animate-fade-up overflow-hidden mx-2 md:mx-0">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20 rounded-2xl"></div>
      
      {/* Pulsing Glow Effect for Urgency */}
      {isUrgent && (
        <div className="absolute inset-0 bg-red-500/20 rounded-2xl animate-pulse-slow"></div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
          <AlertCircle className={`w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 ${isUrgent ? 'text-red-400 animate-pulse' : 'text-yellow-highlight'}`} />
          <h3 className="font-bold-caps text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white text-center leading-tight">
            <span className="hidden md:inline">LA OFERTA TERMINA EN...</span>
            <span className="md:hidden">OFERTA TERMINA EN...</span>
          </h3>
          <Zap className={`w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 ${isUrgent ? 'text-red-400 animate-pulse' : 'text-yellow-highlight'}`} 
               fill="currentColor" />
        </div>
        
        {/* Countdown Display */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 max-w-2xl mx-auto mb-4 md:mb-6">
          {/* Hours */}
          <div className="text-center group">
            <div className={`relative bg-gradient-to-br ${isUrgent ? 'from-red-500 to-red-600' : 'from-yellow-400 to-yellow-500'} 
                          text-black rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6 mb-1 md:mb-2 shadow-lg
                          hover-lift transition-all duration-300 overflow-hidden`}>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent 
                            transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-lg">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-white/90 font-bold text-[10px] md:text-xs lg:text-sm uppercase tracking-wider">
              Hora{timeLeft.hours !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Minutes */}
          <div className="text-center group">
            <div className={`relative bg-gradient-to-br ${isUrgent ? 'from-red-500 to-red-600' : 'from-yellow-400 to-yellow-500'} 
                          text-black rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6 mb-1 md:mb-2 shadow-lg
                          hover-lift transition-all duration-300 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent 
                            transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-lg">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-white/90 font-bold text-[10px] md:text-xs lg:text-sm uppercase tracking-wider">
              Minuto{timeLeft.minutes !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Seconds */}
          <div className="text-center group">
            <div className={`relative bg-gradient-to-br ${isUrgent ? 'from-red-500 to-red-600 animate-pulse' : 'from-yellow-400 to-yellow-500'} 
                          text-black rounded-lg md:rounded-xl lg:rounded-2xl p-2 md:p-4 lg:p-6 mb-1 md:mb-2 shadow-lg
                          hover-lift transition-all duration-300 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent 
                            transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-lg">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-white/90 font-bold text-[10px] md:text-xs lg:text-sm uppercase tracking-wider">
              Segundo{timeLeft.seconds !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="text-center px-2">
          {isUrgent ? (
            <p className="text-red-400 font-bold-caps text-sm md:text-base lg:text-lg animate-pulse-slow flex items-center justify-center gap-2 flex-wrap">
              <Zap className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
              <span className="hidden md:inline">¡ÚLTIMA OPORTUNIDAD! ¡NO LA DEJES PASAR!</span>
              <span className="md:hidden">¡ÚLTIMA OPORTUNIDAD!</span>
              <Zap className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
            </p>
          ) : (
            <p className="text-white/70 text-xs md:text-sm lg:text-base">
              Aprovecha el <span className="text-yellow-highlight font-bold">precio especial</span> antes de que termine la oferta
            </p>
          )}
        </div>
      </div>
    </div>
  );
};