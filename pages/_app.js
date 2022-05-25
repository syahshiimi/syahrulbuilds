import "../styles/globals.css";
import { ChakraProvider, withDefaultSize } from "@chakra-ui/react";
import Layouts from "../components/layouts";
import theme from "../themes";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Layouts>
                <Component {...pageProps} />
            </Layouts>
        </ChakraProvider>
    );
}

export default MyApp;
