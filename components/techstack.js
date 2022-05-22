import { Box, Heading, Text } from '@chakra-ui/react';
import Languages from "../components/languages";
import Frameworks from "../components/frameworks";
export default function TechStack() {
    return (
      <Box className="c-homecontent__techstack" mt="94px" color={'gray.50'}>
        <Heading size="md" lineHeight="6" color="purple.100" mb="21px">
          My Tech Stack
        </Heading>
        <Text size="sm" lineHeight="5" mb={'50px'}>
          Apart from my tech stack, I have also acquired skills that were
          related to arts and design such as the{" "}
          <Text as="span" color="red.400">
            Adobe Creative Cloud Suite
          </Text>{" "}
          and proficiency in graphics and media related content.
        </Text>
        <Box className='c-homecontent__languages'>
        <Languages/>
        <Frameworks/>
        </Box>
      </Box>

    )

}
