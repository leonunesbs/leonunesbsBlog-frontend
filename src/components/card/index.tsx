import { Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { BsArrowReturnRight } from "react-icons/bs";
import React from "react";
import { Heading } from "..";
import Image from "../image";

const Card = ({ article, ...rest }) => {
  const color = useColorModeValue("gray.700", "gray.100");
  const brand = useColorModeValue("brand.500", "brand.300");
  const bg = useColorModeValue("gray.200", "gray.800");
  return (
    <Flex flexDir="column" minW="180px" p={1} justify="center" {...rest}>
      <Link
        color={color}
        href={`/article/${article.slug}`}
        _hover={{ textDecoration: "none", color: brand }}
      >
        <Flex flexDir="column" _hover={{ bgColor: bg }}>
          <Image image={article.image} objectFit="cover" />
          <Flex p={[4, 10]}>
            <Icon as={BsArrowReturnRight} w={6} h={4} mx={1} />
            <Flex flexDir="column">
              <Heading
                fontWeight="bold"
                as="h4"
                text={article.category?.name || "Sem categoria"}
                fontSize="lg"
                mb={4}
              />
              <Text fontSize="xl" lineHeight={1.4} letterSpacing={0.5}>
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
