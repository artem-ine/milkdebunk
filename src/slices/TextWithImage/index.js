/**
 * @typedef {import("@prismicio/client").Content.TextWithImageSlice} TextWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextWithImageSlice>} TextWithImageProps
 * @param {TextWithImageProps}
 */

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import "../../app/globals.css";

const TextWithImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} className="image"/>
      <PrismicRichText field={slice.primary.text}/>
    </section>
  );
};

export default TextWithImage;
