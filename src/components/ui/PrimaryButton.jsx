import React from "react";

export const PrimaryButton = ({ label, icon, className = "", ...rest }) => {
  return (
    <button
      type="button"
      {...rest}
      className={`
        group relative flex items-center justify-center gap-2 
        px-6 py-3 rounded-full border-2 border-primary
        bg-primary text-primary-foreground font-medium
        shadow-md hover:shadow-lg
        transition-all duration-300
        hover:bg-accent hover:text-accent-foreground hover:border-accent
        ${className}
      `}
    >
      <span className="relative z-10">{label}</span>

      {icon &&
        React.cloneElement(icon, {
          className: `w-5 h-5 flex-shrink-0 stroke-current transition-all duration-300 -rotate-45 group-hover:rotate-0 ${icon.props?.className ?? ""}`.trim(),
          strokeWidth: 2,
        })}
    </button>
  );
};
