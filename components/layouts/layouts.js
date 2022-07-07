import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import Footer from "../footer";
import Header from "../header";

export default function Layout({ children }) {
  const color = useColorModeValue("white", "gray.700");
  return (
    <Container
      px={[4, 10]}
      bg={color}
      minH={"100vh"}
      className="c-layoutcontainer"
      maxW={[
        "container.sm",
        "container.md",
        "container.lg",
        "container.xl",
        "100%",
      ]}
    >
      <Header />
      <Container
        className="c-children"
        pb={"2vh"}
        maxW={["container.sm", "container.md"]}
      >
        {children}
      </Container>
      <Footer />
    </Container>
  );
}
