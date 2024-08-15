'use client'

import { useRouter } from 'next/navigation';
import Cursor from '../components/Cursor';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import { Button } from "@nextui-org/react";
import { useTheme } from 'next-themes';
import ProjectCorousel from '../components/ProjectCorousel';

export default function Projects() {
    const router = useRouter();
    const { theme } = useTheme();

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <motion.div
        // initial={{ y: "100%"}}
        // animate={{ y:"0%" }}
        // transition={{ duration: 1, ease: "easeInOut" }}
        >
            <Cursor />
            <NavBar />
            <div className="flex flex-col items-start justify-start h-[80vh] gap-4 p-5 lg:p-10 py-2 duration-700">
                <h1 className="lg:text-9xl text-5xl">Things you can expect</h1>
                {/* <div className='flex flex-row gap-4 items-start justify-between w-full ml-0'> */}
                <ProjectCorousel slides={SLIDES} options={OPTIONS} />
                {/* </div>     */}
                <div className="lg:hidden flex flex-row gap-4 items-center justify-between w-full">
                    <Button
                        variant="bordered"
                        className={`rounded-none w-20 text-xl ${theme === "light" ? "border-black" : "border-white"
                            }`}
                        size="lg"
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        Experience
                    </Button>
                    <Button
                        variant="bordered"
                        className={`rounded-none w-20 text-xl ${theme === "light" ? "border-black" : "border-white"
                            }`}
                        size="lg"
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        variant="bordered"
                        className={`rounded-none w-20 text-xl ${theme === "light" ? "border-black" : "border-white"
                            }`}
                        size="lg"
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        Resume
                    </Button>

                </div>
            </div>


        </motion.div>
    )
}