import { getStrapiMedia } from "../../../../libs";
import { Img as ChakraImage, useColorModeValue } from "@chakra-ui/react";
import { ImageProps } from "./Image";

const Image = ({ image, ...rest }: ImageProps) => {
  const imageUrl = getStrapiMedia(image);
  const brand = useColorModeValue("brand.500", "brand.300");
  return (
    <ChakraImage
      src={imageUrl}
      bgColor={brand}
      minH="150px"
      alt={image.alternativeText || image.name}
      {...rest}
    />
  );
};

export default Image;
