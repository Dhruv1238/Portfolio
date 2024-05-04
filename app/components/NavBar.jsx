import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState } from "react";


const Navbar = ({ pageName }) => {

    const { theme } = useTheme();
    const router = useRouter();

    const [page, setPage] = useState(pageName)


    return (
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