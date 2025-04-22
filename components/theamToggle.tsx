"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-10 px-0 cursor-pointer">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-150 rounded-full transition-all dark:-rotate-90 dark:scale-0 " />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-150 hover:text-green-500 duration-500" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();  // Destructure theme and setTheme

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}  // Toggle between light and dark theme
            className='px-4 p-1 hover:bg-[#aaaaaa69] rounded-full flex gap-5 items-center cursor-pointer'        >
            <Sun className=" rotate-0 scale-160 rounded-full transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-160" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}

export function ButtonTheme() {
    const { theme, setTheme } = useTheme();  // Destructure theme and setTheme

    return (
        <button className='cursor-pointer hover:bg-white p-2 rounded-4xl dark:hover:bg-[#aaaaaa69] '
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}  // Toggle between light and dark theme
        >
            <Sun className="absolute scale-100 dark:scale-0 hover:rotate-90 duration-500 hover:text-amber-500" />
            <Moon className="scale-0 dark:scale-100 dark:hover:rotate-90 dark:hover:text-blue-950 duration-500" />
        </button>
    );
}