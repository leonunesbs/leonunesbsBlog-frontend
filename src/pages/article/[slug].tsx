import React from "react";
import { Flex, Stack, useColorModeValue, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { getStrapiMedia, fetchAPI } from "../../../libs";
import { useRouter } from "next/router";
import { useFetch } from "../../../hooks";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { ArticlePageProps } from "../../types/ArticlePage";
import { Seo, Image, Divider, Heading } from "../../components/cells";
import { Layout } from "../../components/organs";

const Article = ({
  article: initialArticle,
  categories: initialCategories,
  homepage,
}: ArticlePageProps) => {
  const router = useRouter();
  const color = useColorModeValue("gray.700", "gray.50");
  const bg = useColorModeValue("gray.50", "gray.700");

  const { data: categories } = useFetch("/categories", {
    initialData: initialCategories,
    refreshInterval: 20,
  });

  const { data: article } = useFetch(
    `/articles?slug=${router.query.slug}&status=published`,
    {
      initialData: initialArticle,
      refreshInterval: 20,
    }
  );

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  const imageUrl = getStrapiMedia(article.image);
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout categories={categories} homepage={homepage}>
      <Seo
        metaTitle={seo.metaTitle}
        metaDescription={seo.metaDescription}
        shareImage={seo.shareImage}
        article={seo.article}
      />
      <Flex
        backgroundImage={`url(${imageUrl})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        align="center"
        justify="center"
        w="100%"
        minH="800px"
        textColor={color}
        py={48}
      >
        <Flex
          bgColor={bg}
          p={6}
          mx={2}
          borderRadius="75px"
          align="center"
          justify="center"
          textAlign="center"
        >
          <Heading text={article.title} />
        </Flex>
      </Flex>
      <Flex
        flexDir="column"
        px={[2, 8, 20, 32]}
        my={10}
        w="100vw"
        textColor={color}
      >
        <ReactMarkdown
          source={article.content}
          escapeHtml={false}
          renderers={ChakraUIRenderer()}
        />
        <Divider mt={6} mb={2} maxW="10%" minW="120px" />
        <Stack isInline>
          <Flex>
            {article.author?.picture && (
              <Image
                image={article.author.picture}
                position="static"
                minH="0px"
                borderRadius="full"
                boxSize="30px"
              />
            )}
          </Flex>
          <Flex flexDir="column">
            <Text>{article.author?.name}</Text>
            <Text fontWeight="thin" fontSize="sm">
              <Moment format="D MMM YYYY" locale="pt-br">
                {article.publishedAt}
              </Moment>
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");
  const homepage = await fetchAPI("/homepage");

  return {
    props: { article: articles[0], categories, homepage },
    revalidate: 1,
  };
}

export default Article;
