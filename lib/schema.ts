import { siteConfig } from './constants';

export const barSchema = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: siteConfig.name,
  description:
    'Cocktailbar, Lounge und Shisha-Bar in Linz mit Premium-Drinks, Events und Reservierung via WhatsApp.',
  image: `${siteConfig.url}/images/og-image.svg`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.postalCode,
    addressLocality: siteConfig.address.city,
    addressCountry: 'AT'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.2905,
    longitude: 14.3007
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday'],
      opens: '18:00',
      closes: '02:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Thursday',
      opens: '18:00',
      closes: '03:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '18:00',
      closes: '04:00'
    }
  ],
  url: siteConfig.url
};
