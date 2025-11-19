import { Wrench, Shield, Sparkles, Gauge, Leaf, Factory } from 'lucide-react'

const features = [
  { icon: Sparkles, title: 'State-of-the-art', desc: 'Nyeste teknologi, premium komponenter og dokumenteret performance.' },
  { icon: Gauge, title: 'Effektivitet', desc: 'Optimerede hydraulikker og motorer med høj virkningsgrad.' },
  { icon: Shield, title: 'Driftssikkerhed', desc: 'Robust konstruktion og materialer til krævende medier og miljøer.' },
  { icon: Wrench, title: 'Service', desc: 'Hurtig support, reservedele og forebyggende vedligehold.' },
  { icon: Leaf, title: 'Bæredygtighed', desc: 'Lavt energiforbrug, lang levetid og minimal nedetid.' },
  { icon: Factory, title: 'Industriel ekspertise', desc: 'Erfaring fra vand, kemi, fødevare, marine og energi.' },
]

export default function Features() {
  return (
    <section id="fordele" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Hvorfor vælge AFM Teknik?</h2>
        <p className="mt-3 text-center text-slate-300 max-w-2xl mx-auto">Vi kombinerer førende pumpefabrikanter med lokal tilstedeværelse og teknisk rådgivning.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <f.icon className="h-6 w-6 text-cyan-400" />
              <div className="mt-4 text-white font-semibold">{f.title}</div>
              <div className="text-sm text-slate-300 mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
