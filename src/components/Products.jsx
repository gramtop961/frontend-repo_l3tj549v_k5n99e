export default function Products(){
  const products = [
    { name: 'Centrifugalpumper', points: ['End-suction, inline, flertrin', 'Rustfri, duplex, støbejern, bronze', 'ATEX, høj temperatur, aggressive medier'] },
    { name: 'Hydraulikpumper', points: ['Gear-, stempel- og vingepumper', 'Mobil- og industrisystemer', 'Høj tryk, lav pulsation, lang levetid'] },
    { name: 'Tilbehør', points: ['Motorer & frekvensomformere', 'Tætninger, koblinger, fundamenter', 'Skabe, sensorer, overvågning'] },
  ]
  return (
    <section id="produkter" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Produkter</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-white font-semibold text-lg">{p.name}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
