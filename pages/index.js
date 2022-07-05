import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from 'react'

// Page Sections 
import TechStack from "../components/sections/techstack";
import PastWorks from "../components/sections/pastworks";
import CurrentWorks from "../components/sections/currentworks";
import Introduction from "../components/sections/introduction";
import WorkWithMe from "../components/sections/workwithme";

// Import lib
import { loadContent } from '../lib/fetch-content';


export async function getStaticProps() {

    const data = await loadContent('home-page/?populate=myTechStack,pastWorks,avatar');

    // return the object we want
    return {
        props: { homePage: data },
    }

}

export default function Home({ homePage }) {

    const { url } = homePage.avatar.data.attributes;
    const { emailMe, workWithMeContent } = homePage;

    return (
        <Flex
            direction={"column"}
            className="c-homecontent"
            as="section"
            grow={'1'}
        >
            {/* Introduction section */}
            <Introduction content={homePage.briefMotivation} avatarUrl={url} />
            {/* Techstack section */}
            <TechStack content={homePage.techStackInfo} tags={homePage.myTechStack} />
            {/* Pastworks section */}
            <PastWorks />
            {/* current Works section */}
            <CurrentWorks />
            {/* Work With Me section */}
            <WorkWithMe email={emailMe} content={workWithMeContent} />
        </Flex>
    );
}
