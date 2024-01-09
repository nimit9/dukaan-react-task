/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                link: {
                    DEFAULT: '#449aff',
                },
                primary: {
                    DEFAULT: '#1f2740',
                    light: '#353a53',
                },
                error: {
                    DEFAULT: '#ff3333',
                },
                text: {
                    white: {
                        primary: {
                            DEFAULT: '#fff',
                        },
                        secondary: {
                            DEFAULT: '#d3d4d8',
                        },
                    },
                    primary: {
                        DEFAULT: '#1a181e',
                        dark: '#FFFFFF',
                    },
                    secondary: {
                        DEFAULT: '#4d4d4c',
                        dark: '#FFFFFF',
                    },
                },
            },
            animation: {
                progress: 'progress 1s infinite linear',
            },
            keyframes: {
                progress: {
                    '0%': { transform: ' translateX(0) scaleX(0)' },
                    '40%': { transform: 'translateX(0) scaleX(0.4)' },
                    '100%': { transform: 'translateX(100%) scaleX(0.5)' },
                },
            },
            transformOrigin: {
                'left-right': '0% 50%',
            },
            screens: {
                mb: { max: '730px' },
                tb: { max: '1000px' },
            },
        },
    },

    plugins: [],
};
