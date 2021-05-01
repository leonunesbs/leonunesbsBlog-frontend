import { getStrapiMedia } from "../../../lib/media";
import { Image as ChakraImage } from "@chakra-ui/react";

const Image = ({ image, ...rest }) => {
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
