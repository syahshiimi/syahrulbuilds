import { Box, Container, Tag, Text, Wrap } from "@chakra-ui/react";
import { ProgrammingLang } from "../data/languages";


export default function Languages() {
    return (

        <Box>
        <Text as={'strong'} fontSize='md' lineHeight={'6'}>Languages</Text>
        <Wrap className="c-languages_languages" mt={'11px'}>
        
        {Object.entries(ProgrammingLang).map(([key, value]) => {
            return (
                <Tag colorScheme={'purple'} size='sm' variant={'solid'} key={key}>{value}</Tag>
            )
        })}
        </Wrap>
        </Box>
    )

}
