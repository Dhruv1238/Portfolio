// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export function Providers({ children }) {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(mediaQuery.matches ? 'dark' : 'light');
        // mediaQuery.addEventListener('change', (e) => {
        //     setTheme(e.matches ? 'dark' : 'light');
        // });

    }, []);


    return (
        <NextUIProvider>
            <NextThemesProvider attribute='class' defaultTheme={theme}>
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    )
}