import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

// Components
import PastWorkCards from "../../components/pastworkcards";

// Import Data
import { PastWorks } from "../../data/pastworks";

export default function PastWorksContent() {
    return (
        <Box className="c-homecontent__pastworks">
            <Box className="c-pastworks__textcontainer" mt={94}>
                <Heading
                    size={'md'}
                    color='orange.100'
                    mb={5}
                    textAlign={'center'}
                    className="c-pastworks__textheading">
                    What I&apos;ve Built
                </Heading>
                <Text className="c-pastworks__content"
                    fontSize={'sm'}
                    color='gray.50'
                >
                    I&apos;ve spent time working with institutions working on grant projects. I enjoy working on research projects especially in the humanities as they are often impactful in nature.
                </Text>
            </Box>
            <Flex className="c-pastworks_cardcontainer" direction={'column'}>
                {Object.entries(PastWorks).map(([key, value]) => {
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

        </Box>

    )

}
