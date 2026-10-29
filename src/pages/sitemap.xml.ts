import type { APIRoute } from 'astro';
import { siteConfig } from '../data/site';
export const GET: APIRoute = ({ site }) => {
  // Legal pages remain reachable but noindex; only indexable URLs belong here.
  const urls = siteConfig.launchReady ? ['/'] : [];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
