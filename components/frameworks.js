import { Box, Container, Tag, Text, Wrap } from "@chakra-ui/react";
import { FrameworksLang } from "../data/languages";


export default function Frameworks() {
    return (
        <Box mt={'50px'}>
            <Text as={'strong'} fontSize='md' lineHeight={'6'}>Frameworks</Text>
            <Wrap className="c-languages_languages" mt={'11px'}>
                {Object.entries(FrameworksLang).map(([key, value]) => {
                    return (
                        <Tag
                            colorScheme={'blue'}
                            size='sm'
                            variant={'solid'}
                            key={key}
                        >
                            {value}
                        </Tag>
                    )
                })}
            </Wrap>
        </Box>
    )

}
