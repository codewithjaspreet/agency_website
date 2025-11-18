import { GetStaticProps, NextPage } from "next";
import LegacyHead from "../components/LegacyHead";
import LegacyBody from "../components/LegacyBody";
import { getLegacyHtmlSections } from "../lib/legacyHtml";

type PageProps = {
  headHtml: string;
  bodyHtml: string;
};

const HomePage: NextPage<PageProps> = ({ headHtml, bodyHtml }) => (
  <>
    <LegacyHead headHtml={headHtml} />
    <LegacyBody bodyHtml={bodyHtml} />
  </>
);

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const { head, body } = getLegacyHtmlSections("page.html");

  return {
    props: {
      headHtml: head,
      bodyHtml: body,
    },
  };
};

export default HomePage;

