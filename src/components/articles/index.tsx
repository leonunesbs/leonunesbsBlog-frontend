import { Flex } from "@chakra-ui/react";
import React from "react";
import Card from "../card";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <Flex flexDir="row" flexWrap="wrap" w="100%">
      <Flex flexDir="column" w={["100%", "50%"]}>
        {leftArticles.map((article) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </Flex>
      <Flex flexWrap="wrap" w={["100%", "50%"]} justify="center">
        {rightArticles.map((article) => {
          return (
            <Card
              article={article}
              key={`article__left__${article.slug}`}
              maxW={["100%", "50%"]}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Articles;
