import React from "react";
import HeroBackground from "components/HeroBackground";
import Accordian, { AccordianType } from "components/Accordian";

export default function Contact() {
    const data: AccordianType[] = [
        {
            title: 
            <h4 className="text-xl font-medium text-black">Advisory Board
            </h4>,
            content: (
                <h2 className="text-center text-lg">
                    Coming Soon...
                </h2>
            ),
        },
        {
            title: 
            <h4 className="text-xl font-medium text-black">Program and Organizing Committee
            </h4>,
            content: (
                <ul className="list-bold md:py-8 px-4 lg:text-lg">
                    <li className="py-2"> <b>Chief Patron:</b> Prof. P. Vrat </li>
                    <li className="py-2"><b>Patron:</b> Prof. R. Shekhar General</li>
                    <li className="py-2"><b>Chair:</b> Prof. S. Tripathi</li>
                    <li className="py-2">
                       <b>Program Chair:</b> Prof. A. Bhattacharya
                    </li>
                    <li className="py-2"><b>Program Co-Chair:</b> Prof. A. Das</li>
                    <li className="py-2"><b>Organizing Chair:</b> Prof. A. K. Pal</li>
                    <li className="py-2">
                       <b>Organizing Co-Chair:</b> Prof. S. Srivastava
                    </li>
                    <li className="py-2">
                       <b>Finance and Audit Chair:</b> Prof. S. Bag
                    </li>
                    <li className="py-2">
                        <b>Finance and Audit Co-Chair:</b> Prof. T. Kaibartta
                    </li>
                    <li className="py-2">
                        <b>Tutorial, Publication and Editorial Chair:</b> Prof. S.
                        Mukhopadhyay
                    </li>
                    <li className="py-2">
                        <b>Sponsorship Chair:</b> Prof. T. Amgoth{" "}
                    </li>
                    <li className="py-2">
                        <b>Press, Media Management, Advertisement and Publicity
                        Chair:</b> Prof. D. Ramesh
                    </li>
                    <li className="py-2">
                        <b>Registration Chair:</b> Prof. R. Pamula
                    </li>
                    <li className="py-2">
                        <b>Transportation and Accommodation Chair:</b> Prof. H. Banka
                    </li>
                    <li className="py-2">
                        <b>Food and Hospitality Chair:</b> Prof. A. C. S. Rao
                    </li>
                    <li className="py-2">
                        <b>Decoration, Cultural and Stage Management Chair:</b> Prof.
                        Hari Om
                    </li>
                </ul>
            ),
        },
       
        {
            title:
            <h4 className="text-xl font-medium text-black">Organizing Committee
            </h4>,
            content: (
                <h2 className="text-center text-lg">
                    Coming Soon...
                </h2>
            ),
        },
        {
            title: <h4 className="text-xl font-medium text-black">Technical Program Committee
            </h4>,
            content: (
                <h2 className="text-center text-lg">
                    Coming Soon...
                </h2>
            ),
        },
    ];

    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4 lg:-mt-5">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            Committee
                        </span>
                        {/* <h2 className="mt-5 text-xl font-semibold">
                            Organizing Committees <br />
                            Senior Program Committee
                            <br /> Program Committee
                        </h2> */}
                    </div>
                </div>
            </HeroBackground>
            <div className="px-8 lg:p-16 py-24 flex w-full max-w-5xl mx-auto gap-8 flex-col flex-wrap md:flex-row">
                {data.map((item: AccordianType) => (
                    <Accordian
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
            {/*   <h2 className="text-center w-full my-16 text-2xl md:text-3xl font-bold">
                Organizing Committee
            </h2>
            <div className="p-16 pb-0 flex w-full gap-16 flex-col flex-wrap md:flex-row">
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
            </div>
            <h2 className="text-center w-full my-16 text-2xl md:text-3xl font-bold">
                Senior Program Committee
            </h2>
            <div className="p-16 pb-0 flex w-full gap-16 flex-col flex-wrap md:flex-row">
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
            </div>
            <h2 className="text-center w-full my-16 text-2xl md:text-3xl font-bold">
                Program Committee
            </h2>
            <div className="mb-12 pb-0 flex w-full gap-16 flex-col flex-wrap md:flex-row">
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
                <div className="mb-8 flex flex-1 min-w-[300px]">
                    <SpeakerDetail />
                </div>
            </div> */}
        </section>
    );
}
