import { Box, Container, Tag, TagLabel, TagLeftIcon, Text, Wrap } from "@chakra-ui/react";
import { FrameworksLang } from "../../data/languages";
import { HiOutlineChip } from "react-icons/hi";


export default function Frameworks() {
    return (
        <Box frameworks='c-frameworks__container'>
            <Text as={'strong'} fontSize='md' lineHeight={'6'} fontWeight='semibold'>Franeworks</Text>
            <Wrap className="c-languages_languages" mt={'11px'}>
                {Object.entries(FrameworksLang).map(([key, value]) => {
                    return (
                        <Tag
                            colorScheme='blue'
                            size='sm'
                            variant={'solid'}
                            key={key}>
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
