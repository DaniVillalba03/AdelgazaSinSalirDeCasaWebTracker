import { CreditCard, Shield, Smartphone, Wallet } from "lucide-react";

export const PaymentLogos = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h4 className="font-bold-caps text-center text-secondary mb-4">
        PAGO 100% SEGURO
      </h4>
      
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Visa */}
        <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold text-lg">
          VISA
        </div>
        
        {/* Mastercard */}
        <div className="bg-red-500 text-white px-4 py-2 rounded font-bold text-lg">
          MC
        </div>
        
        {/* American Express */}
        <div className="bg-blue-800 text-white px-4 py-2 rounded font-bold text-lg">
          AMEX
        </div>
        
        {/* PayPal */}
        <div className="bg-blue-500 text-white px-4 py-2 rounded font-bold text-lg">
          PayPal
        </div>
        
        {/* Generic payment icons */}
        <div className="flex items-center gap-2">
          <CreditCard className="w-8 h-8 text-gray-600" />
          <Shield className="w-8 h-8 text-green-600" />
          <Smartphone className="w-8 h-8 text-gray-600" />
          <Wallet className="w-8 h-8 text-gray-600" />
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-600 mt-4">
        Los pagos se realizan a través de <strong>Hotmart®</strong> que es uno de los procesadores de pago más importantes del mundo.
      </p>
    </div>
  );
};