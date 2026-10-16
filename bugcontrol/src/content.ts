import type { Lang } from '@guanacaste/shared/contact';

export const site = 'Guanacaste Bug Control';

export interface Pest {
  id: string;
  name: string;
  latin: string;
  signs: string;
  urgency: string;
  work: string;
  problem: string;
}

const en = {
  pro: 'pest control technician',
  title: 'Pest control from Tamarindo to Papagayo | Guanacaste Bug Control',
  description:
    'Termites, ants, scorpions, cockroaches, rodents or mosquitoes from Tamarindo to Papagayo. Tell us what you found and a local pest technician contacts you.',
  langSwitch: { label: 'Español', href: '/es/', hreflang: 'es' },
  h1: 'Pest control, Tamarindo to Papagayo',
  lead: 'Find what you saw on the plate. A local pest control technician will contact you. Free for you.',
  plateTitle: 'Household pests of coastal Guanacaste',
  plateHint: 'Tap the one you found',
  placeholder: 'Illustration to come',
  report: 'Report what you found',
  reportThis: 'Report this',
  whatsapp: 'WhatsApp',
  whatsappText: (what: string) => `Hello, I need a pest control technician. ${what}`,
  labels: { signs: 'Signs', urgency: 'How urgent', work: 'What the technician does' },
  guideTitle: 'Know what you are dealing with',
  guideLead: 'In a dry tropical forest, insects come with the territory. These are the ones owners call about most.',
  pests: [
    {
      id: 'termites', name: 'Termites', latin: 'Nasutitermes, Cryptotermes', problem: 'Termites',
      signs: 'Thin mud tubes on walls or beams, wood that sounds hollow, small piles of droppings like sand or sawdust, and loose wings on windowsills after the first rains.',
      urgency: 'Not an emergency tonight, but do not wait: termites can damage wood for months before anything shows.',
      work: 'An inspection to find how far they have gone, then treatment of the colony and the affected wood.',
    },
    {
      id: 'ants', name: 'Ants', latin: 'Solenopsis and others', problem: 'Ants',
      signs: 'Trails across the kitchen, nests inside walls or plant pots, and fire ant mounds in the lawn.',
      urgency: 'Fire ants sting. Treat them soon when they are inside or where children and pets play.',
      work: 'Finding the nest and treating it, rather than only spraying the trail.',
    },
    {
      id: 'cockroaches', name: 'Cockroaches', latin: 'Periplaneta americana', problem: 'Cockroaches',
      signs: 'Seen at night in kitchens and bathrooms, and droppings like ground pepper in cabinets.',
      urgency: 'Worth treating before guests notice, especially in a rental.',
      work: 'Bait and treatment of the places they hide, and a schedule for rentals.',
    },
    {
      id: 'scorpions', name: 'Scorpions', latin: 'Centruroides', problem: 'Scorpions or spiders',
      signs: 'In shoes, towels, bathrooms and under furniture, often more at the start of the rains.',
      urgency: 'Stings are painful. If someone is stung and feels unwell, get medical help first.',
      work: 'Treatment around the house and its entry points, and advice on gaps to seal.',
    },
    {
      id: 'rodents', name: 'Rodents and bats', latin: 'Rattus rattus, Chiroptera', problem: 'Rodents or bats',
      signs: 'Droppings, gnawed food or cables, and noises in the ceiling at night.',
      urgency: 'Deal with it soon: droppings and gnawed wiring are a health and fire risk.',
      work: 'Finding how they get in and closing the entry points. Bats are moved out by closing the gaps once they have left at night.',
    },
    {
      id: 'geckos', name: 'Geckos', latin: 'Hemidactylus frenatus', problem: 'Geckos',
      signs: 'Chirping at night, small dark droppings with a white tip on walls, floors and window ledges, and geckos gathered around outdoor lights.',
      urgency: 'Harmless to people, and they eat insects, but the droppings stain walls and bother guests.',
      work: 'Treating the insects that draw them to the lights, and closing gaps around doors, windows and the roof so they stay outside.',
    },
    {
      id: 'mosquitoes', name: 'Mosquitoes', latin: 'Aedes aegypti', problem: 'Mosquitoes',
      signs: 'Bites at dusk and in the morning, and standing water in plant pots, gutters, tires or tank lids.',
      urgency: 'Act early in the rainy season, when they breed fastest.',
      work: 'Treating the places they breed and fogging around the garden. Emptying standing water every week helps between visits.',
    },
  ] as Pest[],
  howTitle: 'How it works',
  how: [
    ['Tell us what you found', 'Use the form or WhatsApp. Say where you see it and since when. A photo helps.'],
    ['We pass it to a local technician', 'Guanacaste Bug Control is not a pest control company. We send your request to a local partner technician.'],
    ['The technician contacts you', 'They ask what they need to know and arrange a visit with you directly.'],
  ],
  townsTitle: 'Where',
  townsText: 'From Playa Langosta and Tamarindo north to Flamingo, Potrero and Las Catalinas, and around Playas del Coco, Hermosa, Ocotal and Papagayo.',
  faqTitle: 'Questions owners ask',
  faqs: [
    ['How do I know if I have termites?', 'Look for thin mud tubes on walls, hollow-sounding wood or small piles of what looks like sand or sawdust. Send photos with your request.'],
    ['Are treatments safe for children and pets?', 'Tell us who lives in the house, including pets. The technician will explain what they use and how long to stay out of treated rooms.'],
    ['Do I need regular treatments?', 'Many homes here are treated every few months. The technician can suggest a schedule after an inspection.'],
    ['Can the house be treated while I am away?', 'Yes. Say who can open the house and when guests are due, so the visit fits between stays.'],
  ],
  formTitle: 'Report what you found',
  formLead: 'Takes a minute. A local pest control technician will contact you on WhatsApp or by phone.',
  orWhatsapp: 'Prefer to write? Message us on WhatsApp',
  footerNote: 'Guanacaste Bug Control passes requests to local partner pest control technicians. It is not a pest control company.',
  privacy: 'Privacy',
  thanksTitle: 'Report received',
  thanksText: 'Thank you. Your request has been passed on, and a local pest control technician will contact you on WhatsApp or by phone.',
  thanksBack: 'Back to the home page',
  problems: [
    { value: 'Termites', label: 'Termites' },
    { value: 'Ants', label: 'Ants' },
    { value: 'Cockroaches', label: 'Cockroaches' },
    { value: 'Scorpions or spiders', label: 'Scorpions or spiders' },
    { value: 'Rodents or bats', label: 'Rodents or bats' },
    { value: 'Geckos', label: 'Geckos' },
    { value: 'Mosquitoes', label: 'Mosquitoes' },
    { value: 'Regular preventive treatment', label: 'Regular preventive treatment' },
    { value: 'Something else', label: 'Something else' },
  ],
};

