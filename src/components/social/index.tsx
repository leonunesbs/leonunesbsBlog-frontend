import React from "react";
import {
  Icon,
  Link,
  Stack,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import NextLink from "next/link";
import { SocialProps } from "./Social";

function Social({ homepage: initialHomepage, ...rest }: SocialProps) {
  const color = useColorModeValue("gray.700", "gray.100");
  const colorInverted = useColorModeValue("gray.200", "gray.800");
  const bg = useColorModeValue("gray.800", "gray.200");
  const brand = useColorModeValue("brand.500", "brand.300");

  const icons = {
    facebook: AiFillFacebook,
    instagram: AiFillInstagram,
    twitter: AiFillTwitterSquare,
    github: AiFillGithub,
    linkedin: AiFillLinkedin,
    whatsapp: AiOutlineWhatsApp,
  };

  const socials = initialHomepage.socials.map((social) => ({
    ...social,
    icon: icons[social.name],
  }));

  return (
    <>
      <Stack isInline spacing={4} justify="center" {...rest}>
        {socials.map((social) => {
          return (
            <Tooltip
              key={social.id}
              hasArrow
              label={social.name}
              bg={bg}
              color={colorInverted}
            >
              <Link
                color={color}
                _hover={{ textDecoration: "none", color: brand }}
                isExternal
                href={social.url}
              >
                <Icon as={social.icon} w={8} h={8} />
              </Link>
            </Tooltip>
          );
        })}
      </Stack>
      <NextLink passHref href="https://leonunesbs.vercel.app">
        <Link
          isExternal
          textAlign="center"
          color={color}
          fontSize="sm"
          _hover={{ textDecoration: "none", color: brand }}
        >
          leonunesbs.vercel.app
        </Link>
      </NextLink>
    </>
  );
}

export default Social;
