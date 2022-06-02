import { Box, Container, Text, VStack } from '@chakra-ui/react';

export default function Introduction() {
    return (
        <VStack
            className="c-homecontent__introduction"
            as='section'
            spacing={[4, 6]}
            alignItems='start'
        >
            <Text
                className="c-homecontent__selfintro"
                fontSize={["sm", null, null, 'md']}
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
                fontSize={['md', null, 'lg']}
                lineHeight={'6'}
                color={"red.200"}
                fontWeight='semibold'>
                I am open to positions that focuses on the frontend.{" "}
                Full CV
            </Text>
        </VStack>
    )

}
