import React from "react";
import { Flex } from "@chakra-ui/react";
import { fetchAPI } from "../../../lib";
import { Articles, Heading, Layout, Seo } from "../../components";
import { useRouter } from "next/router";

const Category = ({ category, categories }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <section>
        <Flex flexDir="column" mt={14} px={[2, 20]}>
          <Heading as="h1" size="4xl" text={category.name} />
          <Articles articles={category.articles} />
        </Flex>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
  const categories = await fetchAPI("/categories");

  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default Category;
