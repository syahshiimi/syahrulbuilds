import { Stack, Box, Container, Heading, Tag, Text, Wrap, Grid, SimpleGrid } from "@chakra-ui/react";

// Data
import { FrameworksLang } from "../../data/languages";

// Components
import Languages from "../../components/techstacks/languages";
import Frameworks from "../../components/techstacks/frameworks";
import Apps from "../../components/techstacks/apps";

export default function Techstack() {
    return (
        <Box
            className="c-homecontent__techstack"
            mt={28} color={'gray.50'}>
            <Heading size="md" lineHeight="6" color="purple.100" mb={5} textAlign={'center'}>
                My Tech Stack
            </Heading>
            <Text fontSize={['sm', 'md', 'lg']} lineHeight="5" mb={10} fontWeight='medium'>
                Apart from my tech stack, I have also acquired skills that were
                related to arts and design such as the{" "}
                <Text as="span" color="red.400">
                    Adobe Creative Cloud Suite
                </Text>{" "}
                and proficiency in graphics and media related content.
            </Text>
            <SimpleGrid columns={[1, 1, 3]} className='c-homecontent__languages'
                spacing={5}
            >
                <Languages />
                <Frameworks />
                <Apps />
            </SimpleGrid>
        </Box >
    )

}
