import React from "react";
import { Flex, Link, useColorModeValue } from "@chakra-ui/react";

import NextLink from "next/link";
import { Divider, Social } from "../..";
import { LogoNoText } from "../../cells/logo";

function Footer({ categories, homepage }) {
  const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <Flex
      px={6}
      py={4}
      boxShadow="md"
      minH="120px"
      bgColor={bg}
      flexDir="column"
      align="center"
      justify="center"
    >
      <NextLink as="/" href="/" passHref>
        <Link>
          <Flex boxSize={["85px", "100px"]} align="center" justify="center">
            <LogoNoText />
          </Flex>
        </Link>
      </NextLink>
      <Divider my={4} maxW="50%" />
      <Social homepage={homepage} />
    </Flex>
  );
}

export default Footer;
