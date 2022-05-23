import {  Box, Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
      <Flex bg='gray.700' minH={'100vh'} direction='column' className="c-layoutcontainer" p={'1vw 2vh'}>
      <Header />
      <Flex grow={1} className='c-children' pb={'2vh'}>{children}</Flex>
      <Footer/>
      </Flex>
  );
}
