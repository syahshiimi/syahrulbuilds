import { AspectRatio, Container, Heading, Text } from "@chakra-ui/react";


export default function Cards({title}) {
    return (
        <Container className="c-builtcards">
        <Text fontSize={'md'} color='gray.100' as={'strong'} className="c-builtcards__heading">
        {title}
        </Text>
        
        </Container>
    )

}
