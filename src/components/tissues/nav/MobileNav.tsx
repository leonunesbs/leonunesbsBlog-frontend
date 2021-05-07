import {
  Button,
  Collapse,
  Divider,
  Flex,
  Icon,
  LinkBox,
  LinkOverlay,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { BsArrowReturnRight } from "react-icons/bs";
import { MobileNavProps } from "./Nav";
import { Social } from "../../cells";
import { useRouter } from "next/router";

function MobileNav({
  mobileNavDisclosure,
  categories,
  homepage,
  ...rest
}: MobileNavProps) {
  const color = useColorModeValue("gray.700", "gray.50");
  const brand = useColorModeValue("brand.500", "brand.300");
  const router = useRouter();

  return (
    <Collapse in={mobileNavDisclosure.isOpen} animateOpacity unmountOnExit>
      <Stack p={4} mt="4">
        {categories.map((category) => {
          return (
            <Flex key={category.id} align="center">
              <Icon as={BsArrowReturnRight} w={6} h={4} mx={1} color={color} />
              <LinkBox>
                <Button
                  p={0}
                  isActive={router.query.slug === category.name}
                  bgColor="transparent"
                  color={color}
                  _focus={{}}
                  _hover={{ color: brand }}
                  _active={{ color: brand }}
                  onClick={mobileNavDisclosure.onClose}
                >
                  <NextLink
                    as={`/category/${category.slug}`}
                    href="/category/[slug]"
                    passHref
                  >
                    <LinkOverlay>{category.name.toUpperCase()}</LinkOverlay>
                  </NextLink>
                </Button>
              </LinkBox>
            </Flex>
          );
        })}
        <Divider />
        <Social homepage={homepage} />
      </Stack>
    </Collapse>
  );
}

export default MobileNav;
