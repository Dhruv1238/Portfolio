"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cursor from "./components/Cursor";
import { useRouter } from "next/navigation";
import {
  Button,
} from "@nextui-org/react";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [hover, setHover] = useState(false);
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState("stroked-text-black");
  const [css, setCss] = useState(
    "text-6xl lg:text-[25vh] text-center leading-none"
  );
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (theme === "dark") {
      setTextColor("stroked-text-white");
    } else {
      setTextColor("stroked-text-black");
    }
  }, [theme]);

  useEffect(() => {
    if (hover) {
      setCss(
        `text-6xl lg:text-[25vh] text-center leading-none z-50 ${textColor}`
      );
    } else {
      setCss(`text-6xl lg:text-[25vh] text-center leading-none`);
    }
  }, [hover]);

  return (
    <>
    {/* initial={{ y: "100%" }}
    animate={{ y: "0%" }}
   transition={{ duration: 1, ease: "easeInOut" }} */}
      <Cursor />
      <NavBar />
      <div
        className="flex flex-col items-center justify-center lg:gap-10 duration-700"
        onMouseMove={(e) => {
          setCursorX(e.clientX * 0.03);
          setCursorY(e.clientY * 0.03);
        }}
      >
        <h2
          className="text-6xl lg:text-[25vh] text-center mb-5 lg:mb-0 lg:mt-10"
          onMouseEnter={() => {
            setHover(false);
          }}
        >
          SOFTWARE ENGINEER
        </h2>
        <div
          className="flex flex-col h-full w-full items-center justify-center"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => setHover(false)}
        >
          <div className="flex gap-0">
            <h2 className={`text-6xl lg:text-[25vh] text-center leading-none`}>
              FU
            </h2>
            <h2 className={css}>LL-ST</h2>
            <h2 className={`text-6xl lg:text-[25vh] text-center leading-none`}>
              ACK
            </h2>
          </div>
          <div className="flex gap-0">
            <h2 className={`text-6xl lg:text-[25vh] text-center leading-none`}>
              De
            </h2>
            <h2 className={css}>veloper</h2>
          </div>
        </div>
        <div className="lg:hidden flex flex-col gap-5 mt-3">
          <Button
            variant="bordered"
            className={`rounded-none w-20 text-xl ${theme === "light" ? "border-black" : "border-white"
              }`}
            size="lg"
            onClick={() => {
              router.push("/projects");
            }}
          >
            Projects
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
            Resume
          </Button>
        </div>
        <img
          src="/dhruv.svg"
          className="lg:h-[75vh] h-[35vh] object-cover absolute bottom-0"
          alt="Dhruv Sharma"
          style={{ transform: `translate(${cursorX}px, ${cursorY}px)` }}
          onMouseEnter={() => {
            setHover(true);
          }}
        />
      </div>
    </>
  );
}
