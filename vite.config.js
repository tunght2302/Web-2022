// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, './Lab3/Lab3_1.html'), 
        products: resolve(__dirname, './Lab3/Lab3_2.html'),
        about: resolve(__dirname, './Lab3/Lab3_3.html')
      }
    }
  }
})