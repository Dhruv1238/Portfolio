import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState, useEffect } from "react";


const Navbar = () => {

    const { theme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();

    const [page, setPage] = useState("");

    useEffect(() => {
        if (pathname) {
            const path = pathname;
            const pageName = path === "/" ? "home" : path.substring(1);
            setPage(pageName);
        }
    }, [pathname]);


    return (
        <div className="flex justify-between items-center p-5 lg:py-5 lg:p-10 duration-700">
            <h1 className="text-center text-3xl">Dhruv Sharma</h1>
            <div className="hidden md:flex items-center justify-between gap-14">
                {page !== "home" ? (
                    <h1
                        onClick={() => {
                            router.push("/");
                        }}
                        className={`text-3xl ease-in-out hover:scale-110 hover:duration-300`}
                    >
                        &#x25C0;
                    </h1>
                ) : (
                    <></>
                )
                }
                <h1
                    onClick={() => {
                        router.push("/projects");
                    }}
                    className={`text-3xl ease-in-out hover:scale-110 hover:duration-300 ${page === "projects" ? "underline" : ""}`}
                >
                    Projects
                </h1>
                <h1
                    onClick={() => {
                        router.push("/experience");
                    }}
                    className={`text-3xl ease-in-out hover:scale-110 hover:duration-300 ${page === "experience" ? "underline" : ""}`}
                >
                    Experience
                </h1>
                <h1
                    onClick={() => {
                        router.push("/resume");
                    }}
                    className={`text-3xl ease-in-out hover:scale-110 hover:duration-300 ${page === "resume" ? "underline" : ""}`}
                >
                    Resume
                </h1>
                <ThemeSwitcher />
            </div>
            <div className="md:hidden">
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Navbar