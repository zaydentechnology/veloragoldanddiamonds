import { ArrowUpRight, Eye, Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { products } from '../data/products'

const filters = ['All', 'Bridal', 'Daily Wear', 'Gold Coins', 'Solitaires']

function ProductTile({ product, onQuickView, index }) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ delay: index * 0.04, duration: 0.45 }} className="group">
      <button onClick={() => onQuickView(product)} className="relative block w-full overflow-hidden bg-[#efe4d3] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-600">
        <img src={product.image} alt={product.name} className="aspect-[.88] w-full object-cover transition duration-[1s] ease-out group-hover:scale-[1.05]" loading="lazy" />
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/70 bg-white/75 text-obsidian backdrop-blur-sm transition group-hover:rotate-45 group-hover:bg-gold-200" aria-label={`Quick view ${product.name}`}><Plus size={17} /></span>
        <span className="absolute inset-x-4 bottom-4 hidden translate-y-3 items-center justify-center gap-2 bg-obsidian px-3 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-white opacity-0 transition duration-300 sm:flex sm:group-hover:translate-y-0 sm:group-hover:opacity-100"><Eye size={14} /> View piece</span>
      </button>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div><p className="text-[9px] font-bold uppercase tracking-[.18em] text-gold-600">{product.category}</p><h3 className="mt-1 font-display text-[1.7rem] leading-[.94] text-obsidian">{product.name}</h3></div>
        <button onClick={() => onQuickView(product)} className="mt-1 text-ink/45 transition hover:text-gold-600" aria-label={`View ${product.name}`}><ArrowUpRight size={18} /></button>
      </div>
    </motion.article>
  )
}

export default function FeaturedCollection({ activeFilter, onFilter, onQuickView }) {
  const visibleProducts = activeFilter === 'All' ? products : products.filter((product) => product.category === activeFilter)
  const [heroProduct, ...supportingProducts] = visibleProducts

  return (
    <section id="collections" className="relative overflow-hidden bg-[#fdfaf4] px-5 py-24 sm:px-8 lg:py-32">
      <div className="absolute right-[-5rem] top-[-5rem] h-64 w-64 rounded-full bg-gold-100/45 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div><p className="eyebrow">The Velora edit</p><h2 className="section-title mt-4">Jewels with a<br /><em>life beyond the occasion.</em></h2></div>
          <p className="max-w-sm text-sm leading-7 text-ink/65 lg:justify-self-end">A focused selection of pieces that make an entrance quietly—and stay memorable long after.</p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Jewellery categories">
          {filters.map((filter) => <button key={filter} onClick={() => onFilter(filter)} role="tab" aria-selected={filter === activeFilter} className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.14em] transition ${filter === activeFilter ? 'border-obsidian bg-obsidian text-ivory shadow-lg' : 'border-ink/15 bg-white/50 text-ink/62 hover:border-gold-500 hover:text-gold-600'}`}>{filter}</button>)}
        </div>

        <AnimatePresence mode="wait">
          {heroProduct ? <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
            <motion.article whileHover={{ y: -4 }} className="group relative min-h-[500px] overflow-hidden bg-obsidian shadow-luxury sm:min-h-[600px]">
              <img src={heroProduct.image} alt={heroProduct.name} className="absolute inset-0 h-full w-full object-cover transition duration-[1.4s] ease-out group-hover:scale-[1.035]" loading="lazy" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(30,21,18,.92)_0%,rgba(30,21,18,.12)_63%,rgba(30,21,18,.02)_100%)]" />
              <div className="absolute left-5 top-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.22em] text-gold-100"><span className="h-px w-7 bg-gold-200" />The considered piece</div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-gold-200">{heroProduct.category}</p><div className="mt-3 flex flex-wrap items-end justify-between gap-4"><h3 className="font-display text-4xl leading-none sm:text-5xl">{heroProduct.name}</h3><button onClick={() => onQuickView(heroProduct)} className="inline-flex items-center gap-2 border-b border-gold-200 pb-2 text-[10px] font-bold uppercase tracking-[.14em] text-gold-100 transition hover:border-white hover:text-white">Discover <ArrowUpRight size={15} /></button></div></div>
            </motion.article>

            <div className="grid grid-cols-2 content-start gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
              {supportingProducts.map((product, index) => <ProductTile key={product.id} product={product} onQuickView={onQuickView} index={index} />)}
              {supportingProducts.length === 0 && <div className="col-span-2 flex min-h-[260px] items-center justify-center border border-dashed border-gold-300/70 p-8 text-center"><p className="font-display text-3xl text-ink/65">A singular piece, chosen well.</p></div>}
            </div>
          </motion.div> : <p className="py-20 text-center text-ink/60">We are curating this collection. Please explore another category.</p>}
        </AnimatePresence>
      </div>
    </section>
  )
}
