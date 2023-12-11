import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        dark: {
            100: "#2c323e",
            200: "#2c313d",
        },
        blue: {
            50: "#c6e4fa",
            100: "#add7f5",
            200: "#aed7f5",
            300: "#84B2E7",
            400: "#448ADB",
        },
        textMode: {
            light: "#2C2C2C",
            dark: "#ffffff",
        },
    },
    styles: {
        global: (props) => ({
            ".amplify-input": {
                color: props.colorMode === "light" ? theme.colors.textMode.light : theme.colors.textMode.dark,
            },
            ".nav-link .link": {
                color: props.colorMode === "light" ? theme.colors.dark[ 200 ] : theme.colors.textMode.dark,
            },
            ".submit-btn": {
                bg: props.colorMode === "light" ? "white" : theme.colors.blue[ 200 ],
                color: props.colorMode === "light" ? "#2b6cb0" : "#1a202c",
            },
            "a#c-icon:hover": {
                color: props.colorMode === "light" ? "#363737" : "white",
                textDecoration: "none",
                "&:hover": {
                    color: theme.colors.blue[ 300 ],
                },
            },
        }),
    },
});

export default theme;
