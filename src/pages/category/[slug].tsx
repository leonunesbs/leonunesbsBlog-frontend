import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { fetchAPI } from "../../../libs";
import { useRouter } from "next/router";
import { useFetch } from "../../../hooks";
import { Seo } from "../../components/cells";
import { Layout } from "../../components/organs";
import { Articles } from "../../components/tissues";

const Category = ({
  category: initialCategory,
  categories: initialCategories,
  homepage,
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
    <Layout categories={categories} homepage={homepage}>
      <Seo metaTitle={seo.metaTitle} metaDescription={seo.metaDescription} />
      <Flex flexDir="column" mt={14} px={[10, 40]}>
        <Heading text={category.name} />
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
  const homepage = await fetchAPI("/homepage");

  return {
    props: { category, categories, homepage },
    revalidate: 1,
  };
}

export default Category;
