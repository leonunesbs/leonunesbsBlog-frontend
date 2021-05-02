import React from "react";
import { Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { Footer, Nav } from "../../components";

const Layout = ({ children, categories }) => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex w="100vw" minH="100vh" flexDir="column" bgColor={bg}>
      <Nav categories={categories} />
      <Flex flexDir="column" w="100%" h="100%">
        {children}
      </Flex>
      <Footer categories={categories} />
    </Flex>
  );
};

export default Layout;
