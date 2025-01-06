"use client";

import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

export default function ConditionalNav() {
    const pathName = usePathname();

    return (
        <>
            {pathName.includes("login") || pathName.includes("registration") ? <></> : <NavBar />}
        </>
    )
}