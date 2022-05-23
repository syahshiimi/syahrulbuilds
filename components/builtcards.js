import { Container, Wrap, Heading, Text, Flex, Tag } from "@chakra-ui/react";
import Image from 'next/image';


export default function PastWorkCards({ title, techstack, text, imgsrc }) {

    return (
        <Flex className="c-builtcards" direction={'column'} mt='37px'>
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
            <Text fontSize='sm' align={'right'} as='strong' color='gray.300' className={'c-builtcards__title'}>
                Tech Stack
            </Text>
            <Wrap className="c-builtcards__container" justify={'right'} mt='1vh'>
                {Object.entries(techstack).map(([key, value]) => {
                    return (
                        <Tag
                            className="c-builtcards__tags"
                            key={key}
                            colorScheme='teal'>{value}</Tag>
                    )
                })}
            </Wrap>
            <Container className="c-builtcards__shorttext" mt={'30px'}>
                <Text fontSize="sm" color={'gray.50'}>
                    {text}
                </Text>
            </Container>
        </Flex >
    )

}
