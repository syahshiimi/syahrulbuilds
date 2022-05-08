import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layouts from "../components/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider colorModeManager="gray.700">
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </ChakraProvider>
  );
}

export default MyApp;