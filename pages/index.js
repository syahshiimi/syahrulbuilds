import { Flex } from "@chakra-ui/react";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Introduction from "../components/sections/introduction";
import PastWorks from "../components/sections/pastworks";
import Techstack from "../components/sections/techstack";
import CurrentWorksContent from "../components/sections/currentworks";
import WorkWithMe from "../components/sections/workwithme";

import { postFilePaths, POSTS_PATH } from "../lib/mdx";

// data fetch from pages folder all mdx posts
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

  return { props: { posts } }; // returns an array of mdx posts as objects
}

export default function Home({ posts }) {
  return (
    <Flex direction={"column"} className="l-index" as="section" grow={"1"}>
      <Introduction />
      <Techstack />
      <PastWorks content={posts} />
      <CurrentWorksContent content={posts} />
      <WorkWithMe />
    </Flex>
  );
}
