import { Container, Wrap, Heading, Text, Flex, Tag, TagLabel } from "@chakra-ui/react";
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
export default function CurrentWorkCards({ title, techstack, text, imgsrc }) {

    return (
        <Flex className="c-currentworks" direction={'column'} mt={8} >
            <Text
                fontSize={'md'}
                lineHeight={6}
                align={'left'}
                color='gray.100'
                as={'strong'}
                className="c-currentworks__heading">
                {title}
            </Text>
            <Container className="c-currentworks__image" mt={6}>
                <Image
                    src={imgsrc}
                    alt='card image'
                    width={778}
                    height={477}

                />
            </Container>
            <Text
                fontSize='sm'
                align={'left'}
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
            <Container className="c-currentworks__shorttext" mt={8}>
                <Text fontSize="sm" color={'gray.50'} align={'right'}>
                    {text}
                </Text>
            </Container>
        </Flex >
    )

}
