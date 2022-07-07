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
import { HiOutlineChip } from "react-icons/hi";

// imort sorter function
import { Sorter } from "../../lib/sorter";

export default function Frameworks({ object, color }) {
  const skillsColor = useColorModeValue("gray.700", "white");

  const SortArr = Sorter(object);
  return (
    <Box frameworks="c-frameworks__container">
      <Text
        as={"strong"}
        fontSize="md"
        lineHeight={"6"}
        color={skillsColor}
        fontWeight="semibold"
      >
        Frameworks
      </Text>
      <LightMode>
        <Wrap className="c-languages_languages" mt={3}>
          {SortArr.map((value, index) => {
            return (
              <Tag
                colorScheme="blue"
                size={["sm", null, "md"]}
                variant={"solid"}
                key={index}
              >
                <TagLeftIcon as={HiOutlineChip} />
                <TagLabel>{value}</TagLabel>
              </Tag>
            );
          })}
        </Wrap>
      </LightMode>
    </Box>
  );
}
