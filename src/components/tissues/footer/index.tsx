import React from "react";
import {
  Flex,
  Img,
  Link,
  Stack,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { Divider, Logo, Social } from "../../cells";

function Footer({ homepage }) {
  const bg = useColorModeValue("gray.200", "gray.800");
  const myTreeSrc = useColorModeValue("/myTree-light.png", "/myTree-dark.png");

  return (
    <Stack
      px={6}
      py={4}
      boxShadow="inner"
      minH="120px"
      bgColor={bg}
      align="center"
      justif="center"
    >
      <Wrap justify="center" align="center">
        <WrapItem>
          <NextLink as="/" href="/" passHref>
            <Link>
              <Flex boxSize="65px" align="center" justify="center">
                <Logo />
              </Flex>
            </Link>
          </NextLink>
        </WrapItem>
        <WrapItem>
          <NextLink
            href="https://mytree.leonunesbs.com.br"
            as="https://lnbs.me"
            passHref
          >
            <Link isExternal>
              <Flex boxSize="130px" align="center" justify="center">
                <Img src={myTreeSrc} alt="mytree" />
              </Flex>
            </Link>
          </NextLink>
        </WrapItem>
        <WrapItem>
          <NextLink
            href="https://portfolio.leonunesbs.com.br"
            as="https://port.lnbs.me"
            passHref
          >
            <Link isExternal>
              <Flex boxSize="65px" align="center" justify="center">
                <Img src="/portfolio.png" alt="portfolio" />
              </Flex>
            </Link>
          </NextLink>
        </WrapItem>
      </Wrap>
      <Divider my={4} maxW="50%" />
      <Social homepage={homepage} />
    </Stack>
  );
}

export default Footer;
