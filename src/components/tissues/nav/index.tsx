import React, { useRef } from "react";
import {
  Flex,
  useColorModeValue,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import { NavProps } from "./Nav";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";
import MobileNav from "./MobileNav";

const Nav = ({ categories, homepage }: NavProps) => {
  const mobileNavDisclosure = useDisclosure();

  // Outside click
  const navRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: navRef,
    handler: () => mobileNavDisclosure.onClose(),
  });

  const bg = useColorModeValue("gray.200", "gray.800");

  return (
    <Flex
      ref={navRef}
      px={[4, 8, 20, 32]}
      py={4}
      boxShadow="md"
      bgColor={bg}
      flexDir="column"
    >
      <Flex as="nav" flexGrow={1} justify="space-between">
        <LeftNav mobileNavDisclosure={mobileNavDisclosure} />
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
