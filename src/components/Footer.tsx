import VeinLogo from "./VeinLogo";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <VeinLogo className="w-5 h-6 text-foreground" />
        <span className="text-sm font-medium">Vein Innovation</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Vein Innovation. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
