import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/menu', '/shisha', '/events', '/gallery', '/about', '/contact', '/impressum', '/datenschutz'];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString()
  }));
}
