import React from "react";
import { Flex, Link } from "@chakra-ui/react";

const Nav = ({ categories }) => {
  return (
    <Flex px={6} py={4} boxShadow="sm">
      <Flex as="nav" flexGrow={1} justify="space-between">
        <Flex>
          <Link href="/" fontWeight="bold" _hover={{ textDecoration: "none" }}>
            leonunesbsBlog
          </Link>
        </Flex>
        <Flex>
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                mx={2}
                _hover={{ textDecoration: "none" }}
              >
                {category.name.toUpperCase()}
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
