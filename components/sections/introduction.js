import { Box, Container, Text, VStack } from '@chakra-ui/react';

export default function Introduction() {
    return (
        <VStack
            className="c-homecontent__introduction"
            as='section'
            spacing={12}
            mt={12}>
            <Text
                className="c-homecontent__selfintro"
                size="md"
                as="strong"
                lineHeight="6"
                color={"gray.50"}
                fontWeight='semibold'
            >
                My former clients include Nanyang Technological University and National
                University of Singapore.
            </Text>
            )
            <Text
                className='c-homecontent__motivations'
                size='md'
                lineHeight={'6'}
                color={"red.200"}
                textAlign='left'
                fontWeight='semibold'>
                Currently I am looking to join a software team that would allow me to grow and improve as a frontend developer.

                I am open to positions that focuses on the frontend.

                Full CV
            </Text>
        </VStack>
    )

}
