/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dreamfly-drones.vercel.app',
  generateRobotsTxt: false, // Мы уже создали robots.txt вручную
  generateIndexSitemap: false, // Для небольшого сайта не нужен индексный sitemap
  exclude: [
    '/api/*',
    '/admin/*',
    '/private/*',
    '/_next/*',
    '/404',
    '/500'
  ],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/#about'),
    await config.transform(config, '/#advantages'),
    await config.transform(config, '/#gallery'),
    await config.transform(config, '/#testimonials'),
    await config.transform(config, '/#pricing'),
    await config.transform(config, '/#contact'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/'
      },
      {
        userAgent: 'Yandex',
        allow: '/'
      }
    ],
    additionalSitemaps: [
      'https://dreamfly-drones.vercel.app/sitemap.xml'
    ]
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Настройка приоритетов для разных страниц
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.includes('#gallery') || path.includes('#pricing')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('#about') || path.includes('#contact')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  }
};
