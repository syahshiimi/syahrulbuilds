import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { MDXProvider } from "@mdx-js/react";

// Components
import PastWorkCards from "../cards/pastworkcards";

// Content
import Content from "./mdx/pastworks.mdx";

export default function PastWorks({ content }) {
  const headingColor = useColorModeValue("orange.500", "orange.100");
  const captionColor = useColorModeValue("gray.500", "gray.50");

  // color objects to be passed as hooks for pastwork cards
  const pastworksColor = {
    titleColor: useColorModeValue("gray.700", "gray.100"),
    techstackColor: useColorModeValue("gray.500", "gray.300"),
    contentColor: useColorModeValue("gray.600", "gray.50"),
  };

  const components = {
    h1: (props) => (
      <Heading
        fontSize={["lg", "lg", "xl"]}
        color={headingColor}
        mb={[5, 4]}
        textAlign={["left"]}
        className="c-pastworks__textheading"
        {...props}
      />
    ),
    p: (props) => (
      <Text
        className="c-pastworks__content"
        fontSize={["sm", "md"]}
        color={captionColor}
        lineHeight={5}
        fontWeight="medium"
        {...props}
      />
    ),
  };

  return (
    <Container
      className="c-homecontent__pastworks"
      maxW={["container.sm", "container.md"]}
      px={[0]}
    >
      <Box className="c-pastworks__textcontainer" mt={94}>
        <MDXProvider components={components}>
          {" "}
          <Content />
        </MDXProvider>
      </Box>
      <Flex className="c-pastworks_cardcontainer" direction={"column"}>
        {content.map((obj, index) => {
          const {
            data: { title, description, apps, imgsrc, frameworks, languages },
          } = obj;
          return (
            <PastWorkCards
              key={index}
              color={pastworksColor}
              title={title}
              languages={languages}
              imgsrc={imgsrc}
              apps={apps}
              frameworks={frameworks}
              text={description}
            />
          );
        })}
      </Flex>
    </Container>
  );
}
