import { Flex } from "@chakra-ui/react";
import React from "react";

import Introduction from "../components/sections/introduction";
import Techstack from "../components/sections/techstack";

export default function Home() {
  return (
    <Flex direction={"column"} className="l-index" as="section" grow={"1"}>
      <Introduction />
      <Techstack />
    </Flex>
  );
}
