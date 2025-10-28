"use client";

import Link from "next/link";
import { INavbarLink } from "./navbar-links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface INavbarLinkProps {
  link: INavbarLink;
}

export const NavbarLink = ({ link }: INavbarLinkProps) => {
  const pathname = usePathname();
  const isActiveLink = pathname === link.route;
  return (
    <div className="relative flex items-center">
      <Link
        href={link.route}
        className={cn(
          "font-bold text-2xl text-muted-foreground transition-all duration-200 hover:scale-105 hover:text-foreground",
          isActiveLink && "text-foreground"
        )}
      >
        {link.label}
      </Link>
      {isActiveLink && (
        <div className="absolute -bottom-[32px] left-1/2 h-[4px] w-full -translate-x-1/2 rounded-xl bg-foreground" />
      )}
    </div>
  );
};
