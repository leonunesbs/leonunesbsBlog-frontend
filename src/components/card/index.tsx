import { Flex, Link, Text } from "@chakra-ui/react";
import { BsArrowReturnRight } from "react-icons/bs";
import React from "react";
import { Heading } from "..";
import Image from "../image";

const Card = ({ article, ...rest }) => {
  return (
    <Flex flexDir="column" minW="180px" p={1} justify="center" {...rest}>
      <Link
        href={`/article/${article.slug}`}
        _hover={{ textDecoration: "none" }}
      >
        <Flex flexDir="column" _hover={{ bgColor: "gray.100" }}>
          <Image image={article.image} objectFit="cover" />
          <Flex py={6}>
            <Flex as={BsArrowReturnRight} w={6} h={4} mx={1} />
            <Flex flexDir="column">
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
        </Flex>
      </Link>
    </Flex>
  );
};

export default Card;
