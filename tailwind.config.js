module.exports = {
  content: [ "./app.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
