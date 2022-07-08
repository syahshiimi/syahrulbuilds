import { Tag, TagLabel } from "@chakra-ui/react";

const LanguagesTag = ({ array }) => {
  return (
    <>
      {array
        ? array.map((item, index) => {
            return (
              <Tag
                key={index}
                className="c-languages__tag"
                size={"sm"}
                variant={"solid"}
                colorScheme="purple"
              >
                <TagLabel>{item}</TagLabel>
              </Tag>
            );
          })
        : null}
    </>
  );
};

export default LanguagesTag;
