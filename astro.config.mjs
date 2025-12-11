import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN || 'KzHPMPvYvT8ua7whrtQM9Qtt',  // <-- GEÄNDERT
      components: {
        page: 'storyblok/Page',
        teaser: 'storyblok/Teaser',
        grid: 'storyblok/Grid',
        feature: 'storyblok/Feature',
        hero: 'storyblok/Hero',
        slider: 'storyblok/Slider',
        slide: 'storyblok/Slide',
      },
      apiOptions: {
        region: '' 
      }
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});