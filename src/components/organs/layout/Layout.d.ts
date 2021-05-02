import { FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { CategoryProps, HomepageProps } from "../../../types/Types";

export interface LayoutProps extends FlexProps {
  children: ReactNode;
  categories: CategoryProps[];
  homepage: HomepageProps;
}
