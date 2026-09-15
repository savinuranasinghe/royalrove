import { AnchorHTMLAttributes } from "react";

export default function ArrowLink({ className = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`arrow-link ${className}`} {...props}>{children}<span aria-hidden="true">⟶</span></a>;
}
