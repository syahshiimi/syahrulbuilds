import { Container, Wrap, Box, Grid, Text, Flex, Tag, TagLabel } from "@chakra-ui/react";
import Image from 'next/image';


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
            <Flex className="c-pastworks__flexcontainer" direction={['column', 'row-reverse']} columnGap={[0, 8]}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    className="c-pastworks__imageandtechstack"
                    mt={6}>
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
                <Container className="c-pastworks__shorttext" mt={8} p={[null, 0]} >
                    <Text fontSize="sm" color={'gray.50'}>
                        {text}
                    </Text>
                </Container>
            </Flex>
        </Grid >
    )

}
