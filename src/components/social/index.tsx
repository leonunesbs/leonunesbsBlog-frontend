import React from "react";
import { Icon, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { SocialProps } from "./Social";

function Social({ ...rest }: SocialProps) {
  const color = useColorModeValue("gray.700", "gray.100");
  const brand = useColorModeValue("brand.500", "brand.300");
  return (
    <Stack isInline justify="center" {...rest}>
      <NextLink href="#" as="#" passHref>
        <Link color={color} _hover={{ textDecoration: "none", color: brand }}>
          <Icon as={AiFillInstagram} w={6} h={6} />
        </Link>
      </NextLink>
    </Stack>
  );
}

export default Social;
