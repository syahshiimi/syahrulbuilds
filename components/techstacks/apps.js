import { Box, Container, Tag, Text, Wrap } from "@chakra-ui/react";
import { KnownApps } from "../../data/languages";


export default function Apps() {
    return (
        <Box className="c-apps__container">
            <Text as={'strong'} fontSize='md' lineHeight={'6'}>Apps</Text>
            <Wrap className="c-languages_languages" mt={'11px'}>
                {Object.entries(KnownApps).map(([key, value]) => {
                    return (
                        <Tag
                            colorScheme='pink'
                            size='sm'
                            variant={'solid'}
                            key={key}>
                            {value}
                        </Tag>
                    )
                })}
            </Wrap>
        </Box>
    )

}
