import { Box, Button, Container, Flex, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";

// Page Sections 
import MainHeading from "../components/sections/heading";
import TechStack from "../components/sections/techstack";
import PastWorks from "../components/sections/pastworks";
import CurrentWorks from "../components/sections/currentworks";
import Introduction from "../components/sections/introduction";
import WorkWithMe from "../components/sections/workwithme";

export default function Home() {
    return (
        <Flex
            direction={"column"}
            className="c-homecontent"
            as="section"
            grow={'1'}
        >
            <Stack direction={"column"} spacing={8} mt={20} >
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
