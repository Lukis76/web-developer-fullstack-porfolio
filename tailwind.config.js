/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            aria: {
                invalid: 'aria-invalid="true"',
                valid: 'aria-invalid="false"',
                developing: 'aria-developing="true"',
            },
            colors: {
                primary: '#6C63FF',
            },
            keyframes: {
                radiusMorph: {
                    '0%': { borderRadius: '56% 44% 42% 58% / 51% 55% 45% 49%' },
                    '25%': { borderRadius: '41% 59% 36% 64% / 61% 55% 45% 39%' },
                    '50%': { borderRadius: '59% 41% 53% 47% / 46% 48% 52% 54%' },
                    '75%': { borderRadius: '49% 51% 38% 62% / 58% 51% 49% 42%' },
                    '100%': { borderRadius: '56% 44% 42% 58% / 51% 55% 45% 49%' },
                },
            },
            animation: {
                radiusMorph: 'radiusMorph 6s infinite',
            },
            dropShadow: {
                '3xl': '0 5px 5px rgba(0, 0, 0, 0.5)',
            },
        },
    },
    plugins: [],
}
