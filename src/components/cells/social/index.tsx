import React from "react";
import {
  Icon,
  Link,
  Tooltip,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";
import { SocialProps } from "./Social";

function Social({ homepage: initialHomepage, ...rest }: SocialProps) {
  const color = useColorModeValue("gray.700", "gray.50");
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
    twitch: FaTwitch,
  };

  const socials = initialHomepage.socials.map((social) => ({
    ...social,
    icon: icons[social.name],
  }));

  return (
    <>
      <Wrap spacing={4} justify="center" {...rest}>
        {socials.map((social) => {
          return (
            <WrapItem key={social.id}>
              <Tooltip
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
                  p={1}
                >
                  <Icon id={social.name} as={social.icon} w={8} h={8} />
                </Link>
              </Tooltip>
            </WrapItem>
          );
        })}
      </Wrap>
      <Link
        isExternal
        href="https://leonunesbs.com.br"
        textAlign="center"
        color={color}
        fontSize="sm"
        _hover={{ textDecoration: "none", color: brand }}
      >
        leonunesbs.com.br
      </Link>
    </>
  );
}

export default Social;
