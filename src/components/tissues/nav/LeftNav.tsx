import { Flex, Link, ScaleFade } from "@chakra-ui/react";
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
              boxSize={["65px", "100px"]}
              align="center"
              justify="center"
              transition="width 0.5s, height 0.5s, transform 0.8s"
            >
              <Logo />
            </Flex>
          ) : (
            <Flex
              boxSize={["45px", "65px", "100px"]}
              align="center"
              justify="center"
              transition="width 0.5s, height 0.5s, transform 0.8s"
            >
              <>
                <Logo display={["none", "none", "flex"]} />
                <LogoNoText display={["flex", "flex", "none"]} />
              </>
            </Flex>
          )}
        </Link>
      </NextLink>
    </Flex>
  );
}

export default LeftNav;
