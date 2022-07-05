import { useColorModeValue, Box, Link, Flex, Heading, Text } from "@chakra-ui/react";


export default function WorkWithMe({ email, content }) {
    const titleColor = useColorModeValue('teal.700', 'teal.100');
    const bodyColor = useColorModeValue('gray.700', 'gray.50');
    const contentColor = useColorModeValue('red.700', 'red.200');

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
                color={titleColor}
                mb={5}
            >
                Work With Me
            </Heading>
            <Text
                className="c-workwithme__content"
                color={bodyColor}
                fontSize={'sm'}
                as='strong'
                textAlign='center'>
                {content}
            </Text>
            <Text className="c-workwithme__email" fontSize={'lg'} color={contentColor} as={'strong'} mt='50px'>
                <Link href="mailto:`${email}`">Drop me an email!</Link>
            </Text>
        </Flex>
    )
}
