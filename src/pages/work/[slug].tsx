import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import LegacyHead from "../../components/LegacyHead";
import LegacyBody from "../../components/LegacyBody";
import { getLegacyHtmlSections } from "../../lib/legacyHtml";

const WORK_SLUGS = [
  "e-commerce-store-design",
  "modern-portfolio-website",
  "saas-platform-ui-ux",
];

type WorkDetailProps = {
  headHtml: string;
  bodyHtml: string;
};

const WorkDetailPage: NextPage<WorkDetailProps> = ({ headHtml, bodyHtml }) => (
  <>
    <LegacyHead headHtml={headHtml} />
    <LegacyBody bodyHtml={bodyHtml} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: WORK_SLUGS.map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<WorkDetailProps> = async ({
  params,
}) => {
  const slug = params?.slug;

  if (typeof slug !== "string") {
    return {
      notFound: true,
    };
  }

  const { head, body } = getLegacyHtmlSections(`work/${slug}/page.html`);

  return {
    props: {
      headHtml: head,
      bodyHtml: body,
    },
  };
};

export default WorkDetailPage;

