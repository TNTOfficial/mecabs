import React from "react";

interface HtmlContentProps {
  content: string;
}
export const HtmlContent: React.FC<HtmlContentProps> = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="prose  lg:prose-lg xl:prose-xl max-w-none
  prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
  prose-p:text-gray-700 prose-strong:font-bold prose-em:italic
  prose-ul:list-disc prose-ol:list-decimal
  prose-li:my-1 prose-a:text-blue-600 hover:prose-a:text-blue-800
  prose-img:rounded-lg prose-img:my-4"
    ></div>
  );
};
