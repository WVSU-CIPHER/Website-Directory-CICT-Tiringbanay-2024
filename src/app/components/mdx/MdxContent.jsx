"use client";

import { MDXRemote } from "next-mdx-remote";
import { useState, useEffect } from "react";

export default function MDXContent({ source }) {
  const [mdxSource, setMdxSource] = useState(null);

  useEffect(() => {
    setMdxSource(source);
  }, [source]);

  if (!mdxSource) return null;

  return (
    <MDXRemote
      {...mdxSource}
      components={{
        h1: (props) => <h1 {...props} className="text-2xl font-bold" />,
        // Add other custom components as needed
      }}
    />
  );
}
