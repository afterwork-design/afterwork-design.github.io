import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },
    colors: {
        brand: {
            50: "#f8f4ee",
            100: "#ece1d3",
            200: "#ddc7ae",
            300: "#cda985",
            400: "#bd9061",
            500: "#a97847",
            600: "#855b35",
            700: "#624127",
            800: "#412b1a",
            900: "#23160d"
        },
        ink: {
            50: "#f7f7f5",
            100: "#ecebe7",
            200: "#d6d3cc",
            300: "#b8b2a9",
            400: "#8f887d",
            500: "#676055",
            600: "#4d473f",
            700: "#37322c",
            800: "#24211e",
            900: "#151412"
        }
    },
    fonts: {
        heading: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Georgia, serif",
        body: "'Avenir Next', 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif"
    },
    styles: {
        global: {
            body: {
                color: "ink.800",
                bg: "#f8f5f0"
            },
            "::selection": {
                bg: "brand.200",
                color: "ink.900"
            }
        }
    },
    radii: {
        panel: "8px"
    },
    components: {
        Container: {
            baseStyle: {
                maxW: "1200px",
                px: {base: 6, md: 8}
            }
        },
        Link: {
            baseStyle: {
                color: "inherit",
                textDecoration: "none",
                transition: "all 0.2s ease"
            }
        },
        Button: {
            baseStyle: {
                fontWeight: 500,
                borderRadius: "6px"
            },
            variants: {
                solid: {
                    bg: "ink.900",
                    color: "white",
                    _hover: {
                        bg: "ink.700"
                    }
                },
                ghost: {
                    color: "ink.700",
                    _hover: {
                        bg: "whiteAlpha.700"
                    }
                },
                outline: {
                    borderColor: "rgba(38, 31, 22, 0.16)",
                    color: "ink.800",
                    _hover: {
                        bg: "white",
                        borderColor: "rgba(38, 31, 22, 0.28)"
                    }
                }
            }
        },
        Heading: {
            baseStyle: {
                color: "ink.900",
                fontWeight: 600,
                letterSpacing: "-0.03em"
            }
        }
    }
});

export default theme;

