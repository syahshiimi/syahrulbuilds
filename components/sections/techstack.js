import {
  Stack,
  Box,
  Container,
  Heading,
  Tag,
  Text,
  Wrap,
  Grid,
  SimpleGrid,
  useColorModeValue,
  LightMode,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

// Content
import Content from "../../pages/mdx/techstack.mdx";

export default function Techstack({ content, tags }) {
  const headingColor = useColorModeValue("purple.500", "purple.100");
  const textColor = useColorModeValue("gray.900", "gray.50");
  const skillsColor = useColorModeValue("gray.700", "white");

  const components = {
    h1: (props) => (
      <Heading
        fontSize={["lg", "lg", "xl"]}
        lineHeight="6"
        color={headingColor}
        mb={[5, 4]}
        textAlign={["left"]}
        {...props}
      />
    ),
    p: (props) => (
      <Text
        className="c-techstack__content"
        fontSize={["sm", "md", "md"]}
        color={textColor}
        mb={10}
        fontWeight="regular"
        {...props}
      />
    ),
  };

  return (
    <Box className="l-techstack" mt={14} color={"gray.50"}>
      <MDXProvider components={components}>
        {" "}
        <Content />
      </MDXProvider>
    </Box>
  );
}
