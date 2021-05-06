import React from "react";
import { dynamicSort, fetchAPI } from "../../libs";
import { Flex } from "@chakra-ui/react";
import { HomeProps } from "../types/Home";
import { Layout } from "../components/organs";
import { Heading, Seo } from "../components/cells";
import { Articles } from "../components/tissues";

const Home = ({ articles, categories, homepage }: HomeProps) => {
  return (
    <Layout categories={categories} homepage={homepage}>
      <Seo
        metaDescription={homepage.seo.metaDescription}
        metaTitle={homepage.seo.metaTitle}
        shareImage={homepage.seo.shareImage}
      />
      <Flex flexDir="column" w="100%" my={14} px={[4, 8, 20, 32]}>
        <Heading text={homepage.hero.title} />
        <Articles articles={articles} />
      </Flex>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [initialArticles, initialCategories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  // Ordering categories
  const categories = initialCategories.sort(dynamicSort("position"));

  // Ordering articles
  const articles = initialArticles.sort(dynamicSort("-publishedAt"));

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
