const steps = [
  { num: "01", title: "Find the problem", desc: "Research, interview, and observe to uncover real pain points." },
  { num: "02", title: "Understand it clearly", desc: "Map out the root cause, user context, and what success looks like." },
  { num: "03", title: "Build the solution", desc: "Design and develop with clarity, speed, and attention to detail." },
  { num: "04", title: "Deliver and improve", desc: "Ship, measure, learn, and iterate based on real usage." },
];

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
  <section id="process" className="py-32 px-6 bg-muted/50">
    <div ref={ref} className={`container mx-auto max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Process</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-16">How Vein works</h2>
      <div className="space-y-12">
        {steps.map((step) => (
          <div key={step.num} className="flex gap-6 items-start">
            <span className="text-3xl font-bold text-primary/30 shrink-0">{step.num}</span>
            <div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ProcessSection;
