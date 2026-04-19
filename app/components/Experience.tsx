const experiences = [
  {
    company: 'RentoMojo',
    role: 'Software Development Engineer III',
    period: 'March 2021 – Present',
    location: 'Bengaluru, Karnataka',
    metrics: [
      { value: '40%', label: 'Faster Page Loads' },
      { value: '1M+', label: 'Monthly Active Users' },
      { value: '86%+', label: 'URLs Passing Perf' },
      { value: '20%', label: 'Less Infra Cost' },
    ],
    highlights: [
      'Led engineering for the e-commerce platform, managing a team of 8 engineers and owning end-to-end delivery of critical product and platform initiatives.',
      'Architected and built Frontend 2.0 from scratch — redesigned rendering, routing, and state management layers, reducing page load time by 40%.',
      'Revamped desktop platform, achieving 86%+ URLs passing performance benchmarks and improving organic traffic by 20%+ through enhanced SEO.',
      'Revamped mobile web, improving page load performance by 30–35% and increasing conversion rates by 12–15% across key user journeys.',
      'Built Limitless — drove 15%+ increase in multi-product subscriptions by enabling users to rent multiple items under a fixed monthly plan.',
      'Developed Mojo Store PWA, improving assisted order conversion by 20–25% and enabling retail agents to place orders seamlessly.',
      'Architected Micro Frontend systems, reducing deployment dependencies and infrastructure costs by 20%.',
      'Reduced platform bundle size by 25–30% through ownership of platform-wide performance optimization.',
      'Led migration of legacy systems to modern architectures, improving performance, scalability, and deployment efficiency.',
    ],
  },
  {
    company: 'Trikara Technologies Pvt Ltd',
    role: 'Software Engineer Intern',
    period: 'June 2020 – Feb 2021',
    location: 'Bengaluru, Karnataka',
    metrics: null,
    highlights: [
      'Full Stack Developer at an early-stage startup, contributing across multiple frontend and backend systems.',
      'Built a cybersecurity tool to identify vulnerabilities in GitHub repositories with Jira, Trello, and Slack integrations.',
      'Improved DevSecOps workflows by building automation tools including a custom Jenkins plugin.',
      'Built modules for a real-time vehicle tracking system using map-based visualization, improving logistics visibility.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-3">Where I've Worked</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-indigo-500/20 transition-colors duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                <p className="text-indigo-400 text-sm font-medium">{exp.role}</p>
              </div>
              <div className="sm:text-right shrink-0">
                <p className="text-slate-400 text-sm">{exp.period}</p>
                <p className="text-slate-600 text-sm">{exp.location}</p>
              </div>
            </div>

            {exp.metrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-5 bg-white/[0.02] rounded-xl border border-white/5">
                {exp.metrics.map((m) => (
                  <div key={m.value} className="text-center">
                    <div className="text-cyan-400 font-black text-xl">{m.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <ul className="space-y-3">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-indigo-500 mt-0.5 shrink-0 font-bold">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
