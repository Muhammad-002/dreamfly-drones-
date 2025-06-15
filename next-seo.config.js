
const SEOConfig = {
  title: 'DroneShow - Световые шоу дронов | ProffiGlobals',
  titleTemplate: '%s | DroneShow',
  defaultTitle: 'DroneShow - Световые шоу дронов | ProffiGlobals',
  description: 'Профессиональные световые шоу с дронами по всей России. Современные технологии, безопасность, экологичность. От 20 000 рублей. Заказать дрон-шоу для любого мероприятия.',
  canonical: 'https://dreamfly-drones.vercel.app',
  
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://dreamfly-drones.vercel.app',
    site_name: 'DroneShow - Световые шоу дронов',
    title: 'DroneShow - Профессиональные световые шоу дронов',
    description: 'Захватывающие световые шоу с дронами для праздников и мероприятий. Современные технологии, безопасность, экологичность. Работаем по всей России.',
    images: [
      {
        url: 'https://i.ytimg.com/vi/1lnBmYAiduo/maxresdefault.jpg',
        width: 1200,
        height: 630,
        alt: 'DroneShow - Световые шоу дронов',
        type: 'image/jpeg',
      },
      {
        url: 'https://i.ytimg.com/vi/U9T3Dj1lRHY/maxresdefault.jpg',
        width: 1200,
        height: 630,
        alt: 'Ночное шоу дронов в небе',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    handle: '@droneshow_ru',
    site: '@droneshow_ru',
    cardType: 'summary_large_image',
  },

  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#1e40af',
    },
    {
      name: 'msapplication-TileColor',
      content: '#1e40af',
    },
    {
      name: 'keywords',
      content: 'дрон шоу, световое шоу, дроны, праздник, мероприятие, Москва, Россия, квадрокоптеры, воздушное шоу, корпоратив, свадьба, день города',
    },
    {
      name: 'author',
      content: 'ProffiGlobals',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      name: 'yandex-verification',
      content: 'your-yandex-verification-code',
    },
    {
      name: 'google-site-verification',
      content: 'your-google-verification-code',
    },
    {
      property: 'og:locale:alternate',
      content: 'en_US',
    },
    {
      name: 'format-detection',
      content: 'telephone=yes',
    },
    {
      name: 'geo.region',
      content: 'RU',
    },
    {
      name: 'geo.placename',
      content: 'Россия',
    },
  ],

  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: '/feed.xml',
    },
  ],
};

export default SEOConfig;
