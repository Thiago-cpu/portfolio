import { Navlinks } from "./navlinks";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 flex justify-center">
      <nav className="flex flex-grow justify-end gap-3 px-10 py-6 md:px-20">
        <Navlinks />
      </nav>
    </header>
  );
}
