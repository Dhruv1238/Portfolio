'use client';

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";

export const QuickContact = () => {
    const { theme, resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("dark");

    useEffect(() => {
        if (resolvedTheme) {
            setCurrentTheme(resolvedTheme);
        }
    }, [resolvedTheme]);

    return (
        <>
            <Button isIconOnly variant="light" className="cursor-none" onClick={() =>
                window.open("https://github.com/dhruv1238", "_blank")
            }>
                <img src={currentTheme === "dark" ? "/githubDark.svg" : "/githubLight.svg"} className="h-6 w-6 md:h-7 md:w-7" />
            </Button>
            <Button isIconOnly variant="light" className="cursor-none" onClick={() =>
                window.open("https://www.linkedin.com/in/dhruv-sharma-6411a422a/", "_blank")
            }>
                <img src={currentTheme === "dark" ? "/linkedinLight.svg" : "/linkedinDark.svg"} className="h-6 w-6 md:h-7 md:w-7" />
            </Button>
            <Button isIconOnly variant="light" className="cursor-none" onClick={() =>
                window.open("https://api.whatsapp.com/send?phone=917304816137", "_blank")
            }>
                <img src={currentTheme === "dark" ? "/whatsappDark.svg" : "/whatsappLight.svg"} className="h-6 w-6 md:h-7 md:w-7" />
            </Button>
            <Button isIconOnly variant="light" className="cursor-none" onClick={() =>
                window.open("https://instagram.com/dhruv1238", "_blank")
            }>
                <img src={currentTheme === "dark" ? "/instaLight.svg" : "/instaDark.svg"} className="h-6 w-6 md:h-7 md:w-7" />
            </Button>
            <Button isIconOnly variant="light" className="cursor-none" onClick={() =>
                (window.location.href = "mailto:dhruv.sharma@somaiya.edu")}
            >
                <img src={currentTheme === "dark" ? "/mailLight.svg" : "/mailDark.svg"} className="h-6 w-6 md:h-7 md:w-7" />
            </Button>
        </>
    );
};