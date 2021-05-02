import React, { useEffect, useRef, useState } from "react";
import {
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Link,
  Stack,
  Switch,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";
import { BsArrowReturnRight } from "react-icons/bs";
import NextLink from "next/link";
import { dynamicSort } from "../../../libs";
import { Divider, Social } from "../../components";
import { NavProps } from "./Nav";

const Nav = ({ categories: initialCategories, homepage }: NavProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navRef = useRef<HTMLDivElement>(null);

  const [userColorMode, setUserColorMode] = useState(false);
  const [categories, setCategories] = useState(initialCategories);

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.200", "gray.800");
  const color = useColorModeValue("gray.700", "gray.100");
  const brand = useColorModeValue("brand.500", "brand.300");

  // Checks colorMode and sets Switch value
  useEffect(() => {
    if (colorMode === "light") {
      setUserColorMode(true);
    } else {
      setUserColorMode(false);
    }
  }, [colorMode]);

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
          <NextLink as="/" href="/" passHref>
            <Link
              fontWeight="bold"
              color={color}
              _hover={{ textDecoration: "none", color: brand }}
            >
              leonunesbsBlog
            </Link>
          </NextLink>
        </Flex>
        <Stack isInline spacing={6} align="center">
          <FormControl display="flex" alignItems="center" p={1} mr={2}>
            <FormLabel htmlFor="color-mode-select" mb="0" display="none">
              Color mode
            </FormLabel>
            <Icon as={FiMoon} w={4} h={4} color={color} />
            <Switch
              id="color-mode-select"
              size="md"
              color={color}
              mx={2}
              onChange={toggleColorMode}
              isChecked={userColorMode}
            />
            <Icon as={FiSun} w={4} h={4} color={color} />
          </FormControl>
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
