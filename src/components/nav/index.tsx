import React, { useEffect, useState } from "react";
import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Switch,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";
import { BsArrowReturnRight } from "react-icons/bs";

const Nav = ({ categories }) => {
  const { isOpen, onToggle } = useDisclosure();

  const [userColorMode, setUserColorMode] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.200", "gray.800");
  const color = useColorModeValue("gray.700", "gray.100");
  const brand = useColorModeValue("brand.500", "brand.300");

  useEffect(() => {
    if (colorMode === "light") {
      setUserColorMode(true);
    } else {
      setUserColorMode(false);
    }
  }, [colorMode]);

  return (
    <Flex px={6} py={4} boxShadow="md" bgColor={bg} flexDir="column">
      <Flex as="nav" flexGrow={1} justify="space-between">
        <Flex>
          <Link
            href="/"
            fontWeight="bold"
            color={color}
            _hover={{ textDecoration: "none", color: brand }}
          >
            leonunesbsBlog
          </Link>
        </Flex>
        <Stack isInline align="center" aria-label="colorMode">
          <Flex align="center" p={1} mr={2}>
            <Icon as={FiMoon} w={4} h={4} color={color} />
            <Switch
              size="md"
              color={color}
              mx={2}
              onChange={toggleColorMode}
              isChecked={userColorMode}
            />
            <Icon as={FiSun} w={4} h={4} color={color} />
          </Flex>
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                display={["none", "flex"]}
                href={`/category/${category.slug}`}
                color={color}
                _hover={{ textDecoration: "none", color: brand }}
              >
                {category.name.toUpperCase()}
              </Link>
            );
          })}
          <Icon
            as={IoMdMenu}
            display={["flex", "none"]}
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
        <Stack p={4} mt="4" rounded="md" display={["flex", "none"]}>
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
                <Link
                  color={color}
                  href={`/category/${category.slug}`}
                  _hover={{ textDecoration: "none", color: brand }}
                >
                  {category.name.toUpperCase()}
                </Link>
              </Flex>
            );
          })}
        </Stack>
      </Collapse>
    </Flex>
  );
};

export default Nav;
