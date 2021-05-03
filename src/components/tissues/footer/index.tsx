import React from "react";
import {
  Flex,
  useColorModeValue,
  Image as ChakraImage,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { Divider, Social } from "../..";

function Footer({ categories, homepage }) {
  const bg = useColorModeValue("gray.200", "gray.800");

  const logoSrc = useColorModeValue(
    "/static/logo-light-notext.svg",
    "/static/logo-dark-notext.svg"
  );
  const altSrc = useColorModeValue("logo-light-notext", "logo-dark-notext");
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
      <NextLink as="/" href="/">
        <a>
          <ChakraImage
            objectFit="contain"
            boxSize={["80px", "100px"]}
            minW="80px"
            src={logoSrc}
            alt={altSrc}
          />
        </a>
      </NextLink>
      <Divider my={4} maxW="50%" />
      <Social homepage={homepage} />
    </Flex>
  );
}

export default Footer;
