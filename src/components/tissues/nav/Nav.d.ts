import { CollapseProps, FlexProps, UseDisclosureProps } from "@chakra-ui/react";
import { CategoryProps, HomepageProps } from "../../../types/Types";

export interface NavProps extends FlexProps {
  categories: CategoryProps[];
  homepage: HomepageProps;
}

interface UseDisclosureExtendedProps extends UseDisclosureProps {
  onToggle: () => void;
}

export interface LeftNavProps {}
export interface RightNavProps {
  categories: CategoryProps[];
  mobileNavDisclosure: UseDisclosureExtendedProps;
}

export interface MobileNavProps extends CollapseProps {
  mobileNavDisclosure: UseDisclosureExtendedProps;
  categories: CategoryProps[];
  homepage: HomepageProps;
}
