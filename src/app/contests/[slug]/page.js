
// Imports
import { serialize } from "next-mdx-remote/serialize";
import dynamic from 'next/dynamic';

// Component page data
import { getAllRAG, getRAGBySlug } from "@/data/fetchRulesAndGuidelines";

import React from "react";

// Page components
import ContestWrapper from "@/app/components/contests/ContestWrapper";

// Guidelines
import AvatarBannerGuidelines from "@/app/components/contests/guidelines/AvatarBanner";
import SugilanonGuidelines from "@/app/components/contests/guidelines/Sugilanon";
import MEMEicryGuidelines from "@/app/components/contests/guidelines/MemeIcry";
import ciSPITzensGuidelines from "@/app/components/contests/guidelines/ciSPITzens";
import GunterCheersGuidelines from "@/app/components/contests/guidelines/GunterCheers";
import PanakayonGuidelines from "@/app/components/contests/guidelines/Panakayon";
import PixelFusionGuidelines from "@/app/components/contests/guidelines/PixelFusion";

// Tables
import AvatarBannerTable from "@/app/components/contests/tables/AvatarBannerTable";
import ciSPITzensTable from "@/app/components/contests/tables/ciSPITzensTable";
import MEMEicryTable from "@/app/components/contests/tables/MEMEicryTable";
import GunterCheersTable from "@/app/components/contests/tables/GunterCheersTable";
import PixelFusionTable from "@/app/components/contests/tables/PixelFusionTable";

// This is to handle the data when page is being rendered
const components = [
    { key: "Avatar-Banners", tableComponent: AvatarBannerTable, guideline: AvatarBannerGuidelines },
    { key: "MEME-icry", tableComponent: MEMEicryTable, guideline: MEMEicryGuidelines },
    { key: "ciSPITzens", tableComponent: ciSPITzensTable, guideline: ciSPITzensGuidelines },
    { key: "Gunter-Cheers", tableComponent: GunterCheersTable, guideline: GunterCheersGuidelines },
    { key: "Panakayon", tableComponent: null, guideline: PanakayonGuidelines },
    { key: "Pixel-Fusion", tableComponent: PixelFusionTable, guideline: PixelFusionGuidelines },
    { key: "Sugilanon", tableComponent: null, guideline: SugilanonGuidelines }, // No table component for Sugilanon
];

const MDXContent = dynamic(() => import('../../components/mdx/MdxContent'), { ssr: false });

export default async function ContestDetails({ params }) {

    try {
        const ragList = await getAllRAG();

        const rag = ragList.find(rag => rag.slug === params.slug);

        if (!rag) {
            throw new Error(`RAG not found for slug: ${params.slug}`);
        }

        const { data, content } = await getRAGBySlug(rag.slug);

        if (!content) {
            throw new Error(`No content found for RAG: ${rag.slug}`);
        }

        const mdxSource = await serialize(content);
        const slug = params.slug;
        const guidelineComponent = components.find(component => component.key === slug);
        const tableComponent = components.find(component => component.key === slug)?.tableComponent;

        return (
            <ContestWrapper>
                {slug ? (
                    <>
                        {/* Render guideline component */}
                        {slug && guidelineComponent?.guideline ? (
                            React.createElement(guidelineComponent.guideline)
                        ) : null}

                        {/* Render table component only if it exists */}
                        {slug && tableComponent ? (
                            React.createElement(tableComponent)
                        ) : null}

                    </>
                ) : (
                    <>
                        <MDXContent source={mdxSource} />
                    </>
                )}
            </ContestWrapper>
        );
    } catch (error) {
        console.error("Error in ContestDetails:", error);
        return <div className="h-screen w-screen items-center justify-center text-red-500">An error occurred while loading the content: {error.message}</div>;
    }
}
