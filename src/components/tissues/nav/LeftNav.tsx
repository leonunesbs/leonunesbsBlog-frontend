import { Flex } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../cells/logo";
import { LeftNavProps } from "./Nav";
import NextLink from "next/link";

function LeftNav({ ...rest }: LeftNavProps) {
  return (
    <Flex align="center">
      <NextLink as="/" href="/">
        <a>
          <Flex boxSize={["80px", "100px"]} minW="80px">
            <Logo />
          </Flex>
        </a>
      </NextLink>
    </Flex>
  );
}

export default LeftNav;
