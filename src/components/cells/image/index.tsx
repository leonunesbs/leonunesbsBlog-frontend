import { getStrapiMedia } from "../../../../libs/media";
import { Image as ChakraImage } from "@chakra-ui/react";
import { ImageProps } from "./Image";

const Image = ({ image, ...rest }: ImageProps) => {
  const imageUrl = getStrapiMedia(image);
  return (
    <ChakraImage
      src={imageUrl}
      alt={image.alternativeText || image.name}
      {...rest}
    />
  );
};

export default Image;
