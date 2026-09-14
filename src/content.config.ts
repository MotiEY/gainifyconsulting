import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.date(),
    dateModified: z.date().optional(),
    author: z.string().optional(),
    authorBio: z.string().optional(),
    slug: z.string().optional(),
    topics: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    sources: z.array(z.string()).default([]),
    cta: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string().optional(),
    quote: z.string(),
    photo: z.string().optional(),
  }),
});

export const collections = { blog, testimonials };
