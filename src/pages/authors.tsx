import React from "react";
import HeroBackground from "components/HeroBackground";
import ImportantDates, { row } from "components/ImportantDates";
import LinkIcon from "../assets/icons/Link";

export default function Contact() {
    const dates: row[] = [
        {
            from: "October 1, 2022",
            to: "October 1, 2022",
            content: "Full Paper Submission",
        },
        {
            from: "December 1, 2022",
            to: "",
            content: "Acceptance",
        },
        {
            from: "December 15, 2022",
            to: "January 31, 2023",
            content: "Camera Ready",
        },
        {
            from: "December 15, 2022",
            to: "February 28, 2023",
            content: "Last Date of Registration",
        },
        {
            from: "March 3 - 5, 2023",
            to: "March 5, 2023",
            content: "Conference Date",
        },
    ];

    return (
        <section className="min-h-screen">
            <HeroBackground>
                <div className="flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <span className="text-4xl lg:text-6xl font-semibold text-dark">
                            Authors
                        </span>
                        <h2 className="mt-5 text-xl">
                            To submit a paper in{" "}
                            <span className="font-extrabold">
                                RAIT 2023
                            </span>
                            &nbsp;
                            <a
                                href="https://easychair.org/conferences/?conf=rait2023" target="_blank"
                                className="text-green-300 underline underline-offset-4 font-bold"
                            >
                                Click here
                            </a>
                        </h2>
                    </div>
                </div>
            </HeroBackground>
            <div className="mb-16 px-8 pt-24">
                <h2 className="text-center text-3xl mb-12 font-semibold">
                Submission Guidelines
                </h2>
                <div className="max-w-5xl px-8 text-justify mx-auto flex justify-center">
                 <a className="bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded text-white" href="/~rait/CFP_RAIT_2023.pdf" target="_blank">Download Call for Papers/Topic Pdf</a>
                </div>
            </div>
            <ImportantDates dates={dates} />
            <div className="mx-auto max-w-5xl mb-16 px-8 text-justify py-10">
                <h2 className="text-center text-3xl mb-12 font-semibold">
                    Important Note
                </h2>
                All submissions should be written in English with a maximum page
                length of SIX (6) printed pages including bibliographic
                references for the regular paper track. Papers should be in PDF
                format, two columns, (minimum 10-point font) or greater and
                compliant with other <strong>IEEE</strong> manuscript
                guidelines.
                <br /> <br /> Standard <strong>IEEE</strong> conference
                templates for <strong>LaTeX</strong> and{" "}
                <strong>Microsoft Word</strong> formats must be used for
                technical papers which can be found at:{" "}
                <a
                    href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank"
                    className="text-blue-500 underline underline-offset-4 font-bold"
                >
                    Link
                    <LinkIcon className="inline-block px-2 -mx-1" />
                </a>
                <h2 className="mt-12 text-xl">
                    To submit a paper in{" "}
                    <span className="font-extrabold">RAIT 2023</span> &nbsp;
                    <a
                        href="https://easychair.org/conferences/?conf=rait2023" target="_blank"
                        className="text-blue-500 underline underline-offset-4 font-bold"
                    >
                        Click here
                    </a>
                </h2>
            </div>
        </section>
    );
}
