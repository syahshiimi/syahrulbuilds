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
export default function PastWorkCards({ title, techstack, text, imgsrc }) {

    return (
        <Flex className="c-builtcards" direction={'column'} mt='37px' >
            <Text
                fontSize={'md'}
                align={'right'}
                color='gray.100'
                as={'strong'}
                className="c-builtcards__heading">
                {title}
            </Text>
            <Container className="c-builtcards__image" mt='30px'>
                <Image
                    src={imgsrc}
                    alt='card image'
                    width={778}
                    height={477}

                />
            </Container>
            <Text
                fontSize='sm'
                align={'right'}
                as='strong'
                color='gray.300'
                className={'c-builtcards__title'}>
                Tech Stack
            </Text>
            <Wrap className="c-builtcards__container" justify={'right'} mt='1vh'>
                <LanguagesTag object={techstack} />
                <FrameworksTag object={techstack} />
                <AppsTag object={techstack} />
            </Wrap>
            <Container className="c-builtcards__shorttext" mt={'30px'}>
                <Text fontSize="sm" color={'gray.50'}>
                    {text}
                </Text>
            </Container>
        </Flex >
    )

}
