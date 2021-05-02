import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "../card";

function dynamicSort(property: string) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

const Articles = ({ articles: initialArticles }) => {
  const [articles, setArticles] = useState(initialArticles);
  useEffect(() => {
    setArticles(articles.sort(dynamicSort("publishedAt")));
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
