import React from "react";
import { cn } from "@/lib/utils";

export const PrimaryButton = ({ label, icon, className = "", noIconRotate = false, ...rest }) => {
  const iconClassName = noIconRotate
    ? `w-5 h-5 flex-shrink-0 stroke-current ${icon?.props?.className ?? ""}`.trim()
    : `w-5 h-5 flex-shrink-0 stroke-current transition-all duration-300 -rotate-45 group-hover:rotate-0 ${icon?.props?.className ?? ""}`.trim();

  return (
    <button
      type="button"
      {...rest}
      className={cn(
        "btn-revolving-border group relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent text-foreground font-medium shadow-md hover:shadow-lg transition-all duration-300 border-white border-1",
        className
      )}
    >
      <span className="relative z-10">{label}</span>
      {icon &&
        React.cloneElement(icon, {
          className: iconClassName,
          strokeWidth: 2,
        })}
    </button>
  );
};
