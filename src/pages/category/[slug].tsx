import React from "react";
import { Flex } from "@chakra-ui/react";
import { fetchAPI } from "../../../lib";
import { Articles, Heading, Layout, Seo } from "../../components";
import { useRouter } from "next/router";
import { useFetch } from "../../../hooks";

const Category = ({
  category: initialCategory,
  categories: initialCategories,
}) => {
  const router = useRouter();

  const { data: categories } = useFetch("/categories", {
    initialData: initialCategories,
  });

  const { data: category } = useFetch(`/categories?slug=${router.query.slug}`, {
    initialData: initialCategory,
  });

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  const articles = category.articles.map((art) => ({
    ...art,
    category: {
      id: art.category,
      slug: router.query.slug,
      name: router.query.slug,
    },
  }));

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <Flex flexDir="column" mt={14} px={[10, 40]}>
        <Heading as="h1" size="4xl" text={category.name} />
        <Articles articles={articles} />
      </Flex>
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