const es: typeof en = {
  pro: 'técnico en control de plagas',
  title: 'Control de plagas en Tamarindo y Coco | Guanacaste Bug Control',
  description:
    'Termitas, hormigas, escorpiones, cucarachas, roedores o zancudos de Tamarindo a Papagayo. Cuéntenos qué encontró y un técnico local le contacta.',
  langSwitch: { label: 'English', href: '/', hreflang: 'en' },
  h1: 'Control de plagas, de Tamarindo a Papagayo',
  lead: 'Busque en la lámina lo que encontró. Un técnico local en control de plagas le contactará. Sin costo para usted.',
  plateTitle: 'Plagas comunes en las casas de la costa de Guanacaste',
  plateHint: 'Toque la que encontró',
  placeholder: 'Ilustración pendiente',
  report: 'Reportar lo que encontró',
  reportThis: 'Reportar esta plaga',
  whatsapp: 'WhatsApp',
  whatsappText: (what: string) => `Hola, necesito un técnico en control de plagas. ${what}`,
  labels: { signs: 'Señales', urgency: 'Qué tan urgente', work: 'Lo que hace el técnico' },
  guideTitle: 'Sepa a qué se enfrenta',
  guideLead: 'En un bosque seco tropical, los insectos son parte del paisaje. Estas son las plagas por las que más consultan los propietarios.',
  pests: [
    {
      id: 'termites', name: 'Termitas', latin: 'Nasutitermes, Cryptotermes', problem: 'Termites',
      signs: 'Túneles finos de barro en paredes o vigas, madera que suena hueca, montoncitos de excremento parecido a arena o aserrín, y alas sueltas en las ventanas después de las primeras lluvias.',
      urgency: 'No es una emergencia para esta noche, pero no espere: las termitas pueden dañar la madera durante meses antes de que se note.',
      work: 'Una inspección para ver hasta dónde llegaron, y luego el tratamiento de la colonia y de la madera afectada.',
    },
    {
      id: 'ants', name: 'Hormigas', latin: 'Solenopsis y otras', problem: 'Ants',
      signs: 'Caminos de hormigas en la cocina, nidos dentro de paredes o macetas, y montículos de hormiga brava en el zacate.',
      urgency: 'La hormiga brava pica. Trátela pronto si está adentro o donde juegan niños y mascotas.',
      work: 'Encontrar el nido y tratarlo, en lugar de solo rociar el camino.',
    },
    {
      id: 'cockroaches', name: 'Cucarachas', latin: 'Periplaneta americana', problem: 'Cockroaches',
      signs: 'Aparecen de noche en cocinas y baños, y dejan excremento parecido a pimienta molida en los gabinetes.',
      urgency: 'Conviene tratarlas antes de que lo noten los huéspedes, sobre todo en una casa de alquiler.',
      work: 'Cebos y tratamiento de los lugares donde se esconden, y un calendario para casas de alquiler.',
    },
    {
      id: 'scorpions', name: 'Escorpiones', latin: 'Centruroides', problem: 'Scorpions or spiders',
      signs: 'En zapatos, toallas, baños y debajo de los muebles, con frecuencia más al inicio de las lluvias.',
      urgency: 'La picadura es dolorosa. Si alguien es picado y se siente mal, busque atención médica primero.',
      work: 'Tratamiento alrededor de la casa y de sus entradas, y consejos sobre las rendijas que conviene sellar.',
    },
    {
      id: 'rodents', name: 'Roedores y murciélagos', latin: 'Rattus rattus, Chiroptera', problem: 'Rodents or bats',
      signs: 'Excremento, comida o cables mordidos, y ruidos en el cielo raso por la noche.',
      urgency: 'Atiéndalo pronto: el excremento y los cables mordidos son un riesgo para la salud y de incendio.',
      work: 'Encontrar por dónde entran y cerrar esas entradas. Los murciélagos se sacan cerrando las aberturas cuando han salido de noche.',
    },
    {
      id: 'geckos', name: 'Geckos', latin: 'Hemidactylus frenatus', problem: 'Geckos',
      signs: 'Su canto de noche, excrementos pequeños y oscuros con una punta blanca en paredes, pisos y ventanas, y geckos reunidos alrededor de las luces exteriores.',
      urgency: 'No son peligrosos para las personas y comen insectos, pero el excremento mancha las paredes y molesta a los huéspedes.',
      work: 'Tratar los insectos que los atraen a las luces y cerrar las rendijas en puertas, ventanas y techo para que se queden afuera.',
    },
    {
      id: 'mosquitoes', name: 'Zancudos', latin: 'Aedes aegypti', problem: 'Mosquitoes',
      signs: 'Picaduras al atardecer y en la mañana, y agua estancada en macetas, canoas, llantas o tapas de tanques.',
      urgency: 'Actúe temprano en la época lluviosa, cuando se reproducen más rápido.',
      work: 'Tratar los lugares donde se crían y fumigar alrededor del jardín. Vaciar el agua estancada cada semana ayuda entre visitas.',
    },
  ],
  howTitle: 'Cómo funciona',
  how: [
    ['Cuéntenos qué encontró', 'Use el formulario o WhatsApp. Indique dónde lo ve y desde cuándo. Una foto ayuda.'],
    ['Lo pasamos a un técnico local', 'Guanacaste Bug Control no es una empresa de control de plagas. Enviamos su solicitud a un técnico local asociado.'],
    ['El técnico le contacta', 'Le pregunta lo que necesita saber y coordina la visita directamente con usted.'],
  ],
  townsTitle: 'Dónde',
  townsText: 'Desde Playa Langosta y Tamarindo hacia el norte hasta Flamingo, Potrero y Las Catalinas, y alrededor de Playas del Coco, Hermosa, Ocotal y Papagayo.',
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    ['¿Cómo sé si tengo termitas?', 'Busque túneles finos de barro en las paredes, madera que suena hueca o montoncitos de algo parecido a arena o aserrín. Envíe fotos con su solicitud.'],
    ['¿Los tratamientos son seguros para niños y mascotas?', 'Indíquenos quién vive en la casa, incluidas las mascotas. El técnico le explicará qué productos usa y cuánto tiempo mantenerse fuera de los cuartos tratados.'],
    ['¿Necesito tratamientos regulares?', 'Muchas casas aquí se tratan cada pocos meses. El técnico puede sugerirle un calendario después de una inspección.'],
    ['¿Se puede tratar la casa mientras no estoy?', 'Sí. Indique quién puede abrir y cuándo llegan los próximos huéspedes, para que la visita quede entre estadías.'],
  ],
  formTitle: 'Reporte lo que encontró',
  formLead: 'Toma un minuto. Un técnico local en control de plagas le contactará por WhatsApp o por teléfono.',
  orWhatsapp: '¿Prefiere escribir? Escríbanos por WhatsApp',
  footerNote: 'Guanacaste Bug Control pasa las solicitudes a técnicos locales asociados en control de plagas. No es una empresa de control de plagas.',
  privacy: 'Privacidad',
  thanksTitle: 'Reporte recibido',
  thanksText: 'Gracias. Su solicitud ya fue enviada, y un técnico local en control de plagas le contactará por WhatsApp o por teléfono.',
  thanksBack: 'Volver a la página principal',
  problems: [
    { value: 'Termites', label: 'Termitas' },
    { value: 'Ants', label: 'Hormigas' },
    { value: 'Cockroaches', label: 'Cucarachas' },
    { value: 'Scorpions or spiders', label: 'Escorpiones o arañas' },
    { value: 'Rodents or bats', label: 'Roedores o murciélagos' },
    { value: 'Geckos', label: 'Geckos' },
    { value: 'Mosquitoes', label: 'Zancudos' },
    { value: 'Regular preventive treatment', label: 'Tratamiento preventivo regular' },
    { value: 'Something else', label: 'Otra cosa' },
  ],
};

export const copy: Record<Lang, typeof en> = { en, es };
