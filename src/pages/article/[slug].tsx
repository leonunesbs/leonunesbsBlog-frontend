import React from "react";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Seo, Layout, Image, Heading } from "../../components";
import { getStrapiMedia, fetchAPI } from "../../../libs";
import { Divider, Flex, Stack, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useFetch } from "../../../hooks";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { ArticlePageProps } from "./Article";

const Article = ({
  article: initialArticle,
  categories: initialCategories,
  homepage,
}: ArticlePageProps) => {
  const router = useRouter();
  const color = useColorModeValue("gray.700", "gray.100");
  const bg = useColorModeValue("gray.100", "gray.700");

  const { data: categories } = useFetch("/categories", {
    initialData: initialCategories,
  });

  const { data: article } = useFetch(
    `/articles?slug=${router.query.slug}&status=published`,
    {
      initialData: initialArticle,
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
          <Heading
            text={article.title}
            color={color}
            fontFamily="Staatliches"
          />
        </Flex>
      </Flex>
      <Flex flexDir="column" px={[10, 40]} my={10} w="100vw" textColor={color}>
        <Flex textAlign="justify" flexDir="column">
          <ReactMarkdown
            source={article.content}
            escapeHtml={false}
            renderers={ChakraUIRenderer()}
          />
        </Flex>
        <Divider mt={6} mb={2} maxW="10%" minW="120px" />
        <Stack isInline>
          <Flex>
            {article.author?.picture && (
              <Image
                image={article.author.picture}
                position="static"
                borderRadius="full"
                boxSize="30px"
              />
            )}
          </Flex>
          <Flex flexDir="column">
            <Text>By {article.author?.name}</Text>
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
