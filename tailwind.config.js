/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                Inter: ["Inter", "sans-serif"],
                Encode: ["Encode Sans", "sans-serif"],
                Segoe: ["Segoe UI", "sans-serif"],
            },
        },
    },
    plugins: [require("daisyui")],
};
