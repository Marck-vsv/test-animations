"use client"

import { motion } from "framer-motion";
import { Pacifico, JetBrains_Mono, Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FormaFoda from "@/components/FormaFoda";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-jetbrains-mono",
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-poppins",
})

export default function Home ({
    badge="Pato quac",
    title1="Eu sou o frontendo",
    title2="Alguem me mata",
    desc="fazendo patinhos quack quack quack"
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    desc?: string;
}) {
    const fadeUpVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: .5 + i * .2,
                ease: [.25, .4, .25, 1]
            },
        })
    }

    return (
        <div
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
        >
            <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/[.05] via-transparent to-rose-500/[.05] blur-3xl"
            />

            <div
                className="absolute inset-0 overflow-hidden"
            >
                <FormaFoda
                    delay={.4}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <FormaFoda
                    delay={.3}
                    width={400}
                    height={140}
                    rotate={32}
                    gradient="from-emerald-500/[.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <FormaFoda
                    delay={.1}
                    width={600}
                    height={140}
                    rotate={-32}
                    gradient="from-indigo-500/[.15]"
                    className="right-[-15%] md:right-[-15%] top-[50%] md:top-[25%]"
                />

                <FormaFoda
                    delay={.3}
                    width={250}
                    height={140}
                    rotate={-32}
                    gradient="from-cyan-500/[.15]"
                    className="right-[50%] md:right-[35%] top-[50%] md:top-[50%]"
                />

                <FormaFoda
                    delay={.3}
                    width={400}
                    height={140}
                    rotate={-8}
                    gradient="from-violet-500/[.15]"
                    className="left-[-5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <FormaFoda
                    delay={.5}
                    width={550}
                    height={140}
                    rotate={20}
                    gradient="from-amber-500/[.15]"
                    className="right-[15%] md:right-[20%] top-[5%] md:top-[15%]"
                />
            </div>

            <div
                className="relative z-10 container mx-auto px-4 md:px-6"
            >
                <div
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[.03] border border-white/[.08] mb-8 md:mb-12"
                    >
                        <Image
                            src={"/pato.svg"}
                            alt="patinho"
                            width={20}
                            height={20}
                        />
                        
                        <span
                            className={cn(
                                "text-sm text-white/[.6] tracking-wide", jetbrainsMono.className
                            )}
                        >
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1
                            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight"
                        >
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80",
                                    poppins.className
                                )}    
                            >
                                {title1}
                            </span>

                            <br />

                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-white/90 to-purple-600",
                                    pacifico.className
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p
                            className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4"
                        >
                            {desc}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div
                className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none"
            />
        </div>
    )
}
