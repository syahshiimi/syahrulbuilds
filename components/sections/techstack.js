import { Stack, Box, Container, Heading, Tag, Text, Wrap, Grid, SimpleGrid, useColorModeValue, LightMode } from "@chakra-ui/react";
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

// Components
import Languages from "../../components/techstacks/languages";
import Frameworks from "../../components/techstacks/frameworks";
import Apps from "../../components/techstacks/apps";

export default function Techstack({ content, tags }) {

    const headingColor = useColorModeValue('purple.500', 'purple.100');
    const textColor = useColorModeValue('gray.900', 'gray.50');
    const skillsColor = useColorModeValue('gray.700', 'white');
    // create specific text theme
    const newTheme = {
        p: props => {
            const { children } = props;
            return (
                <Text
                    className="c-techstack__content"
                    fontSize={['sm', 'md', 'md']}
                    color={textColor}
                    mb={10}
                    fontWeight='regular' >
                    {children}
                </Text>
            );
        },
    };

    return (
        <Box
            className="c-homecontent__techstack"
            mt={14} color={'gray.50'}>
            <Heading
                fontSize={["lg", 'lg', 'xl']}
                lineHeight="6"
                color={headingColor}
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
                <LightMode>
                    <Languages object={tags.programmingLang} color={skillsColor} />
                    <Frameworks object={tags.frameworks} color={skillsColor} />
                    <Apps object={tags.apps} color={skillsColor} />
                </LightMode>
            </SimpleGrid>
        </Box >
    )

}
