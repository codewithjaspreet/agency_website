import fs from "fs";
import path from "path";

export type LegacyHtmlSections = {
  head: string;
  body: string;
};

const extractTagContent = (html: string, tagName: "head" | "body"): string => {
  if (!html) {
    return "";
  }

  const match = new RegExp(
    `<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`,
    "i"
  ).exec(html);

  if (!match) {
    return "";
  }

  return match[1];
};

export const getLegacyHtmlSections = (
  relativePath: string
): LegacyHtmlSections => {
  const normalizedPath = relativePath.endsWith(".html")
    ? relativePath
    : `${relativePath}.html`;

  const filePath = path.join(
    process.cwd(),
    "src",
    "legacy",
    "html",
    normalizedPath
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Legacy HTML not found at ${normalizedPath}`);
  }

  const htmlContent = fs.readFileSync(filePath, "utf8");

  return {
    head: extractTagContent(htmlContent, "head"),
    body: extractTagContent(htmlContent, "body") || htmlContent,
  };
};

