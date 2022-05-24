import { Box, Button, Container, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";

// Components
import MainHeading from "../components/heading";
import TechStack from "../components/techstacks/techstack";
import PastWorksContent from "../components/pastworks";
import Introduction from "../components/introduction";
import WorkWithMe from "../components/workwithme";




export default function Home() {
    return (
        <Container className="c-homecontent" as="section">
            <MainHeading />
            {/* Introduction section */}
            <Introduction />
            {/* Techstack section */}
            <TechStack />
            {/* Pastworks section */}
            <PastWorksContent />
            {/* Work With Me section */}
            <WorkWithMe/>
        </Container>
    );
}
