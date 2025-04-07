module.exports = {
    content: [
        "./src/**/*.{html,js}", // Now looks in src directory
        "./src/index.html"       // Explicitly include index.html
    ],
    darkMode: 'class', // Optional: for dark mode support
    theme: {
        extend: {},
    },
    plugins: [],
}