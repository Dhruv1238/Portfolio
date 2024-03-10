"use client";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cursor from "./components/Cursor";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

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
      <Cursor />
      <div className="flex justify-between items-center p-5 lg:py-5 lg:p-10 duration-700">
        <Dropdown backdrop="blur" className=" cursor-none">
          <DropdownTrigger>
            <h1 className="text-center text-3xl">Dhruv Sharma&#x25BC;</h1>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Static Actions">
            <DropdownItem
              className="cursor-none"
              endContent={
                theme === "dark" ? (
                  <img src="/githubDark.svg" className="h-5 w-5" />
                ) : (
                  <img src="/githubLight.svg" className="h-5 w-5" />
                )
              }
              onClick={() =>
                window.open("https://github.com/dhruv1238", "_blank")
              }
            >
              Github
            </DropdownItem>
            <DropdownItem
              endContent={
                theme === "dark" ? (
                  <img src="/linkedinLight.svg" className="h-5 w-5" />
                ) : (
                  <img src="/linkedinDark.svg" className="h-5 w-5" />
                )
              }
              className="cursor-none"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/dhruv-sharma-6411a422a/",
                  "_blank"
                )
              }
            >
              Linkedin
            </DropdownItem>
            <DropdownItem
              className="cursor-none"
              endContent={
                theme === "dark" ? (
                  <img src="/whatsappDark.svg" className="h-5 w-5" />
                ) : (
                  <img src="/whatsappLight.svg" className="h-5 w-5" />
                )
              }
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=917304816137",
                  "_blank"
                )
              }
            >
              Whatsapp
            </DropdownItem>
            <DropdownItem
              className="cursor-none"
              endContent={
                theme === "dark" ? (
                  <img src="/instaLight.svg" className="h-5 w-5" />
                ) : (
                  <img src="/instaDark.svg" className="h-5 w-5" />
                )
              }
              onClick={() =>
                window.open("https://instagram.com/dhruv1238", "_blank")
              }
            >
              Instagram
            </DropdownItem>
            <DropdownItem
              className="cursor-none"
              endContent={
                theme === "dark" ? (
                  <img src="/mailLight.svg" className="h-5 w-5" />
                ) : (
                  <img src="/mailDark.svg" className="h-5 w-5" />
                )
              }
              onClick={() =>
                (window.location.href = "mailto:dhruv.sharma@somaiya.edu")
              }
            >
              MAIL
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className="hidden md:flex items-center justify-between gap-14">
          <h1
            onClick={() => {
              router.push("/projects");
            }}
            className="text-3xl ease-in-out hover:scale-110 hover:duration-300"
          >
            Projects
          </h1>
          <h1
            onClick={() => {
              router.push("/experience");
            }}
            className="text-3xl ease-in-out hover:scale-110 hover:duration-300"
          >
            Experience
          </h1>
          <h1
            onClick={() => {
              router.push("/resume");
            }}
            className="text-3xl ease-in-out hover:scale-110 hover:duration-300"
          >
            Resume
          </h1>
          <ThemeSwitcher />
        </div>
        <div className="md:hidden">
          <ThemeSwitcher />
        </div>
      </div>
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
              FULL
            </h2>
            <h2 className={css}>STACK&nbsp;</h2>
            <h2 className={`text-6xl lg:text-[25vh] text-center leading-none`}>
              WEB-
            </h2>
          </div>
          <div className="flex gap-0">
            <h2 className={`text-6xl lg:text-[25vh] text-center leading-none`}>
              De
            </h2>
            <h2 className={css}>veloper</h2>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-3">
          <Button
            variant="bordered"
            className={`rounded-none w-20 text-xl ${
              theme === "light" ? "border-black" : "border-white"
            }`}
            size="lg"
          >
            Projects
          </Button>
          <Button
            variant="bordered"
            className={`rounded-none w-20 text-xl ${
              theme === "light" ? "border-black" : "border-white"
            }`}
            size="lg"
          >
            Experience
          </Button>
          <Button
            variant="bordered"
            className={`rounded-none w-20 text-xl ${
              theme === "light" ? "border-black" : "border-white"
            }`}
            size="lg"
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
