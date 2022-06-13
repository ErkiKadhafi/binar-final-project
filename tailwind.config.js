module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                primary: {
                    purple05: "#4B1979",
                    purple04: "#7126B5",
                    purple03: "#A06ECE",
                    purple02: "#D0B7E6",
                    purple01: "#E2D4F0",

                    cream05: "#AA9B87",
                    cream04: "#D4C2A8",
                    cream03: "#FFE9CA",
                    cream02: "#FFF0DC",
                    cream01: "#FFF8ED"

                },
                allert: {
                    danger: "#FA2C5A",
                    warning: "#F9CC00",
                    succes: "#73CA5C"
                },
                neutral:{
                    neutral05: "#151515",
                    neutral04: "#3C3C3C",
                    neutral03: "#8A8A8A",
                    neutral02: "#D0D0D0",
                    neutral01: "#FFFFFF"
                },
            },
        },
    },
    plugins: [],
};
