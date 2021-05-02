import { FlexProps } from "@chakra-ui/react";
import { CategoryProps, HomepageProps } from "../../types/Types";

export interface NavProps extends FlexProps {
  categories: CategoryProps[];
  homepage: HomepageProps;
}
