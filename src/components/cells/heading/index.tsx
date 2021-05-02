import { Heading as ChakraHeading, useColorModeValue } from "@chakra-ui/react";
import { HeadingProps } from "./Heading";

function Heading({ text, ...rest }: HeadingProps) {
  const color = useColorModeValue("gray.700", "gray.100");
  return (
    <ChakraHeading as="h1" color={color} size="4xl" {...rest}>
      {text?.toUpperCase()}
    </ChakraHeading>
  );
}

export default Heading;
