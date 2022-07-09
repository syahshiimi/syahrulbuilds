import {
  useColorModeValue,
  Box,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import CurrentWorkCards from "../../components/cards/currentworkscard";

// Content
import Content from "./mdx/currentworks.mdx";

export default function CurrentWorksContent({ content }) {
  const headingColor = useColorModeValue("pink.500", "pink.100");
  const captionColor = useColorModeValue("gray.500", "gray.50");

  // color objects to be passed as hooks for currentwork cards
  const currentworksColor = {
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
        className="c-currentworks__textheading"
        {...props}
      />
    ),
  };

  return (
    <Box className="c-homecontent__currentworks">
      <Box className="c-currentworks__textcontainer" mt={94}>
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </Box>
      <Flex className="c-currentworks_cardcontainer" direction={"column"}>
        {content.map((obj, index) => {
          const {
            filePath,
            data: {
              title,
              description,
              apps,
              imgsrc,
              frameworks,
              languages,
              current,
            },
          } = obj;
          return current ? (
            <CurrentWorkCards
              key={index}
              color={currentworksColor}
              title={title}
              languages={languages}
              imgsrc={imgsrc}
              apps={apps}
              frameworks={frameworks}
              text={description}
              path={filePath}
            />
          ) : null;
        })}
      </Flex>
    </Box>
  );
}
