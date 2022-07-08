import { Tag, TagLabel } from "@chakra-ui/react";

const FrameworksTag = ({ array }) => {
  return (
    <>
      {array
        ? array.map((item, index) => {
            return (
              <Tag
                key={index}
                className="c-frameworks_tag"
                size={"sm"}
                variant={"solid"}
                colorScheme="blue"
              >
                <TagLabel>{item}</TagLabel>
              </Tag>
            );
          })
        : null}
    </>
  );
};

export default FrameworksTag;
