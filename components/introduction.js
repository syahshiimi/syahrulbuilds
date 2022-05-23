import { Box, Text } from '@chakra-ui/react';

export default function Introduction() {
    return (
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

            )
        </Box>
    )

}
