import { Stack, Box, Container, Heading, Tag, Text, Wrap } from "@chakra-ui/react";

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
            <Heading size="md" lineHeight="6" color="purple.100" mb="21px">
                My Tech Stack
            </Heading>
            <Container>
                <Text fontSize="sm" lineHeight="5" mb={16} fontWeight='medium'>
                    Apart from my tech stack, I have also acquired skills that were
                    related to arts and design such as the{" "}
                    <Text as="span" color="red.400">
                        Adobe Creative Cloud Suite
                    </Text>{" "}
                    and proficiency in graphics and media related content.
                </Text>
            </Container>
            <Stack
                className='c-homecontent__languages'
                spacing={'18px'}
                direction={['column', 'column', 'row', 'row']}>
                <Languages />
                <Frameworks />
                <Apps />
            </Stack>
        </Box>
    )

}
