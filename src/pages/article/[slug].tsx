import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { Seo, Layout, Image, Heading } from "../../components";
import { getStrapiMedia, fetchAPI } from "../../../lib";
import { Divider, Flex, Stack, Text } from "@chakra-ui/layout";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);
  console.log(article);
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <Flex
        id="banner"
        backgroundImage={`url(${imageUrl})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        align="center"
        justify="center"
        w="100%"
        py={60}
      >
        <Heading
          text={article.title}
          color="white"
          textAlign="center"
          fontFamily="Staatliches"
        />
      </Flex>
      <Flex flexDir="column" px={[4, 20, 40, 52]} mt={10} w="100vw">
        <Flex textAlign="justify" flexDir="column">
          <ReactMarkdown source={article.content} escapeHtml={false} />
        </Flex>
        <Divider mt={6} mb={2} maxW="5%" />
        <Stack isInline>
          <Flex>
            {article.author.picture && (
              <Image
                image={article.author.picture}
                position="static"
                borderRadius="full"
                boxSize="30px"
              />
            )}
          </Flex>
          <Flex flexDir="column">
            <Text>By {article.author.name}</Text>
            <Text fontWeight="thin" fontSize="sm">
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
