import { Tag, TagLabel } from "@chakra-ui/react";

const AppsTag = ({ array }) => {
  return (
    <>
      {array
        ? array.map((item, index) => {
            return (
              <Tag
                key={index}
                className="c-array_tag"
                size={"sm"}
                variant={"solid"}
                colorScheme="pink"
              >
                <TagLabel>{item}</TagLabel>
              </Tag>
            );
          })
        : null}
    </>
  );
};

export default AppsTag;
