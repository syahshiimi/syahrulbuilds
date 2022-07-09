import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

export default function MDXBlog({ children }) {
  const components = {
    h1: (props) => <Heading {...props} />,
  };

  console.log(children);
  return (
    <Container>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Container>
  );
}
