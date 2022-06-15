import { useRef } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Product = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <section className="md:pb-6 md:pt-116px">
                {/* ======== shown on mobile ======== */}
                <div className="h-300px md:hidden relative">
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        id="product-swiper-mobile"
                    >
                        {[...Array(4)].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-300px ">
                                    <img
                                        className="object-cover h-full w-full md:hidden"
                                        src="/images/watch_big.png"
                                        alt="watch"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Link to="/">
                        <div className="z-10 absolute left-back-button top-11 h-8 w-8 rounded-full bg-white hover:bg-gray-300 transition flex justify-center items-center">
                            {/* prettier-ignore  */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 19L5 12L12 5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className="container-banner relativez-10">
                    <div className="z-10 absolute md:static transfrom -translate-y-12 md:translate-y-0 container-medium md:grid grid-cols-12 gap-x-8">
                        {/* ======== hidden on mobile ======== */}
                        <div className="col-span-7 space-y-6 hidden md:block">
                            <Swiper
                                navigation={{
                                    // Both prevEl & nextEl are null at render so this does not work
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                loop={true}
                                pagination={{ clickable: true }}
                                onSwiper={(swiper) => {
                                    // Delay execution for the refs to be defined
                                    setTimeout(() => {
                                        // Override prevEl & nextEl now that refs are defined
                                        swiper.params.navigation.prevEl =
                                            prevRef.current;
                                        swiper.params.navigation.nextEl =
                                            nextRef.current;

                                        // Re-init navigation
                                        swiper.navigation.destroy();
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    });
                                }}
                                modules={[Pagination, Navigation]}
                                id="product-swiper"
                            >
                                {[...Array(4)].map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="h-[27.25rem] bg-red-400 ">
                                            <img
                                                className="object-cover h-full w-full "
                                                src="/images/watch_big.png"
                                                alt="watch"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div
                                    className="cursor-pointer z-10 absolute top-1/2 w-30px h-30px rounded-full bg-white hover:bg-gray-300 transition -translate-y-1/2 left-4 flex items-center justify-center"
                                    ref={prevRef}
                                >
                                    {/* prettier-ignore */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 18L9 12L15 6" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div
                                    className="cursor-pointer z-10 absolute top-1/2 w-30px h-30px rounded-full bg-white hover:bg-gray-300 transition -translate-y-1/2 right-4 flex items-center justify-center"
                                    ref={nextRef}
                                >
                                    {/* prettier-ignore */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 18L15 12L9 6" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </Swiper>
                        </div>
                        <div className="col-span-5 space-y-4 md:space-y-6">
                            <div className="px-4 pt-4 pb-6 shadow-low rounded-2xl bg-white">
                                <h1 className="font-medium mb-1 md:mb-2">
                                    Jam Tangan Casio
                                </h1>
                                <h2 className="mb-2 md:mb-4 text-neutral-neutral03">
                                    Aksesoris
                                </h2>
                                <h2 className="md:mb-6">Rp 250.000</h2>
                                <div className="md:space-y-3.5">
                                    {/* ======== if seller ======== */}
                                    <Button className="w-full hidden md:block">
                                        Terbitkan
                                    </Button>
                                </div>
                            </div>
                            <div className="p-4 shadow-low rounded-2xl flex items-center space-x-4 bg-white">
                                <div>
                                    <img
                                        src="/images/avatar_seller.png"
                                        alt="avatar"
                                        className="roundex-xl"
                                    />
                                </div>
                                <div className="">
                                    <h1 className="font-medium mb-1 text-sm">
                                        Nama Penjual
                                    </h1>
                                    <h2 className="text-neutral-neutral03 text-xs">
                                        Kota
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-48 md:mt-0 md:pb-8">
                <div className="container-medium md:grid grid-cols-12 gap-x-8">
                    <div className="col-span-7 space-y-6">
                        <div className="shadow-low rounded-2xl p-4 ">
                            <h1 className="text-sm mb-4 font-medium">
                                Deskripsi
                            </h1>
                            <div className="space-y-8 text-neutral-neutral03">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Button className="w-[90%] left-1/2 transform -translate-x-1/2 fixed bottom-8 md:hidden">
                Terbitkan
            </Button>
        </>
    );
};

export default Product;