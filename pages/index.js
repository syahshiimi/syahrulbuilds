import { Box, Button, Container, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";

// Components
import MainHeading from "../components/heading";
import TechStack from "../components/techstacks/techstack";
import PastWorkCards from "../components/builtcards";

// Import Data
import { PastWorks } from "../data/pastworks";



export default function Home() {
    return (
        <Container
            className="c-homecontent"
            as="section"
        >
            <MainHeading />
            <Box
                className="c-homecontent__box"
                as='section'
                mt='53px'>
                <Text
                    className="c-homecontent__text"
                    size="md"
                    as="strong"
                    lineHeight="6"
                    color={"gray.50"}
                >
                    I am currently 26 years old, working as a freelance web developer.
                    {"\n"}
                    My former clients include Nanyang Technological University and National
                    University of Singapore.
                </Text>
                <TechStack />
                {Object.entries(PastWorks).map(([key, value]) => {
                    // Destructure returned objects
                    const { title, imgsrc, techstack, WorkInfo } = value
                    return (
                        <PastWorkCards
                            key={key}
                            title={title}
                            imgsrc={imgsrc}
                            techstack={techstack}
                            text={WorkInfo} />
                    )
                })
                }
            </Box>
        </Container>
    );
}
