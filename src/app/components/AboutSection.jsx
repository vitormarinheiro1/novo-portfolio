"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>Python</li>
                <li>Angular</li>
                <li>React</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Ciência da computação</li>
                <li>Técnico em informática</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>DB Developer</li>
                <li>Object-Oriented Developer</li>
                <li>Smart Data Structures</li>
                <li>Programming Basics</li>
            </ul>
        ),
    },
];

const AboutSection = () => {

    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section
        id="about"
        className="text-white"
        >
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.jpg" alt="about me" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a proficient full stack web developer driven by the excitement of crafting dynamic and adaptive
                        web applications. Proficient in JavaScript, React, Node.js, Angular, Python, HTML, CSS,
                        and MySQL, I bring a wealth of technical expertise to every project.
                        Continuously eager to broaden my horizons, I thrive on learning new technologies and techniques.
                        Collaboration is at the heart of my approach, and I thrive in team environments where I can contribute
                        to the creation of applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
