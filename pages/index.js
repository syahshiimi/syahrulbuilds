import { Flex } from "@chakra-ui/react";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import Introduction from "../components/sections/introduction";
import PastWorks from "../components/sections/pastworks";
import Techstack from "../components/sections/techstack";
import { postFilePaths, POSTS_PATH } from "../lib/mdx";

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}

export default function Home() {
  return (
    <Flex direction={"column"} className="l-index" as="section" grow={"1"}>
      <Introduction />
      <Techstack />
      <PastWorks />
    </Flex>
  );
}
