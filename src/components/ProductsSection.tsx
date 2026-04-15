import { ExternalLink } from "lucide-react";
import toureatLogo from "@/assets/toureat-logo.png";
import duonowLogo from "@/assets/duonow-logo.png";
import teatarotLogo from "@/assets/teatarot-logo.png";

const products = [
  {
    name: "Thoureat",
    description: "Food & culture map — discover local flavors and hidden gems around you.",
    logo: toureatLogo,
    link: "https://www.toureatsince2026.com/",
    color: "bg-[#E85D3A]",
  },
  {
    name: "DuoNow",
    description: "Smart learning companion for students — study smarter, not harder.",
    logo: duonowLogo,
    link: "https://www.facebook.com/profile.php?id=61573974130010",
    color: "bg-[#1a4d3a]",
  },
  {
    name: "Tea Tarot",
    description: "A cozy tarot reading experience with Vietnamese tea culture.",
    logo: teatarotLogo,
    link: "https://www.instagram.com/tarot_tratra/",
    color: "bg-[#8B7355]",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24 px-6 bg-muted/30">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Products</p>
        <h2 className="text-3xl md:text-4xl font-bold">Products built by Vein</h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
          Each product solves a specific problem. Simple, practical, and made for real people.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <a
            key={product.name}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-background rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className={`${product.color} p-8 flex items-center justify-center h-48`}>
              <img
                src={product.logo}
                alt={`${product.name} logo`}
                className="max-h-32 w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
