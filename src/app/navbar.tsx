import { Navlinks } from "./navlinks";

export function Navbar() {
  return (
    <header className="pointer-events-none fixed left-0 right-0 z-10 flex justify-center">
      <nav className="flex flex-grow justify-end gap-5 px-10 py-6 text-foreground/60 md:px-20">
        <Navlinks />
      </nav>
    </header>
  );
}
