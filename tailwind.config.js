/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#059669',
                    hover: '#047857',
                },
                secondary: '#1e293b',
                accent: '#f59e0b',
                gray: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    900: '#0f172a',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['DM Sans', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'cell-ripple': 'cell-ripple var(--duration) ease-out var(--delay)',
                'scroll-left': 'scroll-left 40s linear infinite',
                'scroll-right': 'scroll-right 40s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'cell-ripple': {
                    '0%': {
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        transform: 'scale(1)',
                        opacity: '0.6',
                    },
                    '50%': {
                        backgroundColor: 'rgba(16, 185, 129, 0.25)',
                        transform: 'scale(1.05)',
                        opacity: '0.8',
                    },
                    '100%': {
                        backgroundColor: 'var(--cell-fill-color)',
                        transform: 'scale(1)',
                        opacity: '0.4',
                    },
                },
                'scroll-left': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                'scroll-right': {
                    from: { transform: 'translateX(-50%)' },
                    to: { transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
}
