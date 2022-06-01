import { Box, Container, Tag, TagLabel, TagLeftIcon, Text, Wrap } from "@chakra-ui/react";
import { ProgrammingLang } from "../../data/languages";
import { HiOutlineTerminal } from 'react-icons/hi';


export default function Languages() {
    return (
        <Box className='c-languages__container'>
            <Text as={'strong'} fontSize='md' lineHeight={'6'} fontWeight='semibold'>Languages</Text>
            <Wrap className="c-languages_languages" mt={3}>
                {Object.entries(ProgrammingLang).map(([key, value]) => {
                    return (
                        <Tag
                            colorScheme='purple'
                            size='sm'
                            variant={'solid'}
                            key={key}>
                            <TagLeftIcon as={HiOutlineTerminal} />
                            <TagLabel>
                                {value}
                            </TagLabel>
                        </Tag>
                    )
                })}
            </Wrap>
        </Box>
    )

}
