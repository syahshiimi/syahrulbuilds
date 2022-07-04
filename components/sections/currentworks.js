import { useColorModeValue, Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

// Components
import CurrentWorkCard from "../../components/currentworkscard";

// Import Data
import { CurrentWorks } from "../../data/currentworks";

export default function CurrentWorksContent() {
    const headingColor = useColorModeValue('pink.500', 'pink.100');
    const captionColor = useColorModeValue('gray.500', 'gray.50');

    // color objects to be passed as hooks for currentwork cards
    const currentworksColor = {
        titleColor: useColorModeValue('gray.700', 'gray.100'),
        techstackColor: useColorModeValue('gray.500', 'gray.300'),
        contentColor: useColorModeValue('gray.600', 'gray.50')
    }

    return (
        <Box className="c-homecontent__currentworks">
            <Box className="c-currentworks__textcontainer" mt={94}>
                <Heading
                    fontSize={["lg", 'lg', 'xl']}
                    color={headingColor}
                    mb={[5, 4]}
                    textAlign={['left']}
                    className="c-currentworks__textheading">
                    What I&apos;m Building
                </Heading>
                <Text className="c-currentworks__content"
                    fontSize={['sm', 'md']}
                    color={captionColor}
                    lineHeight={5}
                    fontWeight='medium'
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
                            color={currentworksColor}
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
