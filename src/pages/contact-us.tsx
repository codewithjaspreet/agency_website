import { GetStaticProps, NextPage } from "next";
import LegacyHead from "../components/LegacyHead";
import LegacyBody from "../components/LegacyBody";
import { getLegacyHtmlSections } from "../lib/legacyHtml";

type ContactPageProps = {
  headHtml: string;
  bodyHtml: string;
};

const ContactPage: NextPage<ContactPageProps> = ({ headHtml, bodyHtml }) => (
  <>
    <LegacyHead headHtml={headHtml} />
    <LegacyBody bodyHtml={bodyHtml} />
  </>
);

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  const { head, body } = getLegacyHtmlSections("contact-us/page.html");

  return {
    props: {
      headHtml: head,
      bodyHtml: body,
    },
  };
};

export default ContactPage;

