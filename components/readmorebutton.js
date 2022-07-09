import { Button } from "@chakra-ui/react";
import Link from "next/link";

const ReadMore = ({ link }) => {
  // cleanup link to remove .dx suffixull;
  let paths, newPaths;
  if (link) {
    paths = link.split(".");
    newPaths = paths[0];
  }
  return (
    <Button
      className="c-readmore__button"
      variant={"link"}
      size={"sm"}
      alignItems="right"
    >
      <Link href={`${newPaths}`}>Read More</Link>
    </Button>
  );
};

export default ReadMore;
