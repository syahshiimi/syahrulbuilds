import { Heading, Text} from '@chakra-ui/react';

export default function MainHeading() {
    return (
        <Heading
        className="c-homecontent__heading"
        as="h2"
        size="md"
        align="left"
        mt='60px'
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
