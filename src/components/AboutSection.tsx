const AboutSection = () => (
  <section id="about" className="py-32 px-6">
    <div className="container mx-auto max-w-3xl">
      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">About</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        We focus on understanding real problems — not assumptions.
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">
        We pay attention to small details, user behavior, and hidden pain points that are often overlooked. 
        Then we turn those insights into simple, practical solutions. Our goal is to build products that actually help.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Find real user problems", desc: "We listen, observe, and dig deeper than surface-level feedback." },
          { title: "Understand the root cause", desc: "Not just what's broken — why it's broken and who it affects." },
          { title: "Build simple, effective solutions", desc: "Clean products that do what they need to do, nothing more." },
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
