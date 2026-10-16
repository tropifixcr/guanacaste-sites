import type { Lang } from '@guanacaste/shared/contact';

export const site = 'Guanacaste AC';

export interface Symptom {
  id: string;
  key: string;
  lcd: string;
  answer: string;
}

const en = {
  pro: 'AC technician',
  title: 'AC repair from Tamarindo to Papagayo | Guanacaste AC',
  description:
    'AC blowing warm, dripping or showing an error code? Repairs, cleaning and new units from Tamarindo to Papagayo. A local AC technician contacts you, free.',
  langSwitch: { label: 'Español', href: '/es/', hreflang: 'es' },
  h1: 'AC repair and service, Tamarindo to Papagayo',
  lead: 'Press the key that matches what your unit is doing. A local AC technician will contact you. Free for you.',
  keypadLabel: 'What is your AC doing?',
  idle: 'Choose a key to see what it usually means.',
  send: 'Send to a technician',
  whatsapp: 'WhatsApp',
  whatsappText: (what: string) => `Hello, I need an AC technician. ${what}`,
  symptoms: [
    { id: 'warm', key: 'Blowing warm', lcd: 'WARM', answer: 'Usually a dirty filter or coil, low gas, or a tired outdoor unit. Salt air speeds up all three near the beach.' },
    { id: 'drip', key: 'Dripping inside', lcd: 'DRIP', answer: 'Most often a blocked drain line, which is a quick fix. Turn the unit off so the water does not damage the wall or ceiling.' },
    { id: 'off', key: "Won't turn on", lcd: 'OFF', answer: 'Check the breaker and the remote batteries first. If both are fine, a capacitor or the control board may need a technician.' },
    { id: 'error', key: 'Error code', lcd: 'E -', answer: 'Write down the code on the indoor unit and send it with your request. It tells the technician where to start.' },
    { id: 'clean', key: 'Smell or cleaning', lcd: 'CLN', answer: 'A musty smell means mold in the unit. Near the beach, most technicians suggest a deep clean every three to six months.' },
    { id: 'new', key: 'New unit', lcd: 'NEW', answer: 'Tell us the room size and how the room is used, and the technician can suggest a size and type.' },
  ] as Symptom[],
  servicesTitle: 'What a technician can do',
  services: [
    ['Repairs', 'Warm air, weak air, units that will not start, noises and error codes.'],
    ['Deep cleaning', 'Filters, coils, drain lines and the blower wheel, inside and out.'],
    ['Gas and leaks', 'Finding the leak first, then repairing it and recharging the gas.'],
    ['New units', 'Choosing the size, installing split units and replacing old ones.'],
  ],
  whyTitle: 'Why AC wears out faster here',
  why: [
    'In Guanacaste, AC runs most of the year. Near the beach, salt air corrodes the outdoor coil and its fins, and humidity lets mold grow inside units that are not cleaned.',
    'That is why a unit that cooled well last year can struggle this year, and why rentals that run AC all day need more attention than a home used part of the year.',
  ],
  intervalLabel: 'Cleaning near the beach, every',
  intervalValue: '3-6',
  intervalUnit: 'months',
  howTitle: 'How it works',
  how: [
    ['Tell us what is happening', 'Use the form or WhatsApp. Add the brand, the error code or a photo if you have one.'],
    ['We pass it to a local technician', 'Guanacaste AC is not an AC company. We send your request to a local partner AC technician.'],
    ['The technician contacts you', 'They confirm the details and arrange a visit with you directly.'],
  ],
  townsTitle: 'Where',
  townsText: 'From Playa Langosta and Tamarindo north to Flamingo, Potrero and Las Catalinas, and around Playas del Coco, Hermosa, Ocotal and Papagayo.',
  faqTitle: 'Questions owners ask',
  faqs: [
    ['How often should AC units be cleaned here?', 'Near the beach, most technicians suggest every three to six months, and more often for rentals that run the AC all day.'],
    ['My AC is dripping inside. Is it serious?', 'It is usually a blocked drain line, which is quick to fix. Turn the unit off so the water does not damage the wall or ceiling.'],
    ['What does the error code on my unit mean?', 'Each brand uses its own codes. Send the code and the brand with your request, and the technician can tell you what it points to.'],
    ['Can a technician come while I am away?', 'Yes. Say who can open the house, or whether the outdoor unit can be reached from outside.'],
    ['Can you help me choose a new unit?', 'Yes. Tell us the room size and how the room is used, and the technician will suggest a size and type.'],
  ],
  formTitle: 'Send your request',
  formLead: 'Takes a minute. A local AC technician will contact you on WhatsApp or by phone.',
  orWhatsapp: 'Prefer to write? Message us on WhatsApp',
  footerNote: 'Guanacaste AC passes requests to local partner AC technicians. It is not an AC company.',
  privacy: 'Privacy',
  thanksTitle: 'Request sent',
  thanksText: 'Thank you. Your request has been passed on, and a local AC technician will contact you on WhatsApp or by phone.',
  thanksBack: 'Back to the home page',
  problems: [
    { value: 'Blowing warm or weak air', label: 'Blowing warm or weak air' },
    { value: 'Dripping inside', label: 'Dripping inside' },
    { value: "Won't turn on", label: "Won't turn on" },
    { value: 'Error code', label: 'Showing an error code' },
    { value: 'Cleaning or bad smell', label: 'Cleaning or a bad smell' },
    { value: 'New unit or replacement', label: 'New unit or replacement' },
    { value: 'Something else', label: 'Something else' },
  ],
};

