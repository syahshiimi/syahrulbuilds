import {  Box, Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
      <Box w='100vw' h={'100vh'} padding={'1vh'} bg='gray.700' display={'flex'} flexDirection={"column"} >
      <Header />
      <Flex grow={1}>{children}</Flex>
      <Footer/>
      </Box>
  );
}
