/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2EDE3',
        ink: '#1A1714',
        'ink-mid': '#6A6058',
        'ink-faint': '#B5ADA3',
        rule: 'rgba(26, 23, 20, 0.09)',
        'rule-strong': 'rgba(26, 23, 20, 0.18)',
        'pi-green': '#4CAF50',
      },
      fontFamily: {
        display: ["'Fraunces'", 'Georgia', 'serif'],
        body: ["'Instrument Serif'", 'Georgia', 'serif'],
        mono: ["'DM Mono'", "'Courier New'", 'monospace'],
      },
      maxWidth: {
        doc: '640px',
      },
    },
  },
  plugins: [],
}
