const CTASection = () => (
  <section id="contact" className="py-32 px-6 bg-foreground text-background">
    <div className="container mx-auto max-w-2xl text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Let's solve something real.
      </h2>
      <p className="text-background/60 mb-10 text-lg">
        Have a problem worth solving? Vein would love to hear about it.
      </p>
      <a
        href="mailto:veininnovation@gmail.com"
        className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Get in touch
      </a>
    </div>
  </section>
);

export default CTASection;