import { Clock, CreditCard, Shield, Star, CheckCircle } from "lucide-react";
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

  return (
    <div className="bg-secondary rounded-xl p-8 mb-8 shadow-xl">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Clock className="w-8 h-8 text-yellow-highlight" />
        <h3 className="font-bold-caps text-2xl text-secondary-foreground text-center">
          LA OFERTA TERMINA EN...
        </h3>
      </div>
      
      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
        <div className="text-center">
          <div className="bg-yellow-highlight text-accent-foreground rounded-lg p-4 mb-2">
            <span className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-secondary-foreground font-bold text-sm">Hora(s)</span>
        </div>
        <div className="text-center">
          <div className="bg-yellow-highlight text-accent-foreground rounded-lg p-4 mb-2">
            <span className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-secondary-foreground font-bold text-sm">Minuto(s)</span>
        </div>
        <div className="text-center">
          <div className="bg-yellow-highlight text-accent-foreground rounded-lg p-4 mb-2">
            <span className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-secondary-foreground font-bold text-sm">Segundo(s)</span>
        </div>
      </div>
    </div>
  );
};