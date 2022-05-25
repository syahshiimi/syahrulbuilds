import { Box, Text } from '@chakra-ui/react';

export default function Introduction() {
    return (
        <Box
            className="c-homecontent__introduction"
            as='section'
            mt={12}>
            <Text
                className="c-homecontent__text"
                size="md"
                as="strong"
                lineHeight="6"
                color={"gray.50"}
                fontWeight='semibold'
            >
                I am currently 26 years old, working as a freelance web developer.
                My former clients include Nanyang Technological University and National
                University of Singapore.
            </Text>

            )
        </Box>
    )

}
