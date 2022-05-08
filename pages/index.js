import { Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Flex as="section" className="l-home" direction="column">
      <div className="c-header">
        <Heading as="h1" size="lg">
          Syahrulbuilds.com
        </Heading>
      </div>
      <div className="c-homecontent">
        <Heading
          className="c-homecontent__heading"
          as="h2"
          size="xl"
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
      </div>
    </Flex>
  );
}
