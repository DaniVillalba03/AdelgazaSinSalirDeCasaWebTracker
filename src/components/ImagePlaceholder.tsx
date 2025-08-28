import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  title?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
}

export const ImagePlaceholder = ({ 
  title = "Image Placeholder", 
  className = "",
  aspectRatio = "square"
}: ImagePlaceholderProps) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video", 
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]"
  };

  return (
    <div className={`relative bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-dashed border-primary/30 rounded-lg overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/60">
        <ImageIcon className="w-12 h-12 mb-2" />
        <span className="text-sm font-medium text-center px-4">{title}</span>
      </div>
    </div>
  );
};