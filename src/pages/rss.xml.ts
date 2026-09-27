import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { byUpdated, getNotes } from '../lib/notes';

export const GET: APIRoute = async ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const notes = (await getNotes()).sort(byUpdated);
  const origin = site ?? new URL('https://ydah.github.io');
  const siteUrl = new URL(`${base}/`, origin);

  return rss({
    title: 'Brewnotes',
    description: 'ビールと醸造に関する知識や情報',
    site: siteUrl,
    items: notes.map((note) => ({
      title: note.title,
      link: new URL(`${base}/${note.slug}/`, origin).href,
      ...(note.updated || note.created ? { pubDate: note.updated ?? note.created } : {}),
    })),
  });
};
