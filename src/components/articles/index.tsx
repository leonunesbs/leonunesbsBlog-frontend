import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { dynamicSort } from "../../../libs";
import Card from "../card";

const Articles = ({ articles: initialArticles }) => {
  const [articles, setArticles] = useState(initialArticles);
  useEffect(() => {
    setArticles(articles.sort(dynamicSort("-publishedAt")));
  }, [articles]);

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
              justify="center"
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
