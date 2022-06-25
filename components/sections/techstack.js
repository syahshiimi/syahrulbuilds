import { Stack, Box, Container, Heading, Tag, Text, Wrap, Grid, SimpleGrid } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

// Components
import Languages from "../../components/techstacks/languages";
import Frameworks from "../../components/techstacks/frameworks";
import Apps from "../../components/techstacks/apps";

export default function Techstack({ content, tags }) {

    // create specific text theme
    const newTheme = {
        p: props => {
            const { children } = props;
            return (
                <Text
                    className="c-techstack__content"
                    fontSize={['sm', 'md', 'md']}
                    lineHeight="5"
                    mb={10}
                    fontWeight='medium' >
                    {children}
                </Text>
            );
        },
    };

    // destructure tags

    return (
        <Box
            className="c-homecontent__techstack"
            mt={28} color={'gray.50'}>
            <Heading
                fontSize={["lg", 'lg', 'xl']}
                lineHeight="6"
                color="purple.100"
                mb={[5, 4]}
                textAlign={['left']}>
                My Tech Stack
            </Heading>
            <ReactMarkdown
                components={ChakraUIRenderer(newTheme)}
                skipHtml>
                {content}
            </ReactMarkdown>
            <SimpleGrid columns={[1, 1, 3]} className='c-homecontent__languages'
                spacing={5}
            >
                <Languages object={tags.programmingLang} />
                <Frameworks object={tags.frameworks} />
                <Apps object={tags.apps} />
            </SimpleGrid>
        </Box >
    )

}
