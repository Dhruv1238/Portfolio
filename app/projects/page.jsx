'use client'

import { useRouter } from 'next/navigation';
import Cursor from '../components/Cursor';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import { Button } from "@nextui-org/react";
import { useTheme } from 'next-themes';

export default function Projects() {
    const router = useRouter();
    const { theme } = useTheme();

    const navigateToRoute = () => {
        router.push('/'); // replace '/your-route' with your desired route
    }

    return (
        <motion.div
        initial={{ y: "100%"}}
        animate={{ y:"0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        >
            <Cursor />
            <NavBar />
            <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
                <h1 className="text-4xl lg:text-[15vh] text-center leading-none">401:Unauthorized</h1>
                <h1 className="text-4xl lg:text-[10vh] text-center leading-none">Still Under Developement</h1>
                <Button
                    variant="bordered"
                    className={`lg:hidden rounded-none w-20 text-xl ${theme === "light" ? "border-black" : "border-white"
                        }`}
                    size="lg"
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    Home
                </Button>
            </div>


        </motion.div>
    )
}