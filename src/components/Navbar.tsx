import VeinLogo from "./VeinLogo";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
    <div className="container mx-auto flex items-center justify-between h-16 px-6">
      <div className="flex items-center gap-2">
        <VeinLogo className="w-6 h-7 text-foreground" />
        <span className="font-semibold text-lg tracking-tight">Vein Innovation</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#process" className="hover:text-foreground transition-colors">Process</a>
        <a href="#products" className="hover:text-foreground transition-colors">Products</a>
        <a href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
          Get in touch
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
