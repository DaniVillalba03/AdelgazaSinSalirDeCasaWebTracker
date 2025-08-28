import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  title?: string;
  duration?: string;
  className?: string;
}

export const VideoPlaceholder = ({ 
  title = "Video Placeholder", 
  duration = "01:23",
  className = ""
}: VideoPlaceholderProps) => {
  return (
    <div className={`relative bg-secondary rounded-lg overflow-hidden shadow-xl ${className}`}>
      {/* Video thumbnail placeholder */}
      <div className="aspect-video bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
          </div>
          
          {/* Duration badge */}
          <div className="absolute -bottom-2 -right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-semibold">
            {duration}
          </div>
        </div>
      </div>

      {/* Video controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-white/80">
          <span className="text-sm">👇 Mira este video de 1 MINUTO para saber como</span>
        </div>
      </div>
    </div>
  );
};