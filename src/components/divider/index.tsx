import { Flex, useColorModeValue } from "@chakra-ui/react";
import { DividerProps } from "./Divider";

function Divider({ ...rest }: DividerProps) {
  const color = useColorModeValue("gray.700", "gray.100");

  return <Flex h="1px" w="100%" bgColor={color} {...rest} />;
}

export default Divider;
