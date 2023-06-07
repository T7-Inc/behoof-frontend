module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                "cool-gray": {
                  900: "#2f2f2f",
                },
            }
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('flowbite/plugin'),
    ],
};
