import { GetStaticProps, NextPage } from "next";
import LegacyHead from "../../components/LegacyHead";
import LegacyBody from "../../components/LegacyBody";
import { getLegacyHtmlSections } from "../../lib/legacyHtml";

type WorkIndexProps = {
  headHtml: string;
  bodyHtml: string;
};

const WorkIndexPage: NextPage<WorkIndexProps> = ({ headHtml, bodyHtml }) => (
  <>
    <LegacyHead headHtml={headHtml} />
    <LegacyBody bodyHtml={bodyHtml} />
  </>
);

export const getStaticProps: GetStaticProps<WorkIndexProps> = async () => {
  const { head, body } = getLegacyHtmlSections("work/page.html");

  return {
    props: {
      headHtml: head,
      bodyHtml: body,
    },
  };
};

export default WorkIndexPage;

