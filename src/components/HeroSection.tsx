const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-16">
    <div className="container mx-auto max-w-3xl text-center">
      <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up">
        Solve the right problem.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Vein Innovation turns real user pain points into practical products.
      </p>
      <a
        href="#projects"
        className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        See our work
      </a>
    </div>
  </section>
);

export default HeroSection;
