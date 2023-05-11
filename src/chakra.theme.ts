import {extendTheme} from "@chakra-ui/react";
import "@fontsource/sen";

export const theme = extendTheme({
    fonts: {
        body: 'Sen, sans-serif',
    },
    global: {
        body: {
            position: 'relative',
        },
        li: {
            listStyle: 'none',
        }
    }
})
