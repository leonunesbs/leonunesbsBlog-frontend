import React from "react";
import { Flex, Link, Stack, useColorModeValue } from "@chakra-ui/react";

import NextLink from "next/link";
import { Divider, LogoNoText, Social } from "../../cells";

function Footer({ homepage }) {
  const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <Stack
      px={6}
      py={4}
      boxShadow="inner"
      minH="120px"
      bgColor={bg}
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
    </Stack>
  );
}

export default Footer;