const es: typeof en = {
  pro: 'técnico de aire acondicionado',
  title: 'Aire acondicionado en Tamarindo y Coco | Guanacaste AC',
  description:
    '¿Su aire tira aire caliente, gotea o muestra un código de error? Reparación, limpieza y equipos nuevos de Tamarindo a Papagayo. Un técnico local le contacta.',
  langSwitch: { label: 'English', href: '/', hreflang: 'en' },
  h1: 'Reparación de aire acondicionado, de Tamarindo a Papagayo',
  lead: 'Toque la tecla que describe lo que hace su equipo. Un técnico local le contactará. Sin costo para usted.',
  keypadLabel: '¿Qué está haciendo su aire?',
  idle: 'Elija una tecla para ver qué suele significar.',
  send: 'Enviar a un técnico',
  whatsapp: 'WhatsApp',
  whatsappText: (what: string) => `Hola, necesito un técnico de aire acondicionado. ${what}`,
  symptoms: [
    { id: 'warm', key: 'Tira aire caliente', lcd: 'WARM', answer: 'Suele ser un filtro o serpentín sucio, falta de gas o una unidad exterior cansada. Cerca de la playa, la brisa salina acelera las tres cosas.' },
    { id: 'drip', key: 'Gotea adentro', lcd: 'DRIP', answer: 'Casi siempre es el drenaje tapado, y se arregla rápido. Apague el equipo para que el agua no dañe la pared ni el cielo raso.' },
    { id: 'off', key: 'No enciende', lcd: 'OFF', answer: 'Revise primero el breaker y las baterías del control. Si ambos están bien, puede ser un capacitor o la tarjeta.' },
    { id: 'error', key: 'Código de error', lcd: 'E -', answer: 'Anote el código que aparece en la unidad interior y envíelo con su solicitud. Le indica al técnico por dónde empezar.' },
    { id: 'clean', key: 'Olor o limpieza', lcd: 'CLN', answer: 'Un olor a humedad indica moho en el equipo. Cerca de la playa, la mayoría de los técnicos recomienda limpiarlo cada tres a seis meses.' },
    { id: 'new', key: 'Equipo nuevo', lcd: 'NEW', answer: 'Indíquenos el tamaño del cuarto y cómo se usa, y el técnico le sugerirá la capacidad y el tipo.' },
  ],
  servicesTitle: 'Lo que hace un técnico',
  services: [
    ['Reparaciones', 'Aire caliente o débil, equipos que no encienden, ruidos y códigos de error.'],
    ['Limpieza profunda', 'Filtros, serpentines, drenaje y turbina, adentro y afuera.'],
    ['Gas y fugas', 'Primero encontrar la fuga, luego repararla y recargar el gas.'],
    ['Equipos nuevos', 'Elegir la capacidad, instalar minisplits y reemplazar los viejos.'],
  ],
  whyTitle: 'Por qué el aire se desgasta más rápido aquí',
  why: [
    'En Guanacaste el aire acondicionado funciona casi todo el año. Cerca de la playa, la brisa salina corroe el serpentín exterior y sus aletas, y la humedad hace crecer moho en los equipos que no se limpian.',
    'Por eso un equipo que enfriaba bien el año pasado puede costarle este año, y por eso las casas de alquiler, con el aire encendido todo el día, necesitan más atención.',
  ],
  intervalLabel: 'Limpieza cerca de la playa, cada',
  intervalValue: '3-6',
  intervalUnit: 'meses',
  howTitle: 'Cómo funciona',
  how: [
    ['Cuéntenos qué pasa', 'Use el formulario o WhatsApp. Agregue la marca, el código de error o una foto si la tiene.'],
    ['Lo pasamos a un técnico local', 'Guanacaste AC no es una empresa de aire acondicionado. Enviamos su solicitud a un técnico local asociado.'],
    ['El técnico le contacta', 'Confirma los detalles y coordina la visita directamente con usted.'],
  ],
  townsTitle: 'Dónde',
  townsText: 'Desde Playa Langosta y Tamarindo hacia el norte hasta Flamingo, Potrero y Las Catalinas, y alrededor de Playas del Coco, Hermosa, Ocotal y Papagayo.',
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    ['¿Cada cuánto hay que limpiar el aire acondicionado aquí?', 'Cerca de la playa, la mayoría de los técnicos recomienda cada tres a seis meses, y más seguido en casas de alquiler con el aire encendido todo el día.'],
    ['Mi aire gotea adentro. ¿Es grave?', 'Casi siempre es el drenaje tapado, y se arregla rápido. Apague el equipo para que el agua no dañe la pared ni el cielo raso.'],
    ['¿Qué significa el código de error de mi equipo?', 'Cada marca usa sus propios códigos. Envíe el código y la marca con su solicitud, y el técnico le dirá qué indica.'],
    ['¿Puede venir un técnico si no estoy en la casa?', 'Sí. Indique quién puede abrir, o si la unidad exterior se alcanza desde afuera.'],
    ['¿Me pueden ayudar a elegir un equipo nuevo?', 'Sí. Indíquenos el tamaño del cuarto y cómo se usa, y el técnico le sugerirá la capacidad y el tipo.'],
  ],
  formTitle: 'Envíe su solicitud',
  formLead: 'Toma un minuto. Un técnico local le contactará por WhatsApp o por teléfono.',
  orWhatsapp: '¿Prefiere escribir? Escríbanos por WhatsApp',
  footerNote: 'Guanacaste AC pasa las solicitudes a técnicos locales asociados. No es una empresa de aire acondicionado.',
  privacy: 'Privacidad',
  thanksTitle: 'Solicitud enviada',
  thanksText: 'Gracias. Su solicitud ya fue enviada, y un técnico local le contactará por WhatsApp o por teléfono.',
  thanksBack: 'Volver a la página principal',
  problems: [
    { value: 'Blowing warm or weak air', label: 'Tira aire caliente o débil' },
    { value: 'Dripping inside', label: 'Gotea adentro' },
    { value: "Won't turn on", label: 'No enciende' },
    { value: 'Error code', label: 'Muestra un código de error' },
    { value: 'Cleaning or bad smell', label: 'Limpieza o mal olor' },
    { value: 'New unit or replacement', label: 'Equipo nuevo o reemplazo' },
    { value: 'Something else', label: 'Otra cosa' },
  ],
};

export const copy: Record<Lang, typeof en> = { en, es };
