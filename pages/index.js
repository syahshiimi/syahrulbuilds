import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

// Page Sections 
import MainHeading from "../components/sections/heading";
import TechStack from "../components/sections/techstack";
import PastWorks from "../components/sections/pastworks";
import CurrentWorks from "../components/sections/currentworks";
import Introduction from "../components/sections/introduction";
import WorkWithMe from "../components/sections/workwithme";

export async function getStaticProps() {
    // get data
    const res = await fetch('http://localhost:1337/api/home-page/?populate=pastWorks,avatar');
    const data = await res.json();
    // return data
    return {
        props: { data },
    }
}

export default function Home({ data }) {
    const homePage = data.data.attributes;
    console.log(homePage);

    return (
        <Flex
            direction={"column"}
            className="c-homecontent"
            as="section"
            grow={'1'}
        >
            <Stack direction={"column"} spacing={[8]} mt={20} >
                <MainHeading />
                {/* Introduction section */}
                <Introduction />
            </Stack>
            {/* Techstack section */}
            <TechStack />
            {/* Pastworks section */}
            <PastWorks />
            {/* current Works section */}
            <CurrentWorks />
            {/* Work With Me section */}
            <WorkWithMe />
        </Flex>
    );
}
