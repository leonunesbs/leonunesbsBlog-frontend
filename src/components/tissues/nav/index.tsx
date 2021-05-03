import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  useColorModeValue,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import { dynamicSort } from "../../../../libs";
import { NavProps } from "./Nav";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";
import MobileNav from "./MobileNav";

const Nav = ({ categories: initialCategories, homepage }: NavProps) => {
  const mobileNavDisclosure = useDisclosure();

  // Outside click
  const navRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: navRef,
    handler: () => mobileNavDisclosure.onClose(),
  });

  const bg = useColorModeValue("gray.200", "gray.800");

  // Ordering categories
  const [categories, setCategories] = useState(initialCategories);
  useEffect(() => {
    setCategories(categories.sort(dynamicSort("position")));
  }, [categories]);

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
        <LeftNav />
        <RightNav
          categories={categories}
          mobileNavDisclosure={mobileNavDisclosure}
        />
      </Flex>
      <MobileNav
        homepage={homepage}
        categories={categories}
        mobileNavDisclosure={mobileNavDisclosure}
      />
    </Flex>
  );
};

export default Nav;
