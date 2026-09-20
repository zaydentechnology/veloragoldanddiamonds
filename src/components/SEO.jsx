import { Helmet } from 'react-helmet-async'
import { faqItems, site } from '../data/site'

const socialImage = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=90'

export default function SEO() {
  const businessId = site.siteUrl ? `${site.siteUrl}/#velora-gold-and-diamonds` : undefined
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'JewelryStore',
        ...(businessId && { '@id': businessId }),
        name: site.name,
        description: 'A refined destination for gold and diamond jewellery at Prithvi Shopping Mall, near SBI Bank, Uppinangady, Karnataka.',
        address: { '@type': 'PostalAddress', streetAddress: site.streetAddress, addressLocality: 'Uppinangady', addressRegion: 'Karnataka', postalCode: site.postalCode, addressCountry: 'IN' },
        areaServed: { '@type': 'AdministrativeArea', name: 'Uppinangady, Karnataka' },
        hasMap: site.mapsUrl,
        telephone: site.primaryPhone,
        taxID: site.gstNumber,
        sameAs: [site.instagram],
        ...(site.siteUrl && { url: site.siteUrl, logo: `${site.siteUrl}/velora-logo-transparent.png`, image: socialImage }),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
      },
    ],
  }

  return <Helmet>
    <title>Velora Gold & Diamonds | Jewellery in Uppinangady</title>
    <meta name="description" content="Velora Gold & Diamonds at Prithvi Shopping Mall, near SBI Bank, Uppinangady—gold, diamond, bridal and everyday jewellery for every celebration." />
    <meta name="keywords" content="jewellery in Uppinangady, Prithvi Shopping Mall jewellery shop, gold jewellery Uppinangady, diamond jewellery Uppinangady, bridal jewellery Karnataka, Velora Gold and Diamonds" />
    <meta name="author" content="Velora Gold & Diamonds" />
    <meta name="application-name" content="Velora Gold & Diamonds" />
    <meta name="geo.region" content="IN-KA" />
    <meta name="geo.placename" content="Uppinangady, Karnataka" />
    <meta name="theme-color" content="#FBF1DF" />
    {site.siteUrl && <link rel="canonical" href={site.siteUrl} />}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={site.name} />
    <meta property="og:title" content="Velora Gold & Diamonds | Jewellery in Uppinangady" />
    <meta property="og:description" content="Thoughtfully chosen gold and diamonds for every celebration in Uppinangady." />
    <meta property="og:image" content={socialImage} />
    <meta property="og:image:alt" content="Velora Gold and Diamonds fine jewellery" />
    <meta property="og:locale" content="en_IN" />
    {site.siteUrl && <meta property="og:url" content={site.siteUrl} />}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Velora Gold & Diamonds | Jewellery in Uppinangady" />
    <meta name="twitter:description" content="Gold and diamond jewellery for your meaningful moments." />
    <meta name="twitter:image" content={socialImage} />
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  </Helmet>
}
