import { useEffect } from 'react'
import { X, ShieldCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { site, whatsappUrl } from '../data/site'

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && onClose()
    if (product) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [product, onClose])

  const inquiryUrl = product && whatsappUrl(`Hello ${site.shortName}, I would like to enquire about the ${product.name}.`)

  return <AnimatePresence>{product && <motion.div className="fixed inset-0 z-[60] flex items-end justify-center bg-obsidian/75 p-3 backdrop-blur-sm sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
    <motion.div initial={{ opacity: 0, y: 32, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 32, scale: .98 }} transition={{ type: 'spring', damping: 24, stiffness: 260 }} onMouseDown={(event) => event.stopPropagation()} className="relative grid max-h-[90vh] w-full max-w-4xl overflow-auto rounded-md bg-ivory shadow-2xl md:grid-cols-2">
      <button onClick={onClose} className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-obsidian transition hover:bg-gold-200" aria-label="Close product details"><X size={18} /></button>
      <img src={product.image} alt={product.name} className="h-64 w-full object-cover sm:h-96 md:h-full md:min-h-[520px]" />
      <div className="p-7 sm:p-10"><p className="eyebrow">{product.category} · Limited edition</p><h2 className="mt-3 font-display text-5xl leading-none text-obsidian">{product.name}</h2><p className="mt-6 text-sm leading-7 text-ink/70">{product.description}</p><dl className="my-7 grid grid-cols-2 border-y border-gold-600/15 py-5 text-sm"><div><dt className="text-[10px] font-bold uppercase tracking-luxe text-ink/45">Metal</dt><dd className="mt-1 font-medium">{product.metal}</dd></div><div><dt className="text-[10px] font-bold uppercase tracking-luxe text-ink/45">Approx. weight</dt><dd className="mt-1 font-medium">{product.weight}</dd></div></dl><a href={inquiryUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-obsidian px-5 py-4 text-xs font-bold uppercase tracking-luxe text-white transition hover:bg-emerald"><FaWhatsapp size={18} />Enquire on WhatsApp</a><p className="mt-5 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[.12em] text-ink/50"><ShieldCheck size={15} className="text-gold-600" />Certified authenticity assured</p></div>
    </motion.div>
  </motion.div>}</AnimatePresence>
}
