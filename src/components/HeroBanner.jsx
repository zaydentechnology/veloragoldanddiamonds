import { ArrowDown, ArrowUpRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const scrollToSection = (event, sectionId) => {
  event.preventDefault()
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function HeroBanner() {
  return (
    <section id="home" className="relative isolate min-h-[760px] overflow-hidden bg-[#1e1512] text-white sm:min-h-[790px] lg:min-h-[calc(100svh-29px)]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[66%]">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2200&q=92"
          alt="Fine gold jewellery from Velora"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,21,18,.9)_0%,rgba(30,21,18,.32)_50%,rgba(30,21,18,.1)_100%)] lg:bg-[linear-gradient(90deg,rgba(30,21,18,.98)_0%,rgba(30,21,18,.38)_34%,rgba(30,21,18,.04)_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(30,21,18,.48),transparent_38%,rgba(30,21,18,.16))]" />
      </div>

      <div className="hero-grain absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-[18%] hidden h-[430px] w-[430px] -translate-x-1/2 rounded-full border border-gold-200/15 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-10 right-8 hidden h-28 w-28 rounded-full border border-gold-200/35 lg:block" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-12 pt-36 sm:min-h-[790px] sm:px-8 sm:pb-16 lg:min-h-[calc(100svh-29px)] lg:items-center lg:pb-0">
        <div className="max-w-2xl lg:pb-5">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-gold-300" />
            <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-gold-100">Gold &amp; diamonds · Uppinangady</p>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.82 }} className="font-display text-[4rem] leading-[0.78] tracking-[-.035em] text-white sm:text-[5.7rem] lg:text-[7.9rem]">
            <span className="text-gold-100">Velora Gold</span><br />
            &amp; Diamonds<br />
            <em className="font-normal text-champagne">in Uppinangady.</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.76 }} className="mt-8 max-w-md text-sm leading-7 text-white/78 sm:text-base sm:leading-8">
            A considered world of gold and diamond jewellery at Prithvi Shopping Mall, near SBI Bank—chosen for the people and moments you want to remember.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.76 }} className="mt-9 flex flex-wrap items-center gap-3">
            <motion.a href="#collections" onClick={(event) => scrollToSection(event, 'collections')} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="gold-sheen relative inline-flex cursor-pointer items-center gap-4 overflow-hidden rounded-full bg-gold-gradient px-6 py-4 text-[10px] font-bold uppercase tracking-luxe text-obsidian shadow-gold sm:text-xs">
              <span className="relative">Explore collections</span><ArrowUpRight size={16} className="relative" />
            </motion.a>
            <motion.a href="#story" onClick={(event) => scrollToSection(event, 'story')} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/40 bg-white/[.04] px-5 py-3.5 text-[10px] font-bold uppercase tracking-luxe text-white backdrop-blur-sm transition hover:border-gold-200 hover:text-gold-100 sm:text-xs">
              <Play size={12} fill="currentColor" /> Meet Velora
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.aside initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.48, duration: 0.8 }} className="absolute bottom-8 right-8 hidden w-[235px] border-l border-gold-300/50 pl-5 lg:block">
        <p className="font-display text-3xl leading-none text-gold-100">For every<br /><em className="font-normal text-white">kind of becoming.</em></p>
        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[.18em] text-white/55">A new jewellery house<br />in Uppinangady</p>
      </motion.aside>

      <button onClick={(event) => scrollToSection(event, 'collections')} aria-label="Scroll to collections" className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:-translate-y-1 hover:border-gold-200 hover:text-gold-200 sm:bottom-7 sm:right-8 sm:h-12 sm:w-12 lg:hidden">
        <ArrowDown size={18} />
      </button>
    </section>
  )
}
