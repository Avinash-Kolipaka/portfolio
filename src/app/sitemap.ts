import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://avinash-kolipaka.vercel.app';
  const routes = [
    '',
    '/projects/corn-phenotyping',
    '/projects/startup-match',
    '/projects/verdiq',
    '/projects/smart-parking',
    '/projects/soil-testing',
    '/projects/uniportal',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
