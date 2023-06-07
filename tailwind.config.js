module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'cool-gray': '#6B7280',
                // blue: '#3F83F8',
            },
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('flowbite/plugin'),
    ],
};
