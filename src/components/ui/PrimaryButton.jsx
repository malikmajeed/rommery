import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const PrimaryButton = ({ label, icon, className = "", noIconRotate = false, href, ...rest }) => {
  const iconClassName = noIconRotate
    ? `w-5 h-5 flex-shrink-0 stroke-current ${icon?.props?.className ?? ""}`.trim()
    : `w-5 h-5 flex-shrink-0 stroke-current transition-all duration-300 -rotate-45 group-hover:rotate-0 ${icon?.props?.className ?? ""}`.trim();

  const baseClassName = cn(
    "group relative flex items-center justify-center gap-2 px-6 py-3  bg-transparent text-foreground font-medium shadow-md hover:shadow-lg transition-all duration-300",
    className
  );
  const content = (
    <>
      <span className="relative z-10">{label}</span>
      {icon &&
        React.cloneElement(icon, {
          className: iconClassName,
          strokeWidth: 2,
        })}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClassName} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" {...rest} className={baseClassName}>
      {content}
    </button>
  );
};
