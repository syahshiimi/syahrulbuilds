import { Box, Container, Tag, TagLabel, Text, Wrap } from "@chakra-ui/react";
import { FrameworksLang } from "../../data/languages";


export default function Frameworks() {
    return (
        <Box frameworks='c-frameworks__container'>
            <Text as={'strong'} fontSize='md' lineHeight={'6'}>Franeworks</Text>
            <Wrap className="c-languages_languages" mt={'11px'}>
                {Object.entries(FrameworksLang).map(([key, value]) => {
                    return (
                        <Tag
                            colorScheme='blue'
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
