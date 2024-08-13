"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from '@nextui-org/react';

export function ThemeSwitcher() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("light");

    useEffect(() => {
        if (resolvedTheme) {
            setCurrentTheme(resolvedTheme);
        }
    }, [resolvedTheme]);

    return (
        <div>
            {
                currentTheme === 'light' ?
                    <Button variant="light" isIconOnly onClick={() => setTheme('dark')} className="cursor-none h-10 w-10">
                        <img src="/darkMode.svg" alt="Dark Mode" className="h-7" />
                    </Button> :
                    <Button variant="light" isIconOnly onClick={() => setTheme('light')} className="cursor-none h-10 w-10">
                        <img src="/light.svg" alt="Light Mode" className="h-7" />
                    </Button>
            }
        </div>
    );
}