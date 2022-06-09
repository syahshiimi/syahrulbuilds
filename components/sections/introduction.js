import { Avatar, Box, Container, Stack, Text, VStack } from '@chakra-ui/react';

import Heading from "./heading";

export default function Introduction({ content, avatarUrl }) {
    console.log(avatarUrl);
    return (
        <Stack direction={'column'} spacing={[8]} mt={20}>
            <Avatar name='Syahrul Anuar' src={`http://localhost:1337${avatarUrl}`} size={'xl'} mb={4} />
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
