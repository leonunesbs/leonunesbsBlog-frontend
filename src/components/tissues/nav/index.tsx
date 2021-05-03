import React, { useEffect, useRef, useState } from "react";
import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
  useOutsideClick,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { BsArrowReturnRight } from "react-icons/bs";
import NextLink from "next/link";
import { dynamicSort } from "../../../../libs";
import { ColorModeSwitch, Divider, Social } from "../../../components";
import { NavProps } from "./Nav";

const Nav = ({ categories: initialCategories, homepage }: NavProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navRef = useRef<HTMLDivElement>(null);

  const [categories, setCategories] = useState(initialCategories);

  const bg = useColorModeValue("gray.200", "gray.800");
  const color = useColorModeValue("gray.700", "gray.100");
  const brand = useColorModeValue("brand.500", "brand.300");

  const logoSrc = useColorModeValue(
    "/static/logo-light.svg",
    "/static/logo-dark.svg"
  );
  const altSrc = useColorModeValue("logo-light", "logo-dark");

  // Ordering categories
  useEffect(() => {
    setCategories(categories.sort(dynamicSort("position")));
  }, [categories]);

  useOutsideClick({
    ref: navRef,
    handler: () => onClose(),
  });

  return (
    <Flex
      ref={navRef}
      px={6}
      py={4}
      boxShadow="md"
      bgColor={bg}
      flexDir="column"
    >
      <Flex as="nav" flexGrow={1} justify="space-between">
        <Flex align="center">
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
        </Flex>
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
            onClick={onToggle}
            color={isOpen ? brand : color}
            _hover={{ color: brand }}
            cursor="pointer"
          />
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity unmountOnExit>
        <Stack p={4} mt="4" rounded="md" display={["flex", "flex", "none"]}>
          {categories.map((category) => {
            return (
              <Flex key={category.id}>
                <Icon
                  as={BsArrowReturnRight}
                  w={6}
                  h={4}
                  mx={1}
                  color={color}
                />
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
    </Flex>
  );
};

export default Nav;
