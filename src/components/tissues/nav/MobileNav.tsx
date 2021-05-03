import {
  Collapse,
  Divider,
  Flex,
  Icon,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { BsArrowReturnRight } from "react-icons/bs";
import { Social } from "../..";
import { MobileNavProps } from "./Nav";

function MobileNav({
  mobileNavDisclosure,
  categories,
  homepage,
  ...rest
}: MobileNavProps) {
  const color = useColorModeValue("gray.700", "gray.100");
  const brand = useColorModeValue("brand.500", "brand.300");

  return (
    <Collapse in={mobileNavDisclosure.isOpen} animateOpacity unmountOnExit>
      <Stack p={4} mt="4" rounded="md" display={["flex", "flex", "none"]}>
        {categories.map((category) => {
          return (
            <Flex key={category.id}>
              <Icon as={BsArrowReturnRight} w={6} h={4} mx={1} color={color} />
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
        <Divider />
        <Social homepage={homepage} />
      </Stack>
    </Collapse>
  );
}

export default MobileNav;
