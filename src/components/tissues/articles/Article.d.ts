import { FlexProps } from "@chakra-ui/react";
import { ArticleProps } from "../../../types/Types";

export interface ArticlesComponentProps extends FlexProps {
  articles: ArticleProps[];
}
