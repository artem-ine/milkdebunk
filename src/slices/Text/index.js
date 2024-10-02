/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param {TextProps}
 */

import { PrismicRichText } from "@prismicio/react";

const Text = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="styled-text"
    >
      <PrismicRichText field={slice.primary.text}/>
    </section>
  );
};

export default Text;
