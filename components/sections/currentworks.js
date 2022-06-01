import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

// Components
import CurrentWorkCard from "../../components/currentworkscard";

// Import Data
import { CurrentWorks } from "../../data/currentworks";

export default function CurrentWorksContent() {
    return (
        <Box className="c-homecontent__currentworks">
            <Box className="c-currentworks__textcontainer" mt={94}>
                <Heading
                    size={'md'}
                    color='pink.100'
                    mb={[5, 4]}
                    textAlign={['center', 'left']}
                    className="c-currentworks__textheading">
                    What I&apos;m Building
                </Heading>
                <Text className="c-currentworks__content"
                    fontSize={['sm', 'md']}
                    color='gray.50'
                >
                    I&apos;ve spent time working with institutions working on grant projects. I enjoy working on research projects especially in the humanities as they are often impactful in nature.
                </Text>
            </Box>
            <Flex className="c-currentworks_cardcontainer" direction={'column'}>
                {Object.entries(CurrentWorks).map(([key, value]) => {
                    // Destructure returned objects
                    const { title, imgsrc, techstack, WorkInfo } = value
                    return (
                        <CurrentWorkCard
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
