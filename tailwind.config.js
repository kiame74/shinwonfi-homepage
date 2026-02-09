/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2CAE69",
                secondary: "#222222",
                accent: "#F0F9F4",
            },
            fontFamily: {
                nanum: ["var(--font-nanum)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
