import { GetStaticProps, NextPage } from "next";
import LegacyHead from "../../components/LegacyHead";
import LegacyBody from "../../components/LegacyBody";
import { getLegacyHtmlSections } from "../../lib/legacyHtml";

type BlogIndexProps = {
  headHtml: string;
  bodyHtml: string;
};

const BlogIndexPage: NextPage<BlogIndexProps> = ({ headHtml, bodyHtml }) => (
  <>
    <LegacyHead headHtml={headHtml} />
    <LegacyBody bodyHtml={bodyHtml} />
  </>
);

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const { head, body } = getLegacyHtmlSections("blog/page.html");

  return {
    props: {
      headHtml: head,
      bodyHtml: body,
    },
  };
};

export default BlogIndexPage;

