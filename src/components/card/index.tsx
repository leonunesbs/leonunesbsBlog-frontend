import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Heading } from "..";
import Image from "../image";

const Card = ({ article, ...rest }) => {
  return (
    <Flex flexDir="column" p={1} justify="center" {...rest}>
      <Link
        href={`/article/${article.slug}`}
        _hover={{ textDecoration: "none" }}
      >
        <Flex flexDir="column" _hover={{ bgColor: "gray.100" }}>
          <Image image={article.image} objectFit="cover" />
          <Flex flexDir="column" p={6}>
            <Heading
              fontWeight="bold"
              as="h4"
              text={article.category.name}
              fontSize="md"
            />
            <Text fontSize="lg" lineHeight={1.4} letterSpacing={1.4}>
              {article.title}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
};

export default Card;
