import { Container, Wrap, Box, Grid, Text, Flex, Tag, TagLabel, Button, GridItem, Spacer } from "@chakra-ui/react";
import Image from 'next/image';
import NextLink from 'next/link';

// Import Tag Components
import LanguagesTag from "./tags/languagestag";
import FrameworksTag from "./tags/frameworkstag";
import AppsTag from "./tags/appstag";

// Import Button
import ReadMore from "./readmorebutton";



export default function PastWorkCards({ title, techstack, text, imgsrc }) {

    return (
        <Grid className="c-pastworks" mt={10}>
            <Text
                fontSize={'md'}
                lineHeight={6}
                align={['right', 'right', 'left']}
                color='gray.100'
                as={'strong'}
                pl={[24, 0]}
                className="c-pastworks__heading">
                {title}
            </Text>
            <Flex
                className="c-pastworks__contentcontainer"
                direction={['column', 'column', 'row-reverse']}
                columnGap={4}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    className="c-pastworks__imageandtechstack"
                    mt={[8, 7]}
                    maxW={['100%', '100%', '250px']}
                >
                    <Image
                        src={imgsrc}
                        alt='card image'
                        width={778}
                        height={477}
                    />
                    <Text
                        fontSize='sm'
                        as='strong'
                        mt={4}
                        textAlign={'right'}
                        color='gray.300'
                        className={'c-pastworks__title'}>
                        Tech Stack
                    </Text>
                    <Wrap className="c-pastworks__tagscontainer" justify={'right'} mt={3}>
                        <LanguagesTag object={techstack} />
                        <FrameworksTag object={techstack} />
                        <AppsTag object={techstack} />
                    </Wrap>
                </Box>
                <Container
                    className="c-pastworks__shorttextcontainer"
                    mt={[8, 7]} p={[null, 0]}
                    display='flex'
                    flexGrow={1}
                    flexDirection={'column'}
                    alignItems='end'>
                    <Text className="c-pastworks__shorttext" fontSize="sm" color={'gray.50'} mb={2}>
                        {text}
                    </Text>
                    <ReadMore />
                </Container>
            </Flex>
        </Grid >
    )

}
