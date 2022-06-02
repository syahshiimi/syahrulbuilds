import { Container, Heading, Text } from '@chakra-ui/react';

export default function MainHeading() {
    return (
        <Heading
            className="c-homecontent__heading"
            fontSize={["md", 'md', 'lg', 'xl']}
            align="left"
            color={"gray.50"}
        >
            Hi!, I’m Syahrul. I’m a{" "}
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

    )
}
