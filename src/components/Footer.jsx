import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer(){
  return (
    <footer id="kontakt" className="mt-24 border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-bold text-lg">AFM Teknik</div>
            <div className="text-slate-300 text-sm mt-2">Pumpeeksperter i Skandinavien</div>
          </div>
          <div className="space-y-2 text-slate-300 text-sm">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Nordvangen 11, 4600 Køge</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +45 00 00 00 00</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@afmteknik.dk</div>
          </div>
          <div className="text-slate-400 text-xs">
            © {new Date().getFullYear()} AFM Teknik ApS. Alle rettigheder forbeholdes.
          </div>
        </div>
      </div>
    </footer>
  )
}
