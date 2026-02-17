"use client";
import React from "react";

export const SecondaryButton = ({ label, icon, className = "" }) => {
  return (
    <button
      type="button"
      className={`
        group relative flex items-center justify-center gap-2
        px-6 py-3 rounded-full border-2 border-primary
        bg-background text-foreground font-medium
        shadow-sm hover:shadow-md
        transition-all duration-300
        hover:bg-primary hover:text-primary-foreground
        ${className}
      `}
    >
      <span className="relative z-10 group-hover:underline">{label}</span>

      {icon &&
        React.cloneElement(icon, {
          className: `w-5 h-5 flex-shrink-0 stroke-current transition-all duration-300 -rotate-45 group-hover:rotate-0 ${icon.props?.className ?? ""}`.trim(),
          strokeWidth: 2,
        })}
    </button>
  );
};
