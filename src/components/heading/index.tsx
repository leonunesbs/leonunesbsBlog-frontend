import { Heading as ChakraHeading } from "@chakra-ui/react";
import { ReactNode } from "react";
import { HeadingProps } from "./Heading";

function Heading({ text, ...rest }: HeadingProps) {
  return (
    <ChakraHeading as="h1" size="4xl" {...rest}>
      {text?.toUpperCase()}
    </ChakraHeading>
  );
}

export default Heading;
