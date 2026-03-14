import { defineConfig } from 'vite';

export default defineConfig({
  base: '/tampabaypac/',
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        projects: 'projects.html',
        artists: 'artists.html',
        opportunities: 'opportunities.html',
        getInvolved: 'get-involved.html',
        contact: 'contact.html',
      }
    }
  }
});
