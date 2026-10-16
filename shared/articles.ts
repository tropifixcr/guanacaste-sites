import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Articles built from JP's Drive docs, one Markdown file per article and language:
// src/content/articles/en/<slug>.md and src/content/articles/es/<slug>.md
export const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    date: z.coerce.date(),
    /** Slug of the same article in the other language, if it exists. */
    translation: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const articleText = (lang: 'en' | 'es', site: string) =>
  lang === 'en'
    ? {
        nav: 'Articles',
        title: `Articles | ${site}`,
        h1: 'Articles',
        description: `Plain answers for owners in Guanacaste, from ${site}.`,
        empty: 'The first articles are on their way. Until then, ask us anything through the form or on WhatsApp.',
        emptyLink: 'Send a request',
        back: 'All articles',
        ctaTitle: 'Need a hand with this?',
        ctaText: (pro: string) => `Tell us what is happening and a local ${pro} will contact you. Free for you.`,
        ctaSend: 'Send a request',
        date: (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }),
      }
    : {
        nav: 'Artículos',
        title: `Artículos | ${site}`,
        h1: 'Artículos',
        description: `Respuestas claras para propietarios en Guanacaste, de ${site}.`,
        empty: 'Los primeros artículos vienen en camino. Mientras tanto, escríbanos por el formulario o por WhatsApp.',
        emptyLink: 'Enviar una solicitud',
        back: 'Todos los artículos',
        ctaTitle: '¿Necesita ayuda con esto?',
        ctaText: (pro: string) => `Cuéntenos qué pasa y un ${pro} local le contactará. Sin costo para usted.`,
        ctaSend: 'Enviar una solicitud',
        date: (d: Date) => d.toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }),
      };
