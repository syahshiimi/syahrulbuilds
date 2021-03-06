import {
  Container,
  Wrap,
  Box,
  Text,
  Flex,
  Tag,
  TagLabel,
  Grid,
  LightMode,
} from "@chakra-ui/react";
import Image from "next/image";

// Import Tag Components
import LanguagesTag from "./card-tags/languagestag";
import FrameworksTag from "./card-tags/frameworkstag";
import AppsTag from "./card-tags/appstag";

// Import Button
import ReadMore from "/components/readmorebutton";

export default function CurrentWorkCards({
  title,
  languages,
  apps,
  frameworks,
  text,
  imgsrc,
  color,
}) {
  return (
    <Grid className="c-currentworks" mt={10}>
      <Text
        fontSize={"md"}
        lineHeight={6}
        textAlign={["left", "right"]}
        color={color.titleColor}
        as={"strong"}
        pr={[24, 0]}
        className="c-currentworks__heading"
      >
        {title}
      </Text>
      <Flex
        direction={["column", "column", "row"]}
        columnGap={12}
        className="c-currentworks__contentcontainer"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          mt={[8, 7]}
          className="c-currentworks__imageandtechstack"
          maxW={["100%", "100%", "330px"]}
        >
          <Image src={imgsrc} alt="card image" width={778} height={477} />
          <Text
            fontSize="sm"
            align={"left"}
            mt={4}
            as="strong"
            color={color.techstackColor}
            className={"c-currentworks__title"}
          >
            Tech Stack
          </Text>
          <Wrap
            className="c-currentworks__tagscontainer"
            justify={"left"}
            mt={3}
          >
            <LightMode>
              <LanguagesTag array={languages} />
              <FrameworksTag array={frameworks} />
              <AppsTag array={apps} />
            </LightMode>
          </Wrap>
        </Box>
        <Container
          className="c-currentworks__shorttext"
          mt={[8, 7]}
          p={[null, 0]}
        >
          <Text fontSize="sm" color={color.contentColor} align={"right"} mb={2}>
            {text}
          </Text>
          <ReadMore />
        </Container>
      </Flex>
    </Grid>
  );
}
