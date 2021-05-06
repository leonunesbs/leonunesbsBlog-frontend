import {
  Button,
  Flex,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import NextLink from "next/link";
import { RightNavProps } from "./Nav";
import React from "react";
import { ColorModeSwitch } from "../../cells";
import { Squash as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";

function RightNav({ categories, mobileNavDisclosure }: RightNavProps) {
  const theme = useTheme();
  const router = useRouter();

  const color = useColorModeValue("gray.700", "gray.50");
  const brand = useColorModeValue("brand.500", "brand.300");
  const hamburgerActiveColor = useColorModeValue(
    theme.colors.brand[500],
    theme.colors.brand[300]
  );

  const hamburgerDefaultColor = useColorModeValue(
    theme.colors.gray[700],
    theme.colors.gray[50]
  );

  return (
    <>
      <Stack isInline spacing={6} align="center">
        <ColorModeSwitch />
        {categories.map((category) => {
          return (
            <Flex key={category.id} display={["none", "none", "none", "flex"]}>
              <LinkBox>
                <Button
                  p={0}
                  isActive={router.query.slug === category.name}
                  bgColor="transparent"
                  color={color}
                  _focus={{}}
                  _hover={{ color: brand }}
                  _active={{ color: brand }}
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
        <Flex display={["flex", "flex", "flex", "none"]} cursor="pointer">
          <Hamburger
            size={25}
            distance="sm"
            color={
              mobileNavDisclosure.isOpen
                ? hamburgerActiveColor
                : hamburgerDefaultColor
            }
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
