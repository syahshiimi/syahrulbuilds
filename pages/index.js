import { Box, Button, Container, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";

// Components
import MainHeading from "../components/heading";
import TechStack from "../components/techstack";




export default function Home() {
    const { toggleColorMode } = useColorMode();
  return (
      <Box
      className="c-homecontent"
      as="section"
      grow="1"
      align="start"
      direction="column"
    >
      <MainHeading/>
      <Box
      className="c-homecontent__box" as='section' mt='53px'>
            <Text
        className="c-homecontent__text"
        size="md"
        as="strong"
        lineHeight="6"
      >
        I am currently 26 years old, working as a freelance web developer.
        {"\n"}
        My former clients include Nanyang Technological University and National
        University of Singapore.
      </Text>
      <TechStack/>
      </Box>
      </Box>
  );
}
