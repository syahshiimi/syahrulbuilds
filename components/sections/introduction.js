import {
  Avatar,
  Box,
  Heading,
  Container,
  Stack,
  useColorModeValue,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

import Index from "./mdx/introduction.mdx";

export default function Introduction({ content }) {
  const titleColor = useColorModeValue("gray.700", "gray.200");
  const bodyColor = useColorModeValue("gray.700", "gray.50");
  const contentColor = useColorModeValue("red.700", "red.200");

  const components = {
    h1: (props) => (
      <Heading
        color={titleColor}
        fontSize={["xl", null, "2xl"]}
        mb={[0, null, 4]}
        {...props}
      />
    ),
    h2: (props) => (
      <Heading
        className="c-homecontent__heading"
        fontSize={["md", "md", "lg", "xl"]}
        align="left"
        color={bodyColor}
        {...props}
      />
    ),
    p: (props) => (
      <Text
        className="c-homecontent__motivations"
        fontSize={["sm", null, "md"]}
        lineHeight={"6"}
        color={contentColor}
        fontWeight="semibold"
        {...props}
      />
    ),
  };
  return (
    <Stack
      className="c-introduction"
      direction={["column", null, "row-reverse"]}
      spacing={[4, null, 16]}
      mt={16}
    >
      <Avatar
        name="Syahrul Anuar"
        src="/images/profile_picture.jpg"
        alt="profile picture"
        size={["lg", "xl", "2xl"]}
        mb={[4, null, 0]}
        mt={[0, null, 4]}
        mr={[0, null, 6]}
      />
      <Stack direction={"column"} spacing={[4]}>
        <MDXProvider components={components}>
          <Index />
        </MDXProvider>
      </Stack>
    </Stack>
  );
}
