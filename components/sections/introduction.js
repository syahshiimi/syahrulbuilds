import { Avatar, Box, Heading, Container, Stack, Text, VStack } from '@chakra-ui/react';


import Hello from './heading';
export default function Introduction({ content, avatarUrl }) {
    console.log(avatarUrl);
    return (
        <Stack
            direction={['column', null, 'row-reverse']}
            spacing={[4, null, 16]}
            mt={16}>
            <Avatar
                name='Syahrul Anuar'
                src={`http://syahrulbuilds.herokuapp.com${avatarUrl}`}
                size={['lg', 'xl', '2xl']}
                mb={[4, null, 0]}
                mt={[0, null, 4]}
                mr={[0, null, 6]} />
            <Hello content={content} />
        </Stack>
    )

}
