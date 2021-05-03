import React from "react";
import { Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { LayoutProps } from "./Layout";
import DynamicFavicon from "../../cells/dynamicFavicon";
import { Footer, Nav } from "../../tissues";

const Layout = ({ children, categories, homepage }: LayoutProps) => {
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <>
      <DynamicFavicon />
      <Flex w="100vw" minH="100vh" flexDir="column" bgColor={bg}>
        <Nav categories={categories} homepage={homepage} />
        <Flex flexDir="column" w="100%" h="100%">
          {children}
        </Flex>
        <Footer homepage={homepage} />
      </Flex>
    </>
  );
};

export default Layout;
