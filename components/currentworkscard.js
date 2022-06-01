import { Container, Wrap, Box, Text, Flex, Tag, TagLabel } from "@chakra-ui/react";
import Image from 'next/image';

// Import Tag Components
import LanguagesTag from "./tags/languagestag";
import FrameworksTag from "./tags/frameworkstag";
import AppsTag from "./tags/appstag";

// Import Button
import ReadMore from "./readmorebutton";

export default function CurrentWorkCards({ title, techstack, text, imgsrc }) {

    return (
        <Flex className="c-currentworks" direction={'column'} mt={10} >
            <Text
                fontSize={'md'}
                lineHeight={6}
                align={'left'}
                color='gray.100'
                as={'strong'}
                className="c-currentworks__heading">
                {title}
            </Text>
            <Flex
                direction={['column', 'row']}
                columnGap={4}
                className="c-pastworks__contentcontainer">
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    mt={[8, 7]}
                    maxW={['100%', '250px']}
                    className="c-currentworks__imageandtechstack"
                >
                    <Image
                        src={imgsrc}
                        alt='card image'
                        width={778}
                        height={477}

                    />
                    <Text
                        fontSize='sm'
                        align={'left'}
                        mt={4}
                        as='strong'
                        color='gray.300'
                        className={'c-currentworks__title'}>
                        Tech Stack
                    </Text>
                    <Wrap className="c-currentworks__tagscontainer" justify={'left'} mt={3}>
                        <LanguagesTag object={techstack} />
                        <FrameworksTag object={techstack} />
                        <AppsTag object={techstack} />
                    </Wrap>
                </Box>
                <Container
                    className="c-currentworks__shorttext"
                    mt={[8, 7]}
                    p={[null, 0]}>
                    <Text fontSize="sm" color={'gray.50'} align={'right'} mb={2}>
                        {text}
                    </Text>
                    <ReadMore />
                </Container>
            </Flex>
        </Flex >
    )

}
