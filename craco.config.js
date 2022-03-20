module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  jest: {
    configure: {
      setupFilesAfterEnv: "./src/setupTests.js"
    },
  },
}
