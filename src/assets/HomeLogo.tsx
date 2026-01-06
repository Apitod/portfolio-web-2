import React from "react";

type LogoProps = {
  src?: string;  
  alt?: string;
  size?: number | string;    
  className?: string;
  style?: React.CSSProperties;
};

export default function Logo({
  src = "/assets/logo.png",   
  alt = "Logo",
  size = 48,
  className = "",
  style,
}: LogoProps) {
  const dimension =
    typeof size === "number" ? `${size}px` : size ?? "48px";

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        width: dimension,
        height: dimension,
        objectFit: "contain",
        display: "inline-block",
        ...style,
      }}
    />
  );
}