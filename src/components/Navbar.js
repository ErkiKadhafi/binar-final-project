import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
    <path d="M18 6L6 18" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
// prettier-ignore
const SvgList = ({className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 18H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 18H3.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 12H3.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6H3.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)
// prettier-ignore
const SvgUser = ({className}) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)
// prettier-ignore
const SvgBell = ({className, onClick}) => (
    <svg onClick={onClick} className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

function Navbar({
    showOnMobile = true,
    showSearchInput = true,
    titleSearch,
    isCustomTitleSearch = false,
}) {
    /* ======== for auth routing ======== */
    const router = useNavigate();
    const { isAuthenticated } = useSelector((store) => store.user);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [transparentBackground, setTransparentBackground] = useState(true);

    /* ======== for notification popup ======== */
    const [showPopupNotification, setShowPopupNotification] = useState(false);
    const [showNewNotification, setShowNewNotification] = useState(true);
    const triggerPopupNotification = () => {
        setShowPopupNotification(!showPopupNotification);
    };

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
                className={`${!showOnMobile && "hidden md:flex items-center"} ${
                    transparentBackground && !isCustomTitleSearch
                        ? "bg-transparent top-6"
                        : "bg-white top-0"
                } transition-all md:bg-white w-full md:shadow-high ${
                    isCustomTitleSearch ? "pt-3" : "fixed top-0 py-[18px]"
                } md:py-[18px] md:sticky md:top-0 z-30 md:min-h-[84px] `}
            >
                <div className="container-big flex items-center font-poppins">
                    <div className="flex items-center w-full">
                        {/* ======== show on desktop ======== */}
                        <Link to="/">
                            <Svglogoungu className="hidden md:block" />
                        </Link>
                        {/* ======== show on mobile ======== */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            type="button"
                            className="md:hidden bg-white p-3 rounded-2xl"
                        >
                            <SvgBurger />
                        </button>
                        {isCustomTitleSearch && (
                            <div className="hidden md:block relative w-full md:max-w-[500px] ml-4 md:mx-6 ">
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
                        )}
                        {showSearchInput ? (
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
                        ) : (
                            <>
                                {isCustomTitleSearch ? (
                                    <p className="text-[20px] font-bold ml-8 md:hidden">
                                        {titleSearch}
                                    </p>
                                ) : (
                                    <p className="mx-auto -translate-x-1/3">
                                        {titleSearch}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                    {/* ======== button masuk, nav on the right side, and popup notification ======== */}
                    {(showSearchInput || isCustomTitleSearch) && (
                        <div className="hidden md:block ml-auto">
                            {isAuthenticated ? (
                                /* ======== nav on the rightside ======== */
                                <div className="flex space-x-7 items-center">
                                    <Link to="/list">
                                        <SvgList className="stroke-[#151515] hover:stroke-primary-darkblue04 transition" />
                                    </Link>
                                    <div className="relative cursor-pointer">
                                        <SvgBell
                                            onClick={triggerPopupNotification}
                                            className={`${
                                                showPopupNotification
                                                    ? "stroke-primary-darkblue04"
                                                    : "stroke-black"
                                            } hover:stroke-primary-darkblue04 transition`}
                                        />
                                        {/* ======== red dots on the bell ======== */}
                                        {showNewNotification && (
                                            <div className="h-2 w-2 rounded-full bg-alert-danger absolute top-0 right-0" />
                                        )}
                                        {/* ======== popup notification ======== */}
                                        <div
                                            className={`${
                                                showPopupNotification
                                                    ? "visible opacity-1"
                                                    : "invisible opacity-0"
                                            } transition-all absolute shadow-high w-[376px] top-10 -right-7 px-6 py-2 divide-y divide-[#E5E5E5] rounded-2xl bg-white`}
                                        >
                                            {Array.from([1, 2, 3], (index) => {
                                                return (
                                                    <div
                                                        onClick={() =>
                                                            setShowNewNotification(
                                                                false
                                                            )
                                                        }
                                                        key={index}
                                                        className="flex space-x-4 py-4"
                                                    >
                                                        <img
                                                            src="./images/watch-small.png"
                                                            alt=""
                                                            className="h-max"
                                                        />
                                                        <div className="space-y-1 grow">
                                                            <div className="flex justify-between items-center">
                                                                <p className="text-xs text-neutral-neutral03">
                                                                    Penawaran
                                                                    produk
                                                                </p>
                                                                <div className="flex items-center space-x-2">
                                                                    {/* prettier-ignore  */}
                                                                    <p className="text-xs text-neutral-neutral03">
                                                                        20 Apr,14:04
                                                                    </p>
                                                                    {showNewNotification && (
                                                                        <div className="rounded-full bg-alert-danger h-2 w-2 " />
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {/* prettier-ignore  */}
                                                            <p className="text-sm">
                                                                Jam Tangan Casio
                                                            </p>
                                                            {/* prettier-ignore  */}
                                                            <p className="text-sm">
                                                                Rp 250.000
                                                            </p>
                                                            {/* prettier-ignore  */}
                                                            <p className="text-sm">
                                                                Ditawar Rp 200.000
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <Link to="/profile">
                                        <SvgUser className="stroke-[#151515] hover:stroke-primary-darkblue04 transition" />
                                    </Link>
                                </div>
                            ) : (
                                /* ======== button masuk ======== */
                                <Button
                                    type="button"
                                    onClick={() => router("/login")}
                                    className="py-[14px] px-4"
                                >
                                    <Svgmasuk />
                                    <span className="ml-2 my-auto ">Masuk</span>
                                </Button>
                            )}
                        </div>
                    )}
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
