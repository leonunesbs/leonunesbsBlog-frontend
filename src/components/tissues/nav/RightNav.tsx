import { Flex, Icon, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { ColorModeSwitch } from "../..";
import NextLink from "next/link";
import { RightNavProps } from "./Nav";

function RightNav({ categories, mobileNavDisclosure }: RightNavProps) {
  const color = useColorModeValue("gray.700", "gray.100");
  const brand = useColorModeValue("brand.500", "brand.300");
  return (
    <Stack isInline spacing={6} align="center">
      <ColorModeSwitch />
      {categories.map((category) => {
        return (
          <Flex key={category.id} display={["none", "none", "flex"]}>
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
      <Icon
        as={IoMdMenu}
        display={["flex", "flex", "none"]}
        w={6}
        h={6}
        onClick={mobileNavDisclosure.onToggle}
        color={mobileNavDisclosure.isOpen ? brand : color}
        _hover={{ color: brand }}
        cursor="pointer"
      />
    </Stack>
  );
}

export default RightNav;
