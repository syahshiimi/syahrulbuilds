import { Box, Button, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";

export default function Home() {
    const { toggleColorMode } = useColorMode();
  return (
    <Flex
      className="c-homecontent"
      as="section"
      grow="1"
      align="start"
      direction="column"
      height="100vh"
    >
      <Heading
        className="c-homecontent__heading"
        as="h2"
        size="md"
        align="left"
      >
        Hi!, I’m Syahrul. I’m a{" "}
        <Text as="span" color="blue.500">
          frontend developer
        </Text>{" "}
        and a{" "}
        <Text as="span" color="red.500">
          practicing visual artist.
        </Text>
      </Heading>
      <Text
        className="c-homecontent__content"
        size="md"
        as="strong"
        lineHeight="6"
      >
        I am currently 26 years old, working as a freelance web developer.
        {"\n"}
        My former clients include Nanyang Technological University and National
        University of Singapore.
      </Text>
      <Box className="c-homecontent__techstack" mt="94px">
        <Heading size="md" lineHeight="6" color="purple.100" mb="21px">
          My Tech Stack
        </Heading>
        <Text size="sm" lineHeight="5">
          Apart from my tech stack, I have also acquired skills that were
          related to arts and design such as the{" "}
          <Text as="span" color="red.400">
            Adobe Creative Cloud Suite
          </Text>{" "}
          and proficiency in graphics and media related content.
        </Text>
      </Box>
      <Button onClick={toggleColorMode}>Toggle Color</Button>
    </Flex>
  );
}
