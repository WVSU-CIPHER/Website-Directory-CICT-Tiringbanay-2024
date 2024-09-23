
import { React } from 'react';
import bg from "/public/assets/images/background.png"
import Image from 'next/image';
import { remark } from 'remark';
import html from 'remark-html';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
// fontss
import { chopsic } from '@/app/layout';
import { poppins } from '@/app/layout';

// Data for contests page
import { contestList } from '@/data/contests';
import { getAllRAG } from '@/data/fetchRulesAndGuidelines';
import { getRAGBySlug } from '@/data/fetchRulesAndGuidelines';

// Page Components
import Footer from '@/app/components/Footer';
import RulesAndGuidelinesPDF from '@/app/components/contests/ContestPDF';
import ContestsOptionPicker from '@/app/components/contests/ContestOptions';
import ContestItem from '@/app/components/contests/ContestItem';
import { navigations } from '@/data/navigations';


// Page params
export async function generateStaticParams() {
    const ragList = await getAllRAG();
    return ragList.map((rag) => ({
        slug: rag.slug
    }))

}


export default async function ContestsPage({ params }) {

    // const { slug } = params;

    const { data, content } = await getRAGBySlug(params.slug);

    console.log("Data: ", data);
    const mdxSource = await serialize(content);
    console.log("MDX Source: ", mdxSource)
    // // const processedContent = await remark().use(html).process(content);
    // // const contentHtml = processedContent.toString();
    // const mdxSource = await serialize(content);
    console.log("Params slug: ", params.slug);
    // console.log(mdxSource)
    const ragList = await getAllRAG();
    const rag = ragList.find(rag => rag.slug === params.slug);
    console.log("Rag: ", rag);

    return (
        <div>
            {/* Content */}
            <div className="h-screen w-screen overflow-hidden">
                {/* Background */}
                <Image
                    src={bg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

                {/* overscroll-y-scroll to cater scrolling on y axis */}
                <div className=" w-full h-full flex flex-col overflow-y-scroll relative gap-4">
                    <div className="items-center justify-center flex flex-col w-[90%] mx-auto pt-[128px] gap-[32px]">
                        <div className=" flex flex-col max-w-full w-full gap-[32px] ">

                            <h1 className={`${chopsic.className} text-[40px] text-center`}>
                                contests
                            </h1>

                            <div className="mx-auto flex flex-col gap-4 max-w-full w-full">
                                {/* Banner for Rules and Guidelines PDF */}

                                <RulesAndGuidelinesPDF />
                                <ContestsOptionPicker>
                                    <ContestItem contest={contestList[0]} href={`${navigations[2].href}/${contestList[0]}`} />
                                    <ContestItem contest={contestList[1]} href={`${navigations[2].href}/${contestList[1]}`} />
                                    <ContestItem contest={contestList[2]} href={`${navigations[2].href}/${contestList[2]}`} />
                                    <ContestItem contest={contestList[3]} href={`${navigations[2].href}/${contestList[3]}`} />
                                    <ContestItem contest={contestList[4]} href={`${navigations[2].href}/${contestList[4]}`} />
                                    <ContestItem contest={contestList[5]} href={`${navigations[2].href}/${contestList[5]}`} />
                                    <ContestItem contest={contestList[6]} href={`${navigations[2].href}/${contestList[6]}`} />
                                </ContestsOptionPicker>

                            </div>
                        </div>
                        {/* Cards for rag content */}
                        <div className="flex flex-col gap-0 md:gap-[64px] w-screen md:w-full z-[200]">
                            {/* <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div> */}
                            <MDXRemote {...mdxSource} components={<h1>test</h1>} />
                            {/* <Sugilanon /> */}
                            {/* <AvatarBanner /> */}
                        </div>
                    </div>
                    {/* Added footer */}
                    <Footer />
                </div>
            </div>

        </div>
    );
}









