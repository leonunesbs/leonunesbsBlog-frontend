import { Flex, Icon, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import NextLink from "next/link";
import { RightNavProps } from "./Nav";
import React from "react";
import { ColorModeSwitch } from "../../cells";
import { Squash as Hamburger } from "hamburger-react";

function RightNav({ categories, mobileNavDisclosure }: RightNavProps) {
  const color = useColorModeValue("gray.700", "gray.50");
  const brand = useColorModeValue("brand.500", "brand.300");
  return (
    <>
      <Stack isInline spacing={6} align="center">
        <ColorModeSwitch />
        {categories.map((category) => {
          return (
            <Flex key={category.id} display={["none", "none", "none", "flex"]}>
              <NextLink
                as={`/category/${category.slug}`}
                href="/category/[slug]"
                passHref
              >
                <Link
                  color={color}
                  _hover={{ textDecoration: "none", color: brand }}
                >
                  {category.name.toUpperCase()}
                </Link>
              </NextLink>
            </Flex>
          );
        })}
        <Flex
          display={["flex", "flex", "flex", "none"]}
          cursor="pointer"
          _hover={{ color: brand }}
          color={mobileNavDisclosure.isOpen && brand}
        >
          <Hamburger
            size={25}
            distance="sm"
            toggle={mobileNavDisclosure.onOpen}
            toggled={mobileNavDisclosure.isOpen}
            onToggle={(toggle) =>
              toggle
                ? mobileNavDisclosure.onOpen()
                : mobileNavDisclosure.onClose()
            }
          />
        </Flex>
      </Stack>
    </>
  );
}

export default RightNav;
