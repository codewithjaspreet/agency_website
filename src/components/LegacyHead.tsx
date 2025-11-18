import { FC } from "react";
import Head from "next/head";
import parse from "html-react-parser";

type LegacyHeadProps = {
  headHtml: string;
};

const LegacyHead: FC<LegacyHeadProps> = ({ headHtml }) => {
  if (!headHtml) {
    return null;
  }

  return <Head>{parse(headHtml)}</Head>;
};

export default LegacyHead;

