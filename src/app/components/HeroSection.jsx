"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from "next/link";



const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl ld:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello, I'm
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Vitor',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                1000,
                                'Backend Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">Currently, I am seeking to join a company in my field where I can continue to learn and further develop my skills.</p>
                    <div>
                        <Link href="https://api.whatsapp.com/send?phone=11973179659&text=Ol%C3%A1%20Vitor...">
                            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-w-500 hover:bg-slate-200 text-white">Hire me</button>
                        </Link>
                        <a href="/Currículo Vitor Marinheiro.pdf" download>
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                            </button>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div >
        </section >
    )
}

export default HeroSection
