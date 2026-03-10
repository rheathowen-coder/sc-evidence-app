import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SC Rules of Evidence',
    short_name: 'SC Evidence',
    description: 'South Carolina Rules of Evidence quick-reference app.',
    start_url: '/',
    display: 'standalone',
    background_color: '#071433',
    theme_color: '#071433',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
