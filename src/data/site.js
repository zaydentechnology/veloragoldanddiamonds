export const site = {
  name: 'Velora Gold & Diamonds',
  shortName: 'Velora',
  location: 'Uppinangady, Karnataka 574241',
  address: 'Prithvi Shopping Mall, Near SBI Bank, Uppinangady, Karnataka 574241',
  streetAddress: 'Prithvi Shopping Mall, Near SBI Bank',
  postalCode: '574241',
  primaryPhone: '+91 91801 96916',
  primaryPhoneHref: 'tel:+919180196916',
  secondaryPhone: '+91 78999 74358',
  secondaryPhoneHref: 'tel:+917899974358',
  gstNumber: '29ABCFV6880E1ZR',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Prithvi%20Shopping%20Mall%2C%20Near%20SBI%20Bank%2C%20Uppinangady%2C%20Karnataka%20574241',
  instagram: 'https://www.instagram.com/veloragoldanddiamonds/',
  // WhatsApp requires the country code without a plus sign.
  whatsappNumber: '917899974358',
  siteUrl: import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || (typeof window !== 'undefined' ? window.location.origin : ''),
}

export const whatsappUrl = (message) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`

export const faqItems = [
  {
    question: 'Where is Velora Gold & Diamonds located?',
    answer: 'Velora Gold & Diamonds is at Prithvi Shopping Mall, near SBI Bank, Uppinangady, Karnataka 574241. Use the directions link on this site to plan your visit.',
  },
  {
    question: 'Where can I find gold and diamond jewellery near SBI Bank in Uppinangady?',
    answer: 'Visit Velora Gold & Diamonds at Prithvi Shopping Mall, near SBI Bank, Uppinangady. Discover gold, diamond, bridal and everyday jewellery in a relaxed showroom setting.',
  },
  {
    question: 'What jewellery can I discover at Velora?',
    answer: 'Explore gold and diamond jewellery for bridal celebrations, daily wear, solitaires, and thoughtful gold gifts.',
  },
  {
    question: 'Can I enquire about a piece before visiting?',
    answer: 'Yes. Use the WhatsApp button to share the piece you are interested in and begin a personal conversation with Velora.',
  },
]
