import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

// Page Sections 
import MainHeading from "../components/sections/heading";
import TechStack from "../components/sections/techstack";
import PastWorks from "../components/sections/pastworks";
import CurrentWorks from "../components/sections/currentworks";
import Introduction from "../components/sections/introduction";
import WorkWithMe from "../components/sections/workwithme";

// Import lib
import { loadContent } from '../lib/fetch-content';

export async function getStaticProps() {
    const data = await loadContent('home-page/?populate=myTechStack,pastWorks,avatar');
    return {
        props: { homePage: data },
    }

}

export default function Home({ homePage }) {
    return (
        <Flex
            direction={"column"}
            className="c-homecontent"
            as="section"
            grow={'1'}
        >
            {/* Introduction section */}
            <Introduction content={homePage.briefMotivation} />
            {/* Techstack section */}
            <TechStack content={homePage.techStackInfo} tags={homePage.myTechStack} />
            {/* Pastworks section */}
            <PastWorks />
            {/* current Works section */}
            <CurrentWorks />
            {/* Work With Me section */}
            <WorkWithMe />
        </Flex>
    );
}
