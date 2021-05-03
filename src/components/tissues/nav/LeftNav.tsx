import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../cells/logo";
import { LeftNavProps } from "./Nav";
import NextLink from "next/link";

function LeftNav({ ...rest }: LeftNavProps) {
  return (
    <Flex align="center">
      <NextLink as="/" href="/" passHref>
        <Link>
          <Flex minW="85px" minH="85px" align="center" justify="center">
            <Logo />
          </Flex>
        </Link>
      </NextLink>
    </Flex>
  );
}

export default LeftNav;
