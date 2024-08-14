import { Button } from "../ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LinkVisuallyHidden from "../LinkVisuallyHidden";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <LinkVisuallyHidden linkId="start" />
        <span className="text-4xl font-semibold">
          Evgenii<span className="text-accent">.</span>
        </span>
        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="#contact">
            <Button>Hire me</Button>
          </a>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
