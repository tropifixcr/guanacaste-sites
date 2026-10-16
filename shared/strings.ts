import type { Lang } from './contact';

// Form and legal copy shared by all three sites. `pro` is the trade's technician, e.g. "AC technician".
export const formText = (lang: Lang, site: string, pro: string) =>
  lang === 'en'
    ? {
        name: 'Your name',
        phone: 'WhatsApp or phone',
        phoneHint: 'Include the country code if it is not a Costa Rican number.',
        email: 'Email',
        town: 'Town',
        townPick: 'Choose a town',
        townOther: 'Somewhere else nearby',
        problem: 'What do you need?',
        details: 'Tell us more',
        detailsHint: 'What is happening, since when, and anything the technician should know about access.',
        consent: `I agree that ${site} shares my name, contact details and this request with a local ${pro} so they can contact me.`,
        privacy: 'Privacy notice',
        send: 'Send request',
        sending: 'Sending',
        free: `Free for you. A local ${pro} will contact you.`,
        error: 'Something went wrong and your request was not sent. Please try again, or write to us on WhatsApp.',
      }
    : {
        name: 'Su nombre',
        phone: 'WhatsApp o teléfono',
        phoneHint: 'Incluya el código de país si no es un número de Costa Rica.',
        email: 'Correo electrónico',
        town: 'Lugar',
        townPick: 'Elija un lugar',
        townOther: 'Otro lugar cercano',
        problem: '¿Qué necesita?',
        details: 'Cuéntenos más',
        detailsHint: 'Qué está pasando, desde cuándo y lo que el técnico deba saber para entrar.',
        consent: `Acepto que ${site} comparta mi nombre, mis datos de contacto y esta solicitud con un ${pro} local para que me contacte.`,
        privacy: 'Aviso de privacidad',
        send: 'Enviar solicitud',
        sending: 'Enviando',
        free: `Sin costo para usted. Un ${pro} local le contactará.`,
        error: 'Algo falló y su solicitud no se envió. Inténtelo de nuevo o escríbanos por WhatsApp.',
      };
