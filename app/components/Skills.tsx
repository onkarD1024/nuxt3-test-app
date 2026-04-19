const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'C'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Vue.js', 'Next.js', 'Nuxt.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Laravel'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Concepts',
    skills: ['System Design', 'Micro Frontends', 'PWA', 'Performance Optimization'],
  },
  {
    category: 'Tools & Infra',
    skills: ['AWS', 'Docker', 'Cloudflare', 'CI/CD'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-3">What I Know</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors duration-200"
          >
            <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/5 text-slate-300 text-sm px-3 py-1.5 rounded-lg border border-white/5 hover:border-indigo-500/30 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
