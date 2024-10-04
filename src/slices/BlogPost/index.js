/**
 * @typedef {import("@prismicio/client").Content.BlogPostSlice} BlogPostSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogPostSlice>} BlogPostProps
 * @param {BlogPostProps}
 */

import { PrismicRichText } from "@prismicio/react";

const BlogPost = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.post_author}
      <PrismicRichText field={slice.primary.post_content} />
      {slice.primary.post_date}
    </section>
  );
};

export default BlogPost;
