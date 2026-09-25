import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappUrl } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-[#211714] px-5 pb-7 pt-20 text-ivory sm:px-8 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.4fr_.7fr_.9fr]">
          <div><a href="#home" aria-label={`${site.name} home`} className="inline-block bg-ivory p-3"><img src="/velora-logo-transparent.png" alt={site.name} className="h-20 w-auto object-contain sm:h-24" /></a><p className="mt-6 max-w-sm font-display text-3xl leading-[1.02] text-white sm:text-4xl">For the stories you will <em className="font-normal text-gold-100">tell forever.</em></p></div>
          <div><h3 className="text-[10px] font-bold uppercase tracking-luxe text-gold-200">Discover</h3><div className="mt-5 flex flex-col gap-3 text-sm text-white/62"><a href="#collections" className="transition hover:text-gold-100">New arrivals</a><a href="#collections" className="transition hover:text-gold-100">Bridal jewellery</a><a href="#collections" className="transition hover:text-gold-100">Gold coins</a><a href="#story" className="transition hover:text-gold-100">The Velora way</a></div><a href="#visit-us" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-luxe text-gold-200 transition hover:text-white"><MapPin size={15} /> Uppinangady</a></div>
          <div><h3 className="text-[10px] font-bold uppercase tracking-luxe text-gold-200">Contact Velora</h3><address className="mt-5 max-w-xs not-italic text-sm leading-6 text-white/62">{site.streetAddress}<br />Uppinangady, Karnataka {site.postalCode}</address><div className="mt-5 flex flex-col items-start gap-3 text-sm text-white/72"><a href={site.primaryPhoneHref} className="inline-flex items-center gap-2 transition hover:text-gold-100"><Phone size={15} className="text-gold-200" />{site.primaryPhone}</a><a href={whatsappUrl(`Hello ${site.shortName}, I would like to know more about your jewellery collections.`)} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-3 border-b border-gold-200 pb-2.5 text-[10px] font-bold uppercase tracking-luxe text-gold-100 transition hover:border-white hover:text-white"><MessageCircle size={16} /> Chat on WhatsApp <ArrowUpRight size={15} /></a></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[9px] font-medium uppercase tracking-[.13em] text-white/38 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Velora Gold &amp; Diamonds. All rights reserved.</p><div className="flex flex-wrap gap-x-5 gap-y-2"><span>GSTIN: {site.gstNumber}</span><a className="transition hover:text-white" href="#home">Privacy</a><a className="transition hover:text-white" href="#home">Terms</a><a className="transition hover:text-white" href="#home">BIS Disclosure</a></div></div>
      </div>
    </footer>
  )
}
