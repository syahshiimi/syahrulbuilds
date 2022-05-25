import { Box, Button, Container, Flex, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";

// Page Sections 
import MainHeading from "../components/sections/heading";
import TechStack from "../components/techstacks/techstack";
import PastWorksContent from "../components/sections/pastworks";
import Introduction from "../components/sections/introduction";
import WorkWithMe from "../components/sections/workwithme";




export default function Home() {
    return (
        <Container className="c-homecontent" as="section">
            <Stack direction={"column"} spacing={12}>
                <MainHeading />
                {/* Introduction section */}
                <Introduction />
            </Stack>
            {/* Techstack section */}
            <TechStack />
            {/* Pastworks section */}
            <PastWorksContent />
            {/* Work With Me section */}
            <WorkWithMe />
        </Container>
    );
}
