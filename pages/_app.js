import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layouts from "../components/layouts/layouts";
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
