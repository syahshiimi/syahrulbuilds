import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

// Components
import PastWorkCards from "../../components/pastworkcards";

// Import Data
import { PastWorksContent } from "../../data/pastworks";

export default function PastWorks() {
    return (
        <Container className="c-homecontent__pastworks" maxW={['container.sm', 'container.md']} px={[0]}>
            < Box className="c-pastworks__textcontainer" mt={94} >
                <Heading
                    fontSize={["lg", 'lg', 'xl']}
                    color='orange.100'
                    mb={[5, 4]}
                    textAlign={['left']}
                    className="c-pastworks__textheading">
                    What I&apos;ve Built
                </Heading>
                <Text className="c-pastworks__content"
                    fontSize={['sm', 'md']}
                    color='gray.50'
                    lineHeight={5}
                    fontWeight='medium'
                >
                    I&apos;ve spent time working with institutions working on grant projects. I enjoy working on research projects especially in the humanities as they are often impactful in nature.
                </Text>
            </Box >
            <Flex className="c-pastworks_cardcontainer" direction={'column'}>
                {Object.entries(PastWorksContent).map(([key, value]) => {
                    // Destructure returned objects
                    const { title, imgsrc, techstack, WorkInfo } = value
                    return (
                        <PastWorkCards
                            key={key}
                            title={title}
                            imgsrc={imgsrc}
                            techstack={techstack}
                            text={WorkInfo} />
                    )
                })
                }
            </Flex>
        </Container >

    )
}
