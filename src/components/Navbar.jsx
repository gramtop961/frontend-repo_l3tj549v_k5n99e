import { useState } from 'react'
import { Menu, ChevronDown, Phone, MapPin, Globe } from 'lucide-react'

const menu = [
  {
    label: 'Produkter',
    items: [
      { name: 'Centrifugalpumper', desc: 'Høj effektivitet til vand, kemi og HVAC', href: '#produkter' },
      { name: 'Hydraulikpumper', desc: 'Robuste løsninger til mobile og industrielle systemer', href: '#produkter' },
      { name: 'Tilbehør & Reservedele', desc: 'Motorer, koblinger, tætninger og mere', href: '#produkter' },
    ],
  },
  {
    label: 'Anvendelser',
    items: [
      { name: 'Vandforsyning', desc: 'Forsyning, trykforøgning og filtrering', href: '#anvendelser' },
      { name: 'Industri', desc: 'Proces-, kemi- og fødevareapplikationer', href: '#anvendelser' },
      { name: 'Maritime', desc: 'Ballast, køling og lænse', href: '#anvendelser' },
      { name: 'Varme & Køling', desc: 'Fjernvarme, HVAC og energilagring', href: '#anvendelser' },
    ],
  },
  {
    label: 'Tjenester',
    items: [
      { name: 'Rådgivning', desc: 'Valg af pumpe, materialer og drift', href: '#tjenester' },
      { name: 'Dimensionering', desc: 'Præcis udlægning efter driftspunkter', href: '#tjenester' },
      { name: 'Installation', desc: 'On-site opsætning og idriftsættelse', href: '#tjenester' },
      { name: 'Service & Reparation', desc: 'Aftaler, spares, retrofit og overhaul', href: '#tjenester' },
    ],
  },
  {
    label: 'Virksomhed',
    items: [
      { name: 'Om AFM Teknik', desc: 'Skandinavisk partner inden for pumpeteknik', href: '#om' },
      { name: 'Bæredygtighed', desc: 'Effektivitet, levetid og energioptimering', href: '#om' },
      { name: 'Kvalitet & Certificering', desc: 'Dokumentation, test og sporbarhed', href: '#om' },
    ],
  },
  { label: 'Nyheder', items: [] },
  { label: 'Kontakt', items: [] },
]

function DesktopMenuItem({ label, items, openIndex, setOpenIndex, idx }) {
  const isOpen = openIndex === idx
  return (
    <div className="relative">
      <button
        className="group inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-100/90 hover:text-white"
        onMouseEnter={() => setOpenIndex(idx)}
        onFocus={() => setOpenIndex(idx)}
      >
        <span>{label}</span>
        {items && items.length > 0 && (
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>
      {items && items.length > 0 && isOpen && (
        <div
          onMouseLeave={() => setOpenIndex(null)}
          className="absolute left-0 mt-3 w-[520px] rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur p-4 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <a key={it.name} href={it.href} className="group rounded-lg p-3 hover:bg-white/5 transition">
                <div className="text-sm font-semibold text-white">{it.name}</div>
                <div className="text-xs text-slate-300/80">{it.desc}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 ring-2 ring-white/20" />
            <div className="leading-tight">
              <div className="text-white font-bold tracking-tight">AFM Teknik</div>
              <div className="text-[10px] text-slate-300/80">Pumpeeksperter i Skandinavien</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1" onMouseLeave={() => setOpenIndex(null)}>
            {menu.map((m, idx) => (
              <DesktopMenuItem key={m.label} label={m.label} items={m.items} openIndex={openIndex} setOpenIndex={setOpenIndex} idx={idx} />
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
              <Phone className="h-4 w-4" /> Få et tilbud
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur p-4">
            {menu.map((m) => (
              <div key={m.label} className="py-2">
                <div className="text-slate-200 font-semibold mb-2">{m.label}</div>
                {m.items && m.items.length > 0 ? (
                  <div className="space-y-2">
                    {m.items.map((it) => (
                      <a key={it.name} href={it.href} className="block text-sm text-slate-300">{it.name}</a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            <div className="mt-3 flex flex-col gap-2">
              <a href="#kontakt" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white">
                <Phone className="h-4 w-4" /> Kontakt os
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-4 w-4" /> Nordvangen 11, 4600 Køge
                <Globe className="h-4 w-4" /> Skandinavien
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
