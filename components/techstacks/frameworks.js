import { Box, Container, Tag, TagLabel, TagLeftIcon, Text, Wrap } from "@chakra-ui/react";
import { HiOutlineChip } from "react-icons/hi";


// imort sorter function
import { Sorter } from "../../utils/sorter";

export default function Frameworks({ object }) {
    const SortArr = Sorter(object);
    return (
        <Box frameworks='c-frameworks__container'>
            <Text as={'strong'} fontSize='md' lineHeight={'6'} fontWeight='semibold'>Franeworks</Text>
            <Wrap className="c-languages_languages" mt={3}>
                {SortArr.map((value, index) => {
                    return (
                        <Tag
                            colorScheme='blue'
                            size={['sm', null, 'md']}
                            variant={'solid'}
                            key={index}>
                            <TagLeftIcon as={HiOutlineChip} />
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
