import { FlexProps } from "@chakra-ui/react";
import { ArticleProps, CategoryProps, HomepageProps } from "./Types";

export interface ArticlePageProps extends FlexProps {
  article: ArticleProps;
  categories: CategoryProps[];
  homepage: HomepageProps;
}
