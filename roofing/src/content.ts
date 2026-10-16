import type { Lang } from '@guanacaste/shared/contact';

export const site = 'Guanacaste Roofing';

// Rain level per month for the calendar strip: 0 dry, 1 rain, 2 heaviest. Inspect = best time to check the roof.
// Based on the season as owners know it: dry December to April, rains from May, heaviest September and October.
export const months = [
  { level: 0, inspect: false }, { level: 0, inspect: false }, { level: 0, inspect: true }, { level: 0, inspect: true },
  { level: 2, inspect: false }, { level: 1, inspect: false }, { level: 1, inspect: false }, { level: 1, inspect: false },
  { level: 2, inspect: false }, { level: 2, inspect: false }, { level: 1, inspect: false }, { level: 0, inspect: false },
];

// Towns drawn on the coast map, as % of its width and height. Approximate: an illustration, not a survey map.
export const mapTowns = [
  { name: 'Tamarindo', x: 25, y: 89, side: 'right' },
  { name: 'Playa Grande', x: 19, y: 82, side: 'right' },
  { name: 'Huacas', x: 48, y: 75.5, side: 'right' },
  { name: 'Playa Flamingo', x: 42, y: 59.5, side: 'left' },
  { name: 'Playa Potrero', x: 47, y: 55.5, side: 'right' },
  { name: 'Las Catalinas', x: 39, y: 50, side: 'left' },
  { name: 'Playa Ocotal', x: 62, y: 34, side: 'left' },
  { name: 'Playas del Coco', x: 69, y: 33, side: 'right' },
  { name: 'Playa Hermosa', x: 75, y: 29, side: 'right' },
  { name: 'Península Papagayo', x: 72, y: 14.5, side: 'left' },
];

const en = {
  pro: 'roofer',
  title: 'Roof repair and new roofs, Tamarindo to Papagayo | Guanacaste Roofing',
  description:
    'Roof leaking in the rain, gutters overflowing, or planning a new roof? From Tamarindo to Papagayo. Tell us about it and a local roofer contacts you, free.',
  langSwitch: { label: 'Español', href: '/es/', hreflang: 'es' },
  h1: 'Roof leaks and new roofs, Tamarindo to Papagayo',
  lead: 'Choose what you need and tap your town on the map. A local roofer will contact you. Free for you.',
  leak: "It's leaking",
  newRoof: 'New roof or inspection',
  whatsapp: 'WhatsApp',
  whatsappText: (what: string) => `Hello, I need a roofer. ${what}`,
  mapLabel: 'Map of the coast from Tamarindo to Papagayo. Choose your town.',
  townChosen: (town: string) => `${town} selected`,
  seasonTitle: 'When roofs leak here',
  seasonLead: 'After months of dry heat, the first heavy rains find every crack. Most leaks show up in May, and again in September and October.',
  seasonKey: { dry: 'Dry', rain: 'Rain', heavy: 'Heaviest rain', inspect: 'Best time to check the roof' },
  monthNames: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  monthFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  seasonNote: 'March and April, at the end of the dry season, are the time to have the roof checked, so repairs are done before the rains.',
  servicesTitle: 'What a roofer can do',
  services: [
    ['Leak finding and repair', 'Tracing where the water really gets in, which is often not right above the stain.'],
    ['Tile and metal roofs', 'Broken or slipped tiles, rusted sheets, loose screws and worn flashing.'],
    ['Waterproofing', 'Sealing flat roofs, terraces and joints with membranes.'],
    ['Gutters', 'Cleaning, repairing and replacing gutters and downspouts that overflow.'],
    ['New roofs', 'New roofs for builds and renovations, and replacing a roof at the end of its life.'],
  ],
  howTitle: 'How it works',
  how: [
    ['Tell us what is happening', 'Use the form or WhatsApp. Say where it leaks and when. Photos of the stain and the roof above help.'],
    ['We pass it to a local roofer', 'Guanacaste Roofing is not a roofing company. We send your request to a local partner roofer.'],
    ['The roofer contacts you', 'They ask what they need to know and arrange a visit with you directly.'],
  ],
  faqTitle: 'Questions owners ask',
  faqs: [
    ['When should I have the roof checked?', 'Late in the dry season, around March or April, so repairs are done before the rains start.'],
    ['It only leaks in heavy rain. Can it still be found?', 'Usually. Send photos of the stain inside and the roof above it, and say which way the rain was blowing.'],
    ['Can a roofer check the house while it is empty?', 'Yes. Say who has access, or whether the roof can be reached from outside.'],
    ['Do you also do new roofs?', 'Yes. Describe the build or renovation, the size and the material you have in mind, and a roofer will contact you.'],
  ],
  formTitle: 'Send your request',
  formLead: 'Takes a minute. A local roofer will contact you on WhatsApp or by phone.',
  orWhatsapp: 'Prefer to write? Message us on WhatsApp',
  footerNote: 'Guanacaste Roofing passes requests to local partner roofers. It is not a roofing company.',
  privacy: 'Privacy',
  thanksTitle: 'Request sent',
  thanksText: 'Thank you. Your request has been passed on, and a local roofer will contact you on WhatsApp or by phone.',
  thanksBack: 'Back to the home page',
  problems: [
    { value: 'Leak', label: 'The roof is leaking' },
    { value: 'Tile or metal roof repair', label: 'Tile or metal roof repair' },
    { value: 'Gutters', label: 'Gutters or downspouts' },
    { value: 'Waterproofing', label: 'Waterproofing a flat roof or terrace' },
    { value: 'Inspection', label: 'Inspection before the rains' },
    { value: 'New roof', label: 'New roof or replacement' },
    { value: 'Something else', label: 'Something else' },
  ],
};

