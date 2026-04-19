import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 max-w-6xl mx-auto">
      {/* Mobile: avatar centered above name */}
      <div className="mb-8 md:hidden flex justify-center">
        <div className="w-36 h-36 rounded-full overflow-hidden ring-1 ring-white/10">
          <Image
            src="/onkar.webp"
            alt="Onkar Deshpande"
            width={144}
            height={144}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black tracking-tight text-white leading-none mb-8">
            Onkar
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #818cf8, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Deshpande
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Software engineer with 5+ years building and scaling large-scale web platforms. Strong expertise in
            performance optimization, system design, and leading engineering teams end-to-end.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 active:scale-95"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="border border-white/10 hover:border-white/30 text-slate-300 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Desktop: large image on the right */}
        <div className="hidden md:block shrink-0">
          <div className="w-64 h-64 rounded-2xl overflow-hidden ring-1 ring-white/10">
            <Image
              src="/onkar.webp"
              alt="Onkar Deshpande"
              width={256}
              height={256}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
