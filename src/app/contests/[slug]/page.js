

import { getAllRAG } from "@/data/fetchRulesAndGuidelines";
import { getRAGBySlug } from "@/data/fetchRulesAndGuidelines";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export default async function ContestDetails({ params }) {

    const ragList = await getAllRAG();
    const rag = ragList.find(rag => rag.slug === params.slug)
    const slug = rag.slug;
    const { data, content } = await getRAGBySlug(slug);
    console.log(data);
    const mdxSource = await serialize(content);
    console.log("is MDX Source undefines: ", mdxSource === undefined);


    return (
        <>
            {mdxSource && <MDXRemote {...mdxSource} components={<h1>test</h1>} />}

        </>
    )
}