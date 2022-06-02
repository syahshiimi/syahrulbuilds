import { Box, Container, Tag, TagLabel, TagLeftIcon, Text, Wrap } from "@chakra-ui/react";
import { ProgrammingLang } from "../../data/languages";
import { HiOutlineTerminal } from 'react-icons/hi';


import { Sorter } from "../../utils/sorter";

export default function Languages({ object }) {

    const SortArr = Sorter(ProgrammingLang);

    return (
        <Box className='c-languages__container'>
            <Text as={'strong'} fontSize='md' lineHeight={'6'} fontWeight='semibold'>Languages</Text>
            <Wrap className="c-languages_languages" mt={3}>
                {SortArr.map((value, index) => {
                    return (
                        <Tag
                            colorScheme='purple'
                            size='sm'
                            variant={'solid'}
                            key={index}>
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
