import React from "react";
import { fetchAPI } from "../../lib";
import { Articles, Heading, Layout, Seo } from "../components";
import { Flex } from "@chakra-ui/react";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <Flex flexDir="column" w="100%" mt={14} px={[10, 40]}>
        <Heading as="h1" size="4xl" text={homepage.hero.title} />
        <Articles articles={articles} />
      </Flex>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
