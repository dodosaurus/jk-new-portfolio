import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jozef Kováč - QA Engineer & Test Automation Specialist',
    short_name: 'Jozef Kováč',
    description: 'Personal portfolio of Jozef Kováč, QA Engineer with expertise in test automation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
} 