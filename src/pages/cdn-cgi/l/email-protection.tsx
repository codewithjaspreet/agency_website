import { GetStaticProps, NextPage } from "next";
import LegacyHead from "../../../components/LegacyHead";
import LegacyBody from "../../../components/LegacyBody";
import { getLegacyHtmlSections } from "../../../lib/legacyHtml";

type EmailProtectionProps = {
  headHtml: string;
  bodyHtml: string;
};

const EmailProtectionPage: NextPage<EmailProtectionProps> = ({
  headHtml,
  bodyHtml,
}) => (
  <>
    <LegacyHead headHtml={headHtml} />
    <LegacyBody bodyHtml={bodyHtml} />
  </>
);

export const getStaticProps: GetStaticProps<EmailProtectionProps> = async () => {
  const { head, body } = getLegacyHtmlSections(
    "cdn-cgi/l/email-protection/page.html"
  );

  return {
    props: {
      headHtml: head,
      bodyHtml: body,
    },
  };
};

export default EmailProtectionPage;

