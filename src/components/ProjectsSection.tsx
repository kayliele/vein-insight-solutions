const projects = [
  {
    problem: "Small business owners were losing hours every week manually tracking inventory across spreadsheets.",
    solution: "A lightweight inventory tool that syncs automatically and alerts when stock is low.",
    result: "Average time spent on inventory management dropped by 70%.",
  },
  {
    problem: "Freelancers struggled to send professional invoices quickly without expensive software.",
    solution: "A fast, no-signup invoice generator that works from any browser.",
    result: "Over 10,000 invoices created in the first month with zero onboarding friction.",
  },
  {
    problem: "Parents couldn't find a simple way to coordinate school pickup schedules with other families.",
    solution: "A shared calendar app focused on one thing — organizing rides with trusted contacts.",
    result: "Reduced scheduling conflicts by 85% for participating families.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 px-6">
    <div className="container mx-auto max-w-3xl">
      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Projects</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-16">Case studies</h2>
      <div className="space-y-16">
        {projects.map((project, i) => (
          <div key={i} className="border border-border rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">Problem</p>
                <p className="text-foreground">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Solution</p>
                <p className="text-foreground">{project.solution}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Result</p>
                <p className="text-foreground font-medium">{project.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
