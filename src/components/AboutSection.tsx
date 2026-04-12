const AboutSection = () => (
  <section id="about" className="py-32 px-6">
    <div className="container mx-auto max-w-3xl">
      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">About</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        One team, many products.
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        Vein Innovation is a team focused on building D2C products — each one solving a specific user problem. 
        You'll know us through the products we create. 
        We observe real behavior, find overlooked pain points, and turn them into simple, practical solutions.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Find real problems", desc: "We listen, observe, and dig deeper than surface-level feedback." },
          { title: "Understand the root cause", desc: "Not just what's broken — why it's broken and who it affects." },
          { title: "Build products that solve it", desc: "Every Vein product exists for a clear reason." },
        ].map((item) => (
          <div key={item.title} className="border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
