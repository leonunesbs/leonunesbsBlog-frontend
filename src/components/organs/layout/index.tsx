import React from "react";
import { Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { Footer, Nav } from "../..";
import { LayoutProps } from "./Layout";

const Layout = ({ children, categories, homepage }: LayoutProps) => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex w="100vw" minH="100vh" flexDir="column" bgColor={bg}>
      <Nav categories={categories} homepage={homepage} />
      <Flex flexDir="column" w="100%" h="100%">
        {children}
      </Flex>
      <Footer categories={categories} />
    </Flex>
  );
};

export default Layout;
