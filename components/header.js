import { Box, Container, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
      <Container className="c-title">
    <Heading as="h1" size="lg" pt='3vh' color={"gray.50"}>
      Syahrul{"\n "} Anuar
    </Heading>
      </Container>
  );
}
