import { Box, Container, Tag, TagLabel, TagLeftIcon, Text, Wrap } from "@chakra-ui/react";
import { KnownApps } from "../../data/languages";
import { HiOutlineBriefcase } from "react-icons/hi";


export default function Apps() {
    return (
        <Box className="c-apps__container">
            <Text as={'strong'} fontSize='md' lineHeight={'6'} fontWeight='semibold'>Apps</Text>
            <Wrap className="c-languages_languages" mt={3}>
                {Object.entries(KnownApps).map(([key, value]) => {
                    return (
                        <Tag
                            colorScheme='pink'
                            size='sm'
                            variant={'solid'}
                            key={key}>
                            <TagLeftIcon boxSize={'12px'} as={HiOutlineBriefcase} />
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
