import React, { useState } from "react";
import { ImageOff, Sparkles, User, Award, Globe, BookOpen, Layers } from "lucide-react";

interface ShopifyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: "mentor" | "avatar" | "icon" | "badge" | "bg";
  fallbackLabel?: string;
}

export const rewriteShopifyUrl = (url: string | undefined): string => {
  if (!url) return "";
  // Rewrite /t/135/assets/ and /t/156/assets/ to standard global files/ upload folder
  let parsed = url;
  parsed = parsed.replace(/\/t\/\d+\/assets\//g, "/files/");
  // Remove version parameters if any mismatch occurs, keeping standard shopify CDN parsing
  return parsed;
};

export const ShopifyImage: React.FC<ShopifyImageProps> = ({
  src,
  alt,
  fallbackType = "icon",
  fallbackLabel = "Cubelelo",
  className = "",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const finalSrc = rewriteShopifyUrl(src);

  const handleError = () => {
    if (retryCount === 0) {
      // Sometimes we want to force lowercase or trim extensions, but let's go straight to fallback if retry fails
      setRetryCount(1);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !src) {
    if (fallbackType === "mentor" || fallbackType === "avatar") {
      const initials = fallbackLabel
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

      return (
        <div
          className={`${className} flex items-center justify-center bg-brand-light-purple text-brand-purple border-2 border-brand-purple/20 font-bold tracking-wider`}
          style={{ minWidth: "80px", minHeight: "80px" }}
        >
          {initials || <User className="w-8 h-8" />}
        </div>
      );
    }

    if (fallbackType === "badge") {
      return (
        <div className={`${className} flex items-center justify-center bg-amber-50 border border-brand-orange/20 rounded-xl p-4 text-brand-orange`}>
          <Award className="w-12 h-12 stroke-[1.5]" />
        </div>
      );
    }

    // Default icon fallback
    return (
      <div className={`${className} flex items-center justify-center bg-slate-100 border border-slate-200 text-slate-400 p-2`}>
        {alt?.toLowerCase().includes("globe") ? (
          <Globe className="w-8 h-8 opacity-70" />
        ) : alt?.toLowerCase().includes("certificate") ? (
          <Award className="w-8 h-8 opacity-70" />
        ) : alt?.toLowerCase().includes("cheat") || alt?.toLowerCase().includes("guide") ? (
          <BookOpen className="w-8 h-8 opacity-70" />
        ) : alt?.toLowerCase().includes("solver") || alt?.toLowerCase().includes("solve") ? (
          <Layers className="w-8 h-8 opacity-70" />
        ) : (
          <Sparkles className="w-8 h-8 opacity-70" />
        )}
      </div>
    );
  }

  return (
    <img
      src={finalSrc}
      alt={alt}
      onError={handleError}
      className={className}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
