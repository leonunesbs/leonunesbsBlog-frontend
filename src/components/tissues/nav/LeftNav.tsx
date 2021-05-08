import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Logo, LogoNoText } from "../../cells";
import { LeftNavProps } from "./Nav";
import NextLink from "next/link";

function LeftNav({ mobileNavDisclosure, ...rest }: LeftNavProps) {
  return (
    <Flex align="center">
      <NextLink as="/" href="/" passHref>
        <Link>
          {mobileNavDisclosure.isOpen ? (
            <Flex
              h={["58px", "80px", "100px"]}
              w={["160px", "256px", "320px"]}
              transition="width 0.5s, height 0.5s, transform 0.8s"
            >
              <Logo />
            </Flex>
          ) : (
            <Flex
              transition="width 0.5s, height 0.5s, transform 0.8s"
              h={["48px", "60px", "80px", "120px"]}
              w={["48px", "70px", "180px", "256px"]}
            >
              <Logo display={["none", "none", "flex"]} />
              <LogoNoText display={["flex", "flex", "none"]} />
            </Flex>
          )}
        </Link>
      </NextLink>
    </Flex>
  );
}

export default LeftNav;
