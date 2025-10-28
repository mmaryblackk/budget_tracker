import { Logo } from "./Logo";
import { navbarLinks } from "./navbar-links";
import { ModeToggle } from "./ModeToggle";
import { NavbarLink } from "./NavbarLink";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-muted">
      <div className="flex items-center gap-40">
        <Logo />

        <div className="flex gap-18">
          {navbarLinks.map((link) => (
            <NavbarLink key={link.key} link={link} />
          ))}
        </div>
      </div>
      <ModeToggle />
    </nav>
  );
}
