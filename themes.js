import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
}
)

export default theme;
