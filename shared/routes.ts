
import { z } from 'zod';
import { films, fiction } from './schema';

export const api = {
  films: {
    list: {
      method: 'GET' as const,
      path: '/api/films',
      responses: {
        200: z.array(z.custom<typeof films.$inferSelect>()),
      },
    },
  },
  fiction: {
    list: {
      method: 'GET' as const,
      path: '/api/fiction',
      responses: {
        200: z.array(z.custom<typeof fiction.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
