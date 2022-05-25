import { Box, Container, Tag, TagLabel, Text, Wrap } from "@chakra-ui/react";
import { ProgrammingLang } from "../../data/languages";


export default function Languages() {
    return (
        <Box className='c-languages__container'>
            <Text as={'strong'} fontSize='md' lineHeight={'6'}>Languages</Text>
            <Wrap className="c-languages_languages" mt={'11px'}>
                {Object.entries(ProgrammingLang).map(([key, value]) => {
                    return (
                        <Tag
                            colorScheme='purple'
                            size='sm'
                            variant={'solid'}
                            key={key}>
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
