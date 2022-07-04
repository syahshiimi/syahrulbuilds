import { Stack, Heading, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

export default function Hello({ content }) {
    const titleColor = useColorModeValue('gray.700', 'gray.200');
    const bodyColor = useColorModeValue('gray.700', 'gray.50');
    const contentColor = useColorModeValue('red.700', 'red.200');

    return (
        <Stack direction={'column'} spacing={[4]}>
            <Heading className='c-homecontent_hello'
                color={titleColor}
                fontSize={['xl', null, '2xl']}
                mb={[0, null, 4]}>
                Hi! I`m Syahrul Anuar
            </Heading>
            <Heading
                className="c-homecontent__heading"
                fontSize={["md", 'md', 'lg', 'xl']}
                align="left"
                color={bodyColor}
            >
            I'm a{" "}
                <Text as="span" color="blue.500"
                    fontSize={["md", 'md', 'lg', 'xl']}
                >
                    frontend developer
                </Text>{" "}
                and a{" "}
                <Text as="span"
                    fontSize={["md", 'md', 'lg', 'xl']}
                    color="red.500">
                    practicing visual artist.
                </Text>
            </Heading>

            <Text
                className='c-homecontent__motivations'
                fontSize={['sm', null, 'md']}
                lineHeight={'6'}
                color={contentColor}
                fontWeight='semibold'>
                {content}
            </Text>
        </Stack>

    )
}
