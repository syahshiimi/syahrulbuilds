import { Box, Button, Container, Flex, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";

// Page Sections 
import MainHeading from "../components/sections/heading";
import TechStack from "../components/sections/techstack";
import PastWorksContent from "../components/sections/pastworks";
import CurrentWorks from "../components/sections/currentworks";
import Introduction from "../components/sections/introduction";
import WorkWithMe from "../components/sections/workwithme";

export default function Home() {
    return (
        <Container className="c-homecontent" as="section" maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}>
            <Stack direction={"column"} spacing={12} my={16}>
                <MainHeading />
                {/* Introduction section */}
                <Introduction />
            </Stack>
            {/* Techstack section */}
            <TechStack />
            {/* Pastworks section */}
            <PastWorksContent />
            {/* current Works section */}
            <CurrentWorks />
            {/* Work With Me section */}
            <WorkWithMe />
        </Container>
    );
}
