import { Box, Container, Tag, TagLabel, TagLeftIcon, Text, Wrap } from "@chakra-ui/react";
import { HiOutlineTerminal } from 'react-icons/hi';

// import sorter function
import { Sorter } from "../../utils/sorter";


export default function Languages({ object }) {

    const SortArr = Sorter(object);

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
