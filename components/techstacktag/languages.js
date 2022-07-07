import {
  Box,
  Container,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Wrap,
  useColorModeValue,
  LightMode,
} from "@chakra-ui/react";
import { HiOutlineTerminal } from "react-icons/hi";

// import sorter function
import { Sorter } from "../../lib/sorter";

export default function Languages({ object }) {
  const skillsColor = useColorModeValue("gray.700", "white");
  const SortArr = Sorter(object);

  return (
    <Box className="c-languages__container">
      <Text
        as={"strong"}
        fontSize="md"
        lineHeight={"6"}
        color={skillsColor}
        fontWeight="semibold"
      >
        Languages
      </Text>
      <LightMode>
        {" "}
        <Wrap className="c-languages_languages" mt={3}>
          {SortArr.map((value, index) => {
            return (
              <Tag
                colorScheme="purple"
                size={["sm", null, "md"]}
                variant={"solid"}
                key={index}
              >
                <TagLeftIcon as={HiOutlineTerminal} />
                <TagLabel>{value}</TagLabel>
              </Tag>
            );
          })}
        </Wrap>
      </LightMode>
    </Box>
  );
}
