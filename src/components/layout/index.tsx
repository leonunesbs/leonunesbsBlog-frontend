import { Flex } from "@chakra-ui/layout";
import Nav from "../nav";

const Layout = ({ children, categories }) => (
  <Flex w="100vw" h="100vh" flexDir="column" overflow="hidden">
    <Nav categories={categories} />
    <Flex flexDir="column" w="100%" h="100%" overflow="scroll">
      {children}
    </Flex>
  </Flex>
);

export default Layout;
