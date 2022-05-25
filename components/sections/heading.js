import { Container, Heading, Text } from '@chakra-ui/react';

export default function MainHeading() {
    return (
        <Heading
            className="c-homecontent__heading"
            as="h2"
            size="md"
            align="left"
            color={"gray.50"}
            pt={12}
        >
            Hi!, I’m Syahrul. I’m a{" "}
            <Text as="span" color="blue.500">
                frontend developer
            </Text>{" "}
            and a{" "}
            <Text as="span" color="red.500">
                practicing visual artist.
            </Text>
        </Heading>

    )
}
