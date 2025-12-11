import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'X0mnYqzB7iQbkcEJT5bSQgtt',
      components: {
        page: 'storyblok/Page',
        teaser: 'storyblok/Teaser',
        grid: 'storyblok/Grid',
        feature: 'storyblok/Feature',
        hero: 'storyblok/Hero',
        slider: 'storyblok/Slider',    // NEU
        slide: 'storyblok/Slide',      // NEU
}
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