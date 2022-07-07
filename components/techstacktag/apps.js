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
import { HiOutlineBriefcase } from "react-icons/hi";
import { Sorter } from "../../lib/sorter";

export default function Apps({ object, color }) {
  const skillsColor = useColorModeValue("gray.700", "white");

  const SortArr = Sorter(object);
  return (
    <Box className="c-apps__container">
      <Text
        as={"strong"}
        fontSize="md"
        lineHeight={"6"}
        color={skillsColor}
        fontWeight="semibold"
      >
        Apps
      </Text>
      <LightMode>
        <Wrap className="c-languages_languages" mt={3}>
          {SortArr.map((value, index) => {
            return (
              <Tag
                colorScheme="pink"
                size={["sm", null, "md"]}
                variant={"solid"}
                key={index}
              >
                <TagLeftIcon boxSize={"12px"} as={HiOutlineBriefcase} />
                <TagLabel>{value}</TagLabel>
              </Tag>
            );
          })}
        </Wrap>
      </LightMode>
    </Box>
  );
}
