"use client";

import { useTheme } from "next-themes";
import { Button } from '@nextui-org/react';

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            {
                theme === 'light' ?
                    <Button variant="light" isIconOnly onClick={() => setTheme('dark')} className="h-10 w-10">
                        <img src="/darkMode.svg" alt="Dark Mode" className="h-7"/>
                    </Button> :
                    <Button variant="light" isIconOnly onClick={() => setTheme('light')} className="h-10 w-10">
                        <img src="/light.svg" alt="Light Mode" className="h-7"/>
                    </Button>
            }
        </div>
    )
}; 