import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { dynamicSort, fetchAPI } from "../../../libs";
import { useRouter } from "next/router";
import { useFetch } from "../../../hooks";
import { Seo } from "../../components/cells";
import { Layout } from "../../components/organs";
import { Articles } from "../../components/tissues";
import { ArticleProps, CategoryProps, HomepageProps } from "../../types/Types";
import { SeoProps } from "../../components/cells/seo/Seo";

const Category = ({
  category: initialCategory,
  categories: initialCategories,
  homepage,
}) => {
  const router = useRouter();

  const { data: categories } = useFetch("/categories", {
    initialData: initialCategories,
    refreshInterval: 2,
  });

  const { data: category } = useFetch(`/categories?slug=${router.query.slug}`, {
    initialData: initialCategory,
    refreshInterval: 2,
  });

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  const seo: SeoProps = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  const articles: ArticleProps[] = category.articles.map(
    (art: ArticleProps) => ({
      ...art,
      category: {
        id: art.category,
        slug: router.query.slug,
        name: router.query.slug,
      },
    })
  );

  return (
    <Layout categories={categories} homepage={homepage}>
      <Seo metaTitle={seo.metaTitle} metaDescription={seo.metaDescription} />
      <Flex flexDir="column" my={14} px={[4, 8, 20, 32]}>
        <Heading text={category.name} />
        <Articles articles={articles} />
      </Flex>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories: CategoryProps[] = await fetchAPI("/categories");

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
  const category: CategoryProps = (
    await fetchAPI(`/categories?slug=${params.slug}`)
  )[0];
  const initialCategories: CategoryProps[] = await fetchAPI("/categories");
  const homepage: HomepageProps = await fetchAPI("/homepage");

  // Ordering categories
  const categories = initialCategories.sort(dynamicSort("position"));

  return {
    props: { category, categories, homepage },
    revalidate: 1,
  };
}

export default Category;
