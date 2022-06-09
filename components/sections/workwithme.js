import { Box, Link, Flex, Heading, Text } from "@chakra-ui/react";


export default function WorkWithMe({ email, content }) {
    return (
        <Flex
            direction={'column'}
            justify='center'
            align={'center'}
            className="c-homecontent__workwithme"
            my={24}>
            <Heading
                className="c-workwithme__texttitle"
                size={'md'}
                color={'teal.100'}
                mb={5}
            >
                Work With Me
            </Heading>
            <Text
                className="c-workwithme__content"
                color={'gray.50'}
                fontSize={'sm'}
                as='strong'
                textAlign='center'>
                {content}
            </Text>
            <Text className="c-workwithme__email" fontSize={'lg'} color='gray.300' as={'strong'} mt='50px'>
                <Link href="mailto:`${email}`">Drop me an email!</Link>
            </Text>
        </Flex>
    )
}
