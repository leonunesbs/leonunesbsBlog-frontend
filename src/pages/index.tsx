import React from "react";
import { fetchAPI } from "../../libs";
import { Articles, Heading, Layout, Seo } from "../components";
import { Flex } from "@chakra-ui/react";
import { HomeProps } from "../types/Home";

const Home = ({ articles, categories, homepage }: HomeProps) => {
  return (
    <Layout categories={categories} homepage={homepage}>
      <Seo
        metaDescription={homepage.seo.metaDescription}
        metaTitle={homepage.seo.metaTitle}
        shareImage={homepage.seo.shareImage}
      />
      <Flex flexDir="column" w="100%" mt={14} px={[10, 16, 24, 40]}>
        <Heading text={homepage.hero.title} />
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
