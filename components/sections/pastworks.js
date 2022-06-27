import { Box, Container, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

// Components
import PastWorkCards from "../../components/pastworkcards";

// Import Data
import { PastWorksContent } from "../../data/pastworks";

export default function PastWorks({ content }) {
    const headingColor = useColorModeValue('orange.500', 'orange.100');
    const captionColor = useColorModeValue('gray.500', 'gray.50');

    // color objects to be passed as hooks for pastwork cards
    const pastworksColor = {
        titleColor: useColorModeValue('gray.700', 'gray.100'),
        techstackColor: useColorModeValue('gray.500', 'gray.300'),
        contentColor: useColorModeValue('gray.600', 'gray.50')
    }

    return (
        <Container className="c-homecontent__pastworks" maxW={['container.sm', 'container.md']} px={[0]}>
            < Box className="c-pastworks__textcontainer" mt={94} >
                <Heading
                    fontSize={["lg", 'lg', 'xl']}
                    color={headingColor}
                    mb={[5, 4]}
                    textAlign={['left']}
                    className="c-pastworks__textheading">
                    What I&apos;ve Built
                </Heading>
                <Text className="c-pastworks__content"
                    fontSize={['sm', 'md']}
                    color={captionColor}
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
                            color={pastworksColor}
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
