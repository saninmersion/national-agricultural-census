const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
    purge: [
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/assets/**/*.vue",
    ],
    presets: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            xlg: "992px",
            lg: "1024px",
            xl: "1200px",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",

            primary: {
                DEFAULT: "var(--color-primary)",
                50: "#80CBA1",
                100: "#72C596",
                200: "#55B981",
                300: "#43A26D",
                400: "#378559",
                500: "#2B6846",
                600: "#1B402B",
                700: "#0A1911",
                800: "#000000",
                900: "#000000",
            },
            black: {
                DEFAULT: "#5C6265",
                100: "#2E3133",
                200: "#8B9498",
            },
            gray: {
                DEFAULT: "#FAFDFF",
                100: "#F9F9F9",
                200: "#F1FAFE",
            },
            blue: {
                100: "#F1FAFE",
                200: "#B9C5CA",
            },
            danger: {
                50: "var(--color-warning)",
                100: "var(--bg-warning)",
            },
            secondary: colors.black,
            tertiary: colors.purple,
            white: colors.white,
            red: colors.red,
            warning: colors.yellow,
            success: colors.green,
            info: colors.blue,
        },
        spacing: {
            px: "1px",
            0: "0px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem",
        },
        animation: {
            none: "none",
            spin: "spin 1s linear infinite",
            ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
            pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            bounce: "bounce 1s infinite",
        },
        backgroundColor: (theme) => theme("colors"),
        backgroundImage: {
            none: "none",
            "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
            "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
            "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
            "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
            "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
            "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
            "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
            "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))",
        },
        backgroundOpacity: (theme) => theme("opacity"),
        backgroundPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top",
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
        },
        borderColor: (theme) => ({
            ...theme("colors"),
            DEFAULT: theme("colors.gray.200", "currentColor"),
        }),
        borderOpacity: (theme) => theme("opacity"),
        borderRadius: {
            none: "0px",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px",
        },
        borderWidth: {
            DEFAULT: "1px",
            0: "0px",
            2: "2px",
            4: "4px",
            8: "8px",
        },
        boxShadow: {
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            DEFAULT: "0 2px 4px 0 rgba(var(--color-base-2-rgb), .24)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            none: "none",
        },
        container: {},
        cursor: {
            auto: "auto",
            default: "default",
            pointer: "pointer",
            wait: "wait",
            text: "text",
            move: "move",
            "not-allowed": "not-allowed",
        },
        divideColor: (theme) => theme("borderColor"),
        divideOpacity: (theme) => theme("borderOpacity"),
        divideWidth: (theme) => theme("borderWidth"),
        fill: { current: "currentColor" },
        flex: {
            1: "1 1 0%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            none: "none",
        },
        flexGrow: {
            0: "0",
            DEFAULT: "1",
        },
        flexShrink: {
            0: "0",
            DEFAULT: "1",
        },
        fontFamily: {
            sans: [
                "Baloo 2",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "\"Segoe UI\"",
                "Roboto",
                "\"Helvetica Neue\"",
                "Arial",
                "\"Noto Sans\"",
                "sans-serif",
                "\"Apple Color Emoji\"",
                "\"Segoe UI Emoji\"",
                "\"Segoe UI Symbol\"",
                "\"Noto Color Emoji\"",
            ],
            serif: ["cursive", "Georgia", "Cambria", "\"Times New Roman\"", "Times", "serif"],
            mono: [
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                "\"Liberation Mono\"",
                "\"Courier New\"",
                "monospace",
            ],
        },
        fontSize: {
            xs: ["0.75rem", { lineHeight: "1rem" }],
            sm: ["0.875rem", { lineHeight: "1.25rem" }],
            base: ["1rem", { lineHeight: "1.5rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "1.75rem" }],
            "2xl": ["1.5rem", { lineHeight: "2rem" }],
            "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
            "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            "5xl": ["3rem", { lineHeight: "1" }],
            "6xl": ["3.75rem", { lineHeight: "1" }],
            "7xl": ["4.5rem", { lineHeight: "1" }],
            "8xl": ["6rem", { lineHeight: "1" }],
            "9xl": ["8rem", { lineHeight: "1" }],
        },
        fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
        },
        gap: (theme) => theme("spacing"),
        gradientColorStops: (theme) => theme("colors"),
        gridAutoColumns: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)",
        },
        gridAutoRows: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)",
        },
        gridColumn: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-7": "span 7 / span 7",
            "span-8": "span 8 / span 8",
            "span-9": "span 9 / span 9",
            "span-10": "span 10 / span 10",
            "span-11": "span 11 / span 11",
            "span-12": "span 12 / span 12",
            "span-full": "1 / -1",
        },
        gridColumnEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13",
        },
        gridColumnStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13",
        },
        gridRow: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-full": "1 / -1",
        },
        gridRowStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
        },
        gridRowEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
        },
        transformOrigin: {
            center: "center",
            top: "top",
            "top-right": "top right",
            right: "right",
            "bottom-right": "bottom right",
            bottom: "bottom",
            "bottom-left": "bottom left",
            left: "left",
            "top-left": "top left",
        },
        gridTemplateColumns: {
            none: "none",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
            7: "repeat(7, minmax(0, 1fr))",
            8: "repeat(8, minmax(0, 1fr))",
            9: "repeat(9, minmax(0, 1fr))",
            10: "repeat(10, minmax(0, 1fr))",
            11: "repeat(11, minmax(0, 1fr))",
            12: "repeat(12, minmax(0, 1fr))",
        },
        gridTemplateRows: {
            none: "none",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
        },
        height: (theme) => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
        }),
        inset: (theme, { negative }) => ({
            auto: "auto",
            ...theme("spacing"),
            ...negative(theme("spacing")),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            "-1/2": "-50%",
            "-1/3": "-33.333333%",
            "-2/3": "-66.666667%",
            "-1/4": "-25%",
            "-2/4": "-50%",
            "-3/4": "-75%",
            "-full": "-100%",
        }),
        keyframes: {
            spin: {
                to: {
                    transform: "rotate(360deg)",
                },
            },
            ping: {
                "75%, 100%": {
                    transform: "scale(2)",
                    opacity: "0",
                },
            },
            pulse: {
                "50%": {
                    opacity: ".5",
                },
            },
            bounce: {
                "0%, 100%": {
                    transform: "translateY(-25%)",
                    animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
                },
                "50%": {
                    transform: "none",
                    animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
                },
            },
        },
        letterSpacing: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0em",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em",
        },
        lineHeight: {
            none: "1",
            tight: "1.25",
            snug: "1.375",
            normal: "1.5",
            relaxed: "1.625",
            loose: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
        },
        listStyleType: {
            none: "none",
            disc: "disc",
            decimal: "decimal",
        },
        margin: (theme, { negative }) => ({
            auto: "auto",
            ...theme("spacing"),
            ...negative(theme("spacing")),
        }),
        maxHeight: (theme) => ({
            ...theme("spacing"),
            full: "100%",
            screen: "100vh",
        }),
        maxWidth: (theme, { breakpoints }) => ({
            none: "none",
            0: "0rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            prose: "65ch",
            ...breakpoints(theme("screens")),
        }),
        minHeight: {
            0: "0px",
            full: "100%",
            screen: "100vh",
        },
        minWidth: {
            0: "0px",
            full: "100%",
            min: "min-content",
            max: "max-content",
        },
        objectPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top",
        },
        opacity: {
            0: "0",
            5: "0.05",
            10: "0.1",
            20: "0.2",
            25: "0.25",
            30: "0.3",
            40: "0.4",
            50: "0.5",
            60: "0.6",
            70: "0.7",
            75: "0.75",
            80: "0.8",
            90: "0.9",
            95: "0.95",
            100: "1",
        },
        order: {
            first: "-9999",
            last: "9999",
            none: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
        },
        outline: {
            none: ["2px solid transparent", "2px"],
            white: ["2px dotted white", "2px"],
            black: ["2px dotted black", "2px"],
        },
        padding: (theme) => theme("spacing"),
        placeholderColor: (theme) => theme("colors"),
        placeholderOpacity: (theme) => theme("opacity"),
        ringColor: (theme) => ({
            DEFAULT: theme("colors.blue.500", "#3b82f6"),
            ...theme("colors"),
        }),
        ringOffsetColor: (theme) => theme("colors"),
        ringOffsetWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px",
        },
        ringOpacity: (theme) => ({
            DEFAULT: "0.5",
            ...theme("opacity"),
        }),
        ringWidth: {
            DEFAULT: "3px",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px",
        },
        rotate: {
            "-180": "-180deg",
            "-90": "-90deg",
            "-45": "-45deg",
            "-12": "-12deg",
            "-6": "-6deg",
            "-3": "-3deg",
            "-2": "-2deg",
            "-1": "-1deg",
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg",
            45: "45deg",
            90: "90deg",
            180: "180deg",
        },
        scale: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5",
        },
        skew: {
            "-12": "-12deg",
            "-6": "-6deg",
            "-3": "-3deg",
            "-2": "-2deg",
            "-1": "-1deg",
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg",
        },
        space: (theme, { negative }) => ({
            ...theme("spacing"),
            ...negative(theme("spacing")),
        }),
        stroke: {
            current: "currentColor",
        },
        strokeWidth: {
            0: "0",
            1: "1",
            2: "2",
        },
        textColor: (theme) => theme("colors"),
        textOpacity: (theme) => theme("opacity"),
        transitionDuration: {
            DEFAULT: "150ms",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1000: "1000ms",
        },
        transitionDelay: {
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1000: "1000ms",
        },
        transitionProperty: {
            none: "none",
            all: "all",
            DEFAULT: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
            colors: "background-color, border-color, color, fill, stroke",
            opacity: "opacity",
            shadow: "box-shadow",
            transform: "transform",
        },
        transitionTimingFunction: {
            DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
            linear: "linear",
            in: "cubic-bezier(0.4, 0, 1, 1)",
            out: "cubic-bezier(0, 0, 0.2, 1)",
            "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        },
        translate: (theme, { negative }) => ({
            ...theme("spacing"),
            ...negative(theme("spacing")),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            "-1/2": "-50%",
            "-1/3": "-33.333333%",
            "-2/3": "-66.666667%",
            "-1/4": "-25%",
            "-2/4": "-50%",
            "-3/4": "-75%",
            "-full": "-100%",
        }),
        width: (theme) => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            min: "min-content",
            max: "max-content",
        }),
        zIndex: {
            auto: "auto",
            0: "0",
            10: "10",
            20: "20",
            30: "30",
            40: "40",
            50: "50",
        },
    },
    variantOrder: [
        "first",
        "last",
        "odd",
        "even",
        "visited",
        "checked",
        "group-hover",
        "group-focus",
        "focus-within",
        "hover",
        "focus",
        "focus-visible",
        "active",
        "disabled",
    ],
    variants: {
        accessibility: ["important", "responsive", "focus-within", "focus"],
        alignContent: ["important", "responsive"],
        alignItems: ["important", "responsive"],
        alignSelf: ["important", "responsive"],
        animation: ["important", "responsive"],
        appearance: ["important", "responsive"],
        backgroundAttachment: ["important", "responsive"],
        backgroundClip: ["important", "responsive"],
        backgroundColor: ["important", "responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
        backgroundImage: ["important", "responsive"],
        backgroundOpacity: ["important", "responsive", "group-hover", "focus-within", "hover", "focus"],
        backgroundPosition: ["important", "responsive"],
        backgroundRepeat: ["important", "responsive"],
        backgroundSize: ["important", "responsive"],
        borderCollapse: ["important", "responsive"],
        borderColor: ["important", "responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
        borderOpacity: ["important", "responsive", "group-hover", "focus-within", "hover", "focus"],
        borderRadius: ["important", "responsive"],
        borderStyle: ["important", "responsive"],
        borderWidth: ["important", "responsive"],
        boxShadow: ["important", "responsive", "group-hover", "focus-within", "hover", "focus"],
        boxSizing: ["important", "responsive"],
        clear: ["important", "responsive"],
        container: ["important", "responsive"],
        cursor: ["important", "responsive"],
        display: ["important", "responsive"],
        divideColor: ["important", "responsive", "dark"],
        divideOpacity: ["important", "responsive"],
        divideStyle: ["important", "responsive"],
        divideWidth: ["important", "responsive"],
        fill: ["important", "responsive"],
        flex: ["important", "responsive"],
        flexDirection: ["important", "responsive"],
        flexGrow: ["important", "responsive"],
        flexShrink: ["important", "responsive"],
        flexWrap: ["important", "responsive"],
        float: ["important", "responsive"],
        fontFamily: ["important", "responsive"],
        fontSize: ["important", "responsive"],
        fontSmoothing: ["important", "responsive"],
        fontStyle: ["important", "responsive"],
        fontVariantNumeric: ["important", "responsive"],
        fontWeight: ["important", "responsive"],
        gap: ["important", "responsive"],
        gradientColorStops: ["important", "responsive", "dark", "hover", "focus"],
        gridAutoColumns: ["important", "responsive"],
        gridAutoFlow: ["important", "responsive"],
        gridAutoRows: ["important", "responsive"],
        gridColumn: ["important", "responsive"],
        gridColumnEnd: ["important", "responsive"],
        gridColumnStart: ["important", "responsive"],
        gridRow: ["important", "responsive"],
        gridRowEnd: ["important", "responsive"],
        gridRowStart: ["important", "responsive"],
        gridTemplateColumns: ["important", "responsive"],
        gridTemplateRows: ["important", "responsive"],
        height: ["important", "responsive"],
        inset: ["important", "responsive"],
        justifyContent: ["important", "responsive"],
        justifyItems: ["important", "responsive"],
        justifySelf: ["important", "responsive"],
        letterSpacing: ["important", "responsive"],
        lineHeight: ["important", "responsive"],
        listStylePosition: ["important", "responsive"],
        listStyleType: ["important", "responsive"],
        margin: ["important", "responsive"],
        maxHeight: ["important", "responsive"],
        maxWidth: ["important", "responsive"],
        minHeight: ["important", "responsive"],
        minWidth: ["important", "responsive"],
        objectFit: ["important", "responsive"],
        objectPosition: ["important", "responsive"],
        opacity: ["important", "responsive", "group-hover", "focus-within", "hover", "focus", "disabled"],
        order: ["important", "responsive"],
        outline: ["important", "responsive", "focus-within", "focus"],
        overflow: ["important", "responsive"],
        overscrollBehavior: ["important", "responsive"],
        padding: ["important", "responsive"],
        placeContent: ["important", "responsive"],
        placeItems: ["important", "responsive"],
        placeSelf: ["important", "responsive"],
        placeholderColor: ["important", "responsive", "dark", "focus"],
        placeholderOpacity: ["important", "responsive", "focus"],
        pointerEvents: ["important", "responsive"],
        position: ["important", "responsive"],
        resize: ["important", "responsive"],
        ringColor: ["important", "responsive", "dark", "focus-within", "focus"],
        ringOffsetColor: ["important", "responsive", "dark", "focus-within", "focus"],
        ringOffsetWidth: ["important", "responsive", "focus-within", "focus"],
        ringOpacity: ["important", "responsive", "focus-within", "focus"],
        ringWidth: ["important", "responsive", "focus-within", "focus"],
        rotate: ["important", "responsive", "hover", "focus"],
        scale: ["important", "responsive", "hover", "focus"],
        skew: ["important", "responsive", "hover", "focus"],
        space: ["important", "responsive"],
        stroke: ["important", "responsive"],
        strokeWidth: ["important", "responsive"],
        tableLayout: ["important", "responsive"],
        textAlign: ["important", "responsive"],
        textColor: ["important", "responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
        textDecoration: ["important", "responsive", "group-hover", "focus-within", "hover", "focus"],
        textOpacity: ["important", "responsive", "group-hover", "focus-within", "hover", "focus"],
        textOverflow: ["important", "responsive"],
        textTransform: ["important", "responsive"],
        transform: ["important", "responsive"],
        transformOrigin: ["important", "responsive"],
        transitionDelay: ["important", "responsive"],
        transitionDuration: ["important", "responsive"],
        transitionProperty: ["important", "responsive"],
        transitionTimingFunction: ["important", "responsive"],
        translate: ["important", "responsive", "hover", "focus"],
        userSelect: ["important", "responsive"],
        verticalAlign: ["important", "responsive"],
        visibility: ["important", "responsive"],
        whitespace: ["important", "responsive"],
        width: ["important", "responsive"],
        wordBreak: ["important", "responsive"],
        zIndex: ["important", "responsive", "focus-within", "focus"],
    },
    plugins: [
        require("@tailwindcss/ui"),

        plugin(function({ addVariant }) {
            addVariant("important", ({ container }) => {
                container.walkRules(rule => {
                    rule.selector = `.\\!${rule.selector.slice(1)}`
                    rule.walkDecls(decl => {
                        decl.important = true
                    })
                })
            })
        }),
    ],
}
