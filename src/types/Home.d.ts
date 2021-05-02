import { FlexProps } from "@chakra-ui/react";
import { ArticleProps, CategoryProps, HomepageProps } from "./Types";

export interface HomeProps extends FlexProps {
  articles: ArticleProps[];
  categories: CategoryProps[];
  homepage: HomepageProps;
}
