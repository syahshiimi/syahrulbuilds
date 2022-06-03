import { Box, Container, Stack, Text, VStack } from '@chakra-ui/react';

import Heading from "./heading";

export default function Introduction({ content }) {
    return (
        <Stack direction={'column'} spacing={[8]} mt={20}>
            <Heading />
            <Text
                className='c-homecontent__motivations'
                fontSize={['md', null, 'lg']}
                lineHeight={'6'}
                color={"red.200"}
                fontWeight='semibold'>
                {content}
            </Text>
        </Stack>
    )

}
