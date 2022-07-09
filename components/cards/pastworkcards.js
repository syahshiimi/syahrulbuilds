import {
  Container,
  Wrap,
  Box,
  Grid,
  Text,
  Flex,
  Tag,
  TagLabel,
  Button,
  GridItem,
  Spacer,
  LightMode,
} from "@chakra-ui/react";
import Image from "next/image";

// Import Tag Components
import LanguagesTag from "./card-tags/languagestag";
import FrameworksTag from "./card-tags/frameworkstag";
import AppsTag from "./card-tags/appstag";

// Import Button
import ReadMore from "../readmorebutton";

export default function PastWorkCards({
  title,
  languages,
  apps,
  frameworks,
  text,
  imgsrc,
  color,
}) {
  return (
    <Grid className="c-pastworks" mt={10}>
      <Text
        fontSize={"md"}
        lineHeight={6}
        align={["right", "right", "left"]}
        color={color.titleColor}
        as={"strong"}
        pl={[24, 0]}
        className="c-pastworks__heading"
      >
        {title}
      </Text>
      <Flex
        className="c-pastworks__contentcontainer"
        direction={["column", "column", "row-reverse"]}
        columnGap={[null, null, 8]}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          className="c-pastworks__imageandtechstack"
          mt={[8, 7]}
          maxW={["100%", "100%", "330px"]}
        >
          <Image src={imgsrc} alt="card image" width={778} height={477} />
          <Text
            fontSize="sm"
            as="strong"
            mt={4}
            textAlign={"right"}
            color={color.techstackColor}
            className={"c-pastworks__title"}
          >
            Tech Stack
          </Text>
          <Wrap
            className="c-pastworks__card-tagscontainer"
            justify={"right"}
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
          className="c-pastworks__shorttextcontainer"
          mt={[8, 7]}
          p={[null, 0]}
          display="flex"
          flexGrow={1}
          flexDirection={"column"}
          alignItems="end"
        >
          <Text
            className="c-pastworks__shorttext"
            fontSize="sm"
            color={color.contentColor}
            mb={2}
          >
            {text}
          </Text>
          <ReadMore />
        </Container>
      </Flex>
    </Grid>
  );
}
