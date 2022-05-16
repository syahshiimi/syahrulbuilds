import { Container, Box } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
      <Container>
      <Header />
      <Box>{children}</Box>
      </Container>
  );
}
