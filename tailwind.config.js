/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores da marca Bella Joias (extraídas da logo)
        'brand': {
          'primary': '#c43484',      // Rosa/magenta principal (escolha da cliente)
          'secondary': '#d1b273',     // Dourado/bege secundário
          'accent1': '#a8865b',      // Marrom dourado
          'accent2': '#f1e39b',      // Amarelo claro
          'accent3': '#bc3484',      // Rosa escuro
          'accent4': '#dc4898',      // Rosa claro
        },
        // Cores neutras e utilitárias
        'light-gray': '#f5f5f5',
        'medium-gray': '#e0e0e0',
        'dark-gray': '#333333',
        'text-secondary': '#666666',
        'text-light': '#999999',
        // Mantendo compatibilidade com código existente
        'dark-green': '#c43484',     // Mapeado para brand-primary (rosa/magenta)
        'light-beige': '#f1e39b',    // Mapeado para brand-accent2
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        'small': '0 1px 3px rgba(0,0,0,0.1)',
        'medium': '0 2px 8px rgba(0,0,0,0.1)',
        'large': '0 4px 12px rgba(0,0,0,0.15)',
      },
      maxWidth: {
        'container': '1400px',
      },
    },
  },
  plugins: [],
}

