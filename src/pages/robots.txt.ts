import type { APIRoute } from 'astro';
import { siteConfig } from '../data/site';
export const GET: APIRoute = ({ site }) => new Response(
  siteConfig.launchReady
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
