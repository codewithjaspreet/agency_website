import { FC } from "react";

type LegacyBodyProps = {
  bodyHtml: string;
};

const LegacyBody: FC<LegacyBodyProps> = ({ bodyHtml }) => {
  if (!bodyHtml) {
    return null;
  }

  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
};

export default LegacyBody;

