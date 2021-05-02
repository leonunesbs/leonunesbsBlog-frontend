import {
  Flex,
  Icon,
  Link,
  Skeleton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsArrowReturnRight } from "react-icons/bs";
import NextLink from "next/link";
import React, { useState } from "react";
import { Heading } from "..";
import Image from "../image";
import Moment from "react-moment";

const Card = ({ article, ...rest }) => {
  const color = useColorModeValue("gray.700", "gray.100");
  const brand = useColorModeValue("brand.500", "brand.300");
  const bg = useColorModeValue("gray.200", "gray.800");
  const skeletonEndColor = useColorModeValue("gray.100", "gray.700");

  const [loading, setLoading] = useState(true);

  return (
    <Flex flexDir="column" minW="180px" p={1} {...rest}>
      <NextLink as={`/article/${article.slug}`} href="/article/[slug]" passHref>
        <Link color={color} _hover={{ textDecoration: "none", color: brand }}>
          <Flex flexDir="column" _hover={{ bgColor: bg }}>
            <Skeleton
              isLoaded={!loading}
              minH={loading ? "400px" : "0px"}
              startColor={brand}
              endColor={skeletonEndColor}
            >
              <Image
                image={article.image.formats.medium}
                objectFit="cover"
                w="100%"
                onLoad={() => setLoading(false)}
              />
            </Skeleton>
            <Flex p={[4, 10]}>
              <Icon as={BsArrowReturnRight} w={6} h={4} mx={1} />
              <Flex flexDir="column" flexGrow={1}>
                <Heading
                  fontWeight="bold"
                  as="h2"
                  text={article.category.name}
                  fontSize="lg"
                  mb={4}
                />
                <Text fontSize="xl" lineHeight={1.4} letterSpacing={0.5}>
                  {article.title}
                </Text>
                <Flex justify="flex-end">
                  <Text fontWeight="light" fontSize="sm" color={color}>
                    <Moment format="D MMM YYYY" locale="pt-br">
                      {article.publishedAt}
                    </Moment>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Link>
      </NextLink>
    </Flex>
  );
};

export default Card;
