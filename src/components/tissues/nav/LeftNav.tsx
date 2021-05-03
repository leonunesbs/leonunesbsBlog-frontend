import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../cells";
import { LeftNavProps } from "./Nav";
import NextLink from "next/link";

function LeftNav({ ...rest }: LeftNavProps) {
  return (
    <Flex align="center">
      <NextLink as="/" href="/" passHref>
        <Link>
          <Flex boxSize={["65px", "100px"]} align="center" justify="center">
            <Logo />
          </Flex>
        </Link>
      </NextLink>
    </Flex>
  );
}

export default LeftNav;
