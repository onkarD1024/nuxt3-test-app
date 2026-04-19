const projects = [
  {
    name: 'Code Share',
    stack: ['Node.js', 'Socket.io', 'MongoDB'],
    description:
      'Real-time collaborative coding platform enabling multiple users to simultaneously edit and sync code — think Google Docs for code.',
  },
  {
    name: 'Grievance Redressal Portal',
    stack: ['Laravel', 'MySQL'],
    description:
      'Role-based grievance management system for efficient issue tracking and resolution across departments.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-3">Side Work</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-indigo-500/20 transition-all duration-300 flex flex-col"
          >
            <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>

            <h3 className="text-white font-bold text-xl mb-3">{project.name}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full font-mono border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
