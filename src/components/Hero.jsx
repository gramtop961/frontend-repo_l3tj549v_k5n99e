import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_-20%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_20%_20%,rgba(59,130,246,0.25),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Pumper i verdensklasse til Skandinavien
            </motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-5 text-lg text-slate-200">
              AFM Teknik leverer centrifugalpumper, hydraulikpumper og komplette løsninger med fokus på effektivitet, driftssikkerhed og totaløkonomi.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#kontakt" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-white font-semibold shadow hover:opacity-90">
                Få rådgivning
              </a>
              <a href="#produkter" className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 text-slate-100 font-semibold hover:bg-white/10">
                Se produkter
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-300/80">
              Hovedkontor: Nordvangen 11, 4600 Køge • Levering i hele Skandinavien
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 grid grid-cols-3 gap-3 p-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-lg bg-[conic-gradient(at_50%_50%,#0ea5e9_0_25%,#22d3ee_25%_50%,#1d4ed8_50%_75%,#0ea5e9_75%_100%)] opacity-20" />
                ))}
              </div>
              <div className="mt-4 text-slate-300 text-sm">
                Avancerede pumper med høj virkningsgrad, lave LCC og bredt materialevalg.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
