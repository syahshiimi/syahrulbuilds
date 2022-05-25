import "../styles/globals.css";
import { ChakraProvider, withDefaultSize } from "@chakra-ui/react";
import Layouts from "../components/layouts";
import { extendTheme } from '@chakra-ui/react';

const config = {
}



function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Layouts>
                <Component {...pageProps} />
            </Layouts>
        </ChakraProvider>
    );
}

export default MyApp;
