import { Container, Wrap, Box, Grid, Text, Flex, Tag, TagLabel, Button, GridItem, Spacer } from "@chakra-ui/react";
import Image from 'next/image';
import NextLink from 'next/link';


// Create function for languages tags
const LanguagesTag = ({ object }) => {
    const { languages = [] } = object;
    return (
        <>
            {(languages) ? languages.map((item, index) => {
                return (
                    <Tag
                        key={index}
                        className="c-languages__tag"
                        size={'sm'}
                        variant={'solid'}
                        colorScheme='purple'>
                        <TagLabel>
                            {item}
                        </TagLabel>
                    </Tag>
                )
            }) : null
            }
        </>
    )
}

const FrameworksTag = ({ object }) => {
    const { frameworks = [] } = object;
    return (
        <>
            {(frameworks) ? frameworks.map((item, index) => {
                return (
                    <Tag
                        key={index}
                        className="c-frameworks_tag"
                        size={'sm'}
                        variant={'solid'}
                        colorScheme='blue'>
                        <TagLabel>
                            {item}
                        </TagLabel>
                    </Tag>
                )
            }) : null
            }
        </>
    )
}

const AppsTag = ({ object }) => {
    const { apps = [] } = object;
    return (
        <>
            {(apps) ? apps.map((item, index) => {
                return (
                    <Tag
                        key={index}
                        className="c-apps_tag"
                        size={'sm'}
                        variant={'solid'}
                        colorScheme='pink'>
                        <TagLabel>
                            {item}
                        </TagLabel>
                    </Tag>
                )
            }) : null
            }
        </>
    )
}

// Create read more button component

const ReadMore = () => {
    return (
        <Button className="c-readmore__button" variant={"link"} size={'sm'} alignItems='right'>
            Read More
        </Button>
    )
}
export default function PastWorkCards({ title, techstack, text, imgsrc }) {

    return (
        <Grid className="c-pastworks" mt={8}>
            <Text
                fontSize={'md'}
                lineHeight={6}
                align={['right', 'left']}
                color='gray.100'
                as={'strong'}
                pl={[24, 0]}
                className="c-pastworks__heading">
                {title}
            </Text>
            <Flex
                className="c-pastworks__contentcontainer"
                direction={['column', 'row-reverse']}
                columnGap={4}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    className="c-pastworks__imageandtechstack"
                    mt={[8, 7]}
                    maxW={['100%', '250px']}
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
