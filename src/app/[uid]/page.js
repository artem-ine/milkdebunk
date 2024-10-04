import * as prismic from "@prismicio/client"
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata({ params: { uid, lang } }) {
  const client = createClient();
  const page = await client.getByUID("blog_post", uid, {lang});

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function Page({ params: { uid, lang } }) {
  const client = createClient();
  const page = await client.getByUID("blog_post", uid, { lang });

  return (
    <div>
        <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}


export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("blog_post", {
    lang: "*",
    filters: [prismic.filter.not("my.blog_post.uid", "blog_post")],
  });

  return pages.map((page) => {
    return {
      uid: page.uid,
      lang: page.lang,
    };
  });
}