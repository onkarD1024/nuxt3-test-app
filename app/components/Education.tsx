export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-3">Background</p>
        <h2 className="text-4xl md:text-5xl font-black text-white">Education</h2>
      </div>

      <div className="bg-[#111111] border border-white/5 rounded-2xl p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">
              SGGS Institute of Engineering and Technology
            </h3>
            <p className="text-indigo-400 text-sm font-medium mb-1">
              B.Tech · Computer Science and Engineering
            </p>
            <p className="text-slate-500 text-sm">Nanded, Maharashtra</p>
          </div>
          <span className="shrink-0 text-slate-400 text-sm bg-white/5 px-4 py-2 rounded-lg self-start">
            2016 – 2020
          </span>
        </div>
      </div>
    </section>
  )
}
