import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import LegacyHead from "../../components/LegacyHead";
import LegacyBody from "../../components/LegacyBody";
import { getLegacyHtmlSections } from "../../lib/legacyHtml";

const BLOG_SLUGS = [
  "crafting-memorable-journeys-for-your-clients",
  "how-to-boost-your-online-presence-with-seo",
  "revolutionizing-customer-service-in-digital-spaces",
  "the-role-of-data-analytics-in-digital-marketing",
];

type BlogDetailProps = {
  headHtml: string;
  bodyHtml: string;
};

const BlogDetailPage: NextPage<BlogDetailProps> = ({ headHtml, bodyHtml }) => (
  <>
    <LegacyHead headHtml={headHtml} />
    <LegacyBody bodyHtml={bodyHtml} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: BLOG_SLUGS.map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<BlogDetailProps> = async ({
  params,
}) => {
  const slug = params?.slug;

  if (typeof slug !== "string") {
    return {
      notFound: true,
    };
  }

  const { head, body } = getLegacyHtmlSections(`blog/${slug}/page.html`);

  return {
    props: {
      headHtml: head,
      bodyHtml: body,
    },
  };
};

export default BlogDetailPage;

