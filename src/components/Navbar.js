import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "./Button";

// prettier-ignore
const Svglogoungu = ({className}) => (
    <svg className={className} width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="34" fill="#4B1979"/>
    </svg>
)
// prettier-ignore
const Svglup = ({className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)
// prettier-ignore
const Svgmasuk = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33325 14.1666L12.4999 9.99992L8.33325 5.83325" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 10H2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)
// prettier-ignore
const SvgBurger = ({className}) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
// prettier-ignore
const SvgX = ({className}) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 6L18 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [transparentBackground, setTransparentBackground] = useState(true);
    const router = useNavigate();

    // change background nav when user change page
    useEffect(() => {
        if (window.scrollY >= 100) setTransparentBackground(false);
        else setTransparentBackground(true);
    }, [router]);

    const changeBackgroundNav = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 100) setTransparentBackground(false);
        else setTransparentBackground(true);
    };
    window.addEventListener("scroll", changeBackgroundNav);

    return (
        <>
            {/* ======== START ::: navbar ======== */}
            <div
                className={`${
                    transparentBackground
                        ? "bg-transparent top-6"
                        : "bg-white top-0"
                } transition-all md:bg-white w-full md:drop-shadow-md py-[18px] fixed  md:sticky md:top-0 z-30`}
            >
                <div className="container-big flex font-poppins">
                    <div className="flex items-center w-full">
                        {/* ======== show on desktop ======== */}
                        <Svglogoungu className="hidden md:block" />
                        {/* ======== show on mobile ======== */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            type="button"
                            className="md:hidden bg-white p-3 rounded-2xl"
                        >
                            <SvgBurger />
                        </button>
                        <div className="relative w-full md:max-w-[500px] ml-4 md:mx-6 ">
                            <input
                                type="text"
                                className={`${
                                    transparentBackground
                                        ? "border-none"
                                        : "border border-neutral-neutral02"
                                } md:border-none text-sm w-full rounded-2xl  md:bg-[#EEEEEE] py-[14px] pl-6 pr-8`}
                                placeholder="Cari di sini ..."
                            />
                            <Svglup className="absolute top-1/2 right-6 -translate-y-1/2 " />
                        </div>
                    </div>
                    <div className="hidden md:block ml-auto">
                        <Button className="py-[14px] px-4">
                            <Svgmasuk />
                            <span className="ml-2 my-auto ">Masuk</span>
                        </Button>
                    </div>
                </div>
            </div>
            {/* ======== END ::: navbar ======== */}
            {/* ======== START ::: sidebar ======== */}
            <div
                className={`${
                    sidebarOpen ? "visible opacity-1" : "invisible opacity-0"
                } fixed md:hidden w-full h-full left-0 top-0 bottom-0 right-0 flex justify-start z-40 transition-all duration-300`}
            >
                {/* ======== overlay black modal ======== */}
                <div className="bg-black opacity-60 absolute w-full h-full left-0 right-0 top-0 bottom-0" />
                {/* ======== actual sidebar ======== */}
                <div
                    className={`${
                        sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-all duration-500 font-poppins bg-white h-full w-1/2 z-50 py-[34px] pl-4 pr-6`}
                >
                    <div className="flex items-center justify-between mb-[18px]">
                        <h1 className="font-bold">Second Hand</h1>
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <SvgX />
                        </button>
                    </div>
                    <div>
                        {/* <Button className="py-[14px] px-4">
                            <Svgmasuk />
                            <span className="ml-2 my-auto ">Masuk</span>
                        </Button> */}
                        <div className="flex flex-col space-y-4">
                            <a className="font-medium">Notifikasi</a>
                            <a className="font-medium">Daftar Jual</a>
                            <a className="font-medium">Akun Saya</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======== END ::: sidebar ======== */}
        </>
    );
}

export default Navbar;
