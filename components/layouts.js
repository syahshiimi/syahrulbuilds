import { Container, Box, Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
      <Container w='100%' padding={'0'}>
      <Header />
      <Flex>{children}</Flex>
      <Footer/>
      </Container>
  );
}
