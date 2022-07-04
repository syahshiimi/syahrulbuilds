import { Avatar, Box, Heading, Container, Stack, Text, VStack } from '@chakra-ui/react';

import Hello from './hello';
export default function Introduction({ content }) {
    return (
        <Stack
            direction={['column', null, 'row-reverse']}
            spacing={[4, null, 16]}
            mt={16}>
            <Avatar
                name='Syahrul Anuar'
                src="/images/profile_picture.jpg" alt="profile picture"
                size={['lg', 'xl', '2xl']}
                mb={[4, null, 0]}
                mt={[0, null, 4]}
                mr={[0, null, 6]} />
            <Hello content={content} />
        </Stack>
    )

}