const es: typeof en = {
  pro: 'techador',
  title: 'Techos y goteras, de Tamarindo a Papagayo | Guanacaste Roofing',
  description:
    '¿Goteras con la lluvia, canoas que se rebalsan o un techo nuevo? De Tamarindo a Papagayo. Cuéntenos y un techador local le contacta, sin costo.',
  langSwitch: { label: 'English', href: '/', hreflang: 'en' },
  h1: 'Goteras y techos nuevos, de Tamarindo a Papagayo',
  lead: 'Elija lo que necesita y toque su lugar en el mapa. Un techador local le contactará. Sin costo para usted.',
  leak: 'Tengo goteras',
  newRoof: 'Techo nuevo o revisión',
  whatsapp: 'WhatsApp',
  whatsappText: (what: string) => `Hola, necesito un techador. ${what}`,
  mapLabel: 'Mapa de la costa de Tamarindo a Papagayo. Elija su lugar.',
  townChosen: (town: string) => `${town} seleccionado`,
  seasonTitle: 'Cuándo gotean los techos aquí',
  seasonLead: 'Después de meses de calor seco, los primeros aguaceros encuentran cada grieta. La mayoría de las goteras aparecen en mayo, y otra vez en septiembre y octubre.',
  seasonKey: { dry: 'Seco', rain: 'Lluvia', heavy: 'Lluvia más fuerte', inspect: 'Mejor momento para revisar el techo' },
  monthNames: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  monthFull: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  seasonNote: 'Marzo y abril, al final de la época seca, son el momento de revisar el techo, para que las reparaciones estén listas antes de las lluvias.',
  servicesTitle: 'Lo que hace un techador',
  services: [
    ['Encontrar y reparar goteras', 'Rastrear por dónde entra el agua de verdad, que muchas veces no es justo encima de la mancha.'],
    ['Techos de teja y de lámina', 'Tejas quebradas o corridas, láminas oxidadas, tornillos flojos y botaguas gastados.'],
    ['Impermeabilización', 'Sellar techos planos, terrazas y uniones con membranas.'],
    ['Canoas', 'Limpiar, reparar y cambiar canoas y bajantes que se rebalsan.'],
    ['Techos nuevos', 'Techos nuevos para construcciones y remodelaciones, y cambio de techos que ya cumplieron su vida útil.'],
  ],
  howTitle: 'Cómo funciona',
  how: [
    ['Cuéntenos qué pasa', 'Use el formulario o WhatsApp. Indique dónde gotea y cuándo. Ayudan las fotos de la mancha y del techo encima.'],
    ['Lo pasamos a un techador local', 'Guanacaste Roofing no es una empresa de techos. Enviamos su solicitud a un techador local asociado.'],
    ['El techador le contacta', 'Le pregunta lo que necesita saber y coordina la visita directamente con usted.'],
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    ['¿Cuándo conviene revisar el techo?', 'Al final de la época seca, en marzo o abril, para que las reparaciones estén listas antes de las lluvias.'],
    ['Solo gotea con aguaceros fuertes. ¿Se puede encontrar igual?', 'Por lo general sí. Envíe fotos de la mancha adentro y del techo encima, e indique de qué lado venía la lluvia.'],
    ['¿Puede un techador revisar la casa si está vacía?', 'Sí. Indique quién tiene acceso, o si se puede llegar al techo desde afuera.'],
    ['¿También hacen techos nuevos?', 'Sí. Describa la construcción o remodelación, el tamaño y el material que tiene en mente, y un techador le contactará.'],
  ],
  formTitle: 'Envíe su solicitud',
  formLead: 'Toma un minuto. Un techador local le contactará por WhatsApp o por teléfono.',
  orWhatsapp: '¿Prefiere escribir? Escríbanos por WhatsApp',
  footerNote: 'Guanacaste Roofing pasa las solicitudes a techadores locales asociados. No es una empresa de techos.',
  privacy: 'Privacidad',
  thanksTitle: 'Solicitud enviada',
  thanksText: 'Gracias. Su solicitud ya fue enviada, y un techador local le contactará por WhatsApp o por teléfono.',
  thanksBack: 'Volver a la página principal',
  problems: [
    { value: 'Leak', label: 'El techo tiene goteras' },
    { value: 'Tile or metal roof repair', label: 'Reparación de techo de teja o lámina' },
    { value: 'Gutters', label: 'Canoas o bajantes' },
    { value: 'Waterproofing', label: 'Impermeabilizar un techo plano o terraza' },
    { value: 'Inspection', label: 'Revisión antes de las lluvias' },
    { value: 'New roof', label: 'Techo nuevo o reemplazo' },
    { value: 'Something else', label: 'Otra cosa' },
  ],
};

export const copy: Record<Lang, typeof en> = { en, es };
