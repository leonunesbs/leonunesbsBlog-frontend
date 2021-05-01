import Articles from "../../components/articles";
import { fetchAPI } from "../../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Flex } from "@chakra-ui/react";
import { Heading } from "../../components";

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <section>
        <Flex flexDir="column" mt={14} px={[2, 52]}>
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
    fallback: false,
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
