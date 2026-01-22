import { Shield, Lock, Award, TrendingUp } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {/* Secure Payment */}
      <div className="glassmorphic-dark p-4 rounded-xl border border-green-400/30 flex flex-col items-center gap-2 hover-lift">
        <div className="bg-green-400/20 p-3 rounded-full">
          <Lock className="w-6 h-6 text-green-400" />
        </div>
        <div className="text-center">
          <div className="text-white text-xs font-bold">Pago 100%</div>
          <div className="text-green-400 text-xs">Seguro</div>
        </div>
      </div>

      {/* Money Back Guarantee */}
      <div className="glassmorphic-dark p-4 rounded-xl border border-yellow-400/30 flex flex-col items-center gap-2 hover-lift">
        <div className="bg-yellow-400/20 p-3 rounded-full">
          <Shield className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="text-center">
          <div className="text-white text-xs font-bold">Garantía</div>
          <div className="text-yellow-400 text-xs">7 Días</div>
        </div>
      </div>

      {/* Quality Assured */}
      <div className="glassmorphic-dark p-4 rounded-xl border border-purple-400/30 flex flex-col items-center gap-2 hover-lift">
        <div className="bg-purple-400/20 p-3 rounded-full">
          <Award className="w-6 h-6 text-purple-400" />
        </div>
        <div className="text-center">
          <div className="text-white text-xs font-bold">Calidad</div>
          <div className="text-purple-400 text-xs">Certificada</div>
        </div>
      </div>

      {/* Proven Results */}
      <div className="glassmorphic-dark p-4 rounded-xl border border-blue-400/30 flex flex-col items-center gap-2 hover-lift">
        <div className="bg-blue-400/20 p-3 rounded-full">
          <TrendingUp className="w-6 h-6 text-blue-400" />
        </div>
        <div className="text-center">
          <div className="text-white text-xs font-bold">Resultados</div>
          <div className="text-blue-400 text-xs">Comprobados</div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
