import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex as="footer" justify="center" color={"white"}>
      <Text mr="2vh"><a href="https://github.com/syahshiimi">github</a></Text>
      <Text mr="2vh"><a href="https://www.instagram.com/syahshiimi/">instagram</a></Text>
      <Text mr="2vh"><a href="https://sg.linkedin.com/in/syahrul-anuar-212274102?original_referer=https%3A%2F%2Fsg.linkedin.com%2F">linkedin</a></Text>
    </Flex>
  );
}
