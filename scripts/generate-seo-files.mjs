import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const canonicalSiteUrl = 'https://www.veloragoldanddiamonds.com'
const siteUrl = process.env.VITE_SITE_URL?.trim().replace(/\/+$/, '') || canonicalSiteUrl
const publicDirectory = resolve('public')

await mkdir(publicDirectory, { recursive: true })

const robots = [
  'User-agent: *',
  'Allow: /',
  ...(siteUrl ? [`Sitemap: ${siteUrl}/sitemap.xml`] : []),
  '',
].join('\n')

await writeFile(resolve(publicDirectory, 'robots.txt'), robots)

if (siteUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
  await writeFile(resolve(publicDirectory, 'sitemap.xml'), sitemap)
  console.log(`Generated sitemap for ${siteUrl}`)
}
