/**
 * @typedef {import("@prismicio/client").Content.HeadingSlice} HeadingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeadingSlice>} HeadingProps
 * @param {HeadingProps}
 */

import { PrismicRichText } from "@prismicio/react";
import "../../app/globals.css";

const Heading = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
    </section>
  );
};

export default Heading;
