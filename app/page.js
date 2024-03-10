"use client";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [hover, setHover] = useState(false);
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState("stroked-text-black");
  const [css, setCss] = useState("text-[25vh] text-center leading-none");
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [navItemX, setNavItemsX] = useState(0);
  const [navItemY, setNavItemsY] = useState(0);

  useEffect(() => {
    if (theme === "dark") {
      setTextColor("stroked-text-white");
    } else {
      setTextColor("stroked-text-black");
    }
  }, [theme]);

  useEffect(() => {
    if (hover) {
      setCss(`text-[25vh] text-center leading-none z-50 ${textColor}`);
    } else {
      setCss(`text-[25vh] text-center leading-none`);
    }
  }, [hover]);

  return (
    <>
      <div className="flex justify-between items-center py-5 p-10 duration-700">
        <h1 className=" text-3xl">Dhruv Sharma</h1>
        <div className="hidden md:flex items-center justify-between gap-14">
          <h1 className="text-3xl ease-in-out cursor-pointer hover:scale-110 hover:duration-300">
            Projects
          </h1>
          <h1 className="text-3xl ease-in-out cursor-pointer hover:scale-110 hover:duration-300">
            Experience
          </h1>
          <h1 className="text-3xl ease-in-out cursor-pointer hover:scale-110 hover:duration-300">
            Resume
          </h1>
          <ThemeSwitcher />
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-0 duration-700"
        onMouseMove={(e) => {
          setCursorX(e.clientX * 0.03);
          setCursorY(e.clientY * 0.03);
        }}
      >
        <h1
          className="text-[25vh] text-center "
          onMouseEnter={() => {
            setHover(false);
          }}
        >
          SOFTWARE ENGINEER
        </h1>
        <div
          className="flex flex-col h-full w-full items-center justify-center"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => setHover(false)}
        >
          <div className="flex gap-0">
            <h1 className={`text-[25vh] text-center leading-none`}>FULL</h1>
            <h1 className={css}>STACK&nbsp;</h1>
            <h1 className={`text-[25vh] text-center leading-none`}>WEB-</h1>
          </div>
          <div className="flex gap-0">
            <h1 className={`text-[25vh] text-center leading-none`}>De</h1>
            <h1 className={css}>veloper</h1>
          </div>
        </div>
        <img
          src="/dhruv.svg"
          className="h-[80vh] object-cover absolute bottom-0"
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
