import { Box, Flex, Heading, Text } from "@chakra-ui/react";


export default function WorkWithMe() {
    return (
        <Flex
            direction={'column'}
            justify='center'
            align={'center'}
            className="c-homecontent__workwithme"
            mt={'94px'}
            mb={'94px'}>
            <Heading
                className="c-workwithme__texttitle"
                size={'md'}
                color={'teal.100'}
            >
                Work With Me
            </Heading>
            <Text
                className="c-workwithme__content"
                color={'gray.50'}
                fontSize={'sm'}
                as='strong'
                mt={'25px'}>
                I am also open to working on art collaborations that may include anything related web technologies, digital experiences and interfaces.
            </Text>
            <Text className="c-workwithme__email" fontSize={'lg'} color='gray.300' as={'strong'} mt='50px'>
                <a href="mailto:syahrlanuar95@gmail.com">Drop me an email!</a>
            </Text>
        </Flex>
    )
}
