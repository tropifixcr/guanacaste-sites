export type Lang = 'en' | 'es';

// Loic's number during the test. Swap for the renting provider's number later.
export const whatsappNumber = '50687016040';

export const whatsappLink = (text: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export const paths = {
  en: { home: '/', thanks: '/thanks/', privacy: '/privacy/' },
  es: { home: '/es/', thanks: '/es/gracias/', privacy: '/es/privacidad/' },
} as const;
