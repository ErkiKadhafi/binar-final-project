import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

// prettier-ignore
const SvgSearch = ({ fill="stroke-black"}) => (
    <svg className={fill} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 17.5L13.875 13.875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const Home = () => {
    return (
        <>
            <section className="font-poppins pb-5 pt-[118px] md:pt-8 bg-gradientLimegreen sm:bg-white">
                {/* ======== banner slides ======== */}
                <div className="container-banner mb-10">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1}
                        initialSlide={1}
                        centeredSlides={true}
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                                spaceBetween: 16,
                                slidesPerView: 1.9,
                                initialSlide: 1,
                            },
                        }}
                    >
                        {[...Array(3)].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative bg-transparent md:bg-primary-limegreen03 md:rounded-20px p-0 md:py-8 lg:py-12 md:px-10 :px-20">
                                    <div className="relative z-20 flex justify-between items-center w-full 2xl:w-2/3">
                                        <div className="text-neutral-neutral05">
                                            <div className="font-bold text-xl lg:text-4xl mb-4">
                                                <h1 className="lg:leading-56px">
                                                    Bulan Ramadhan <br /> Banyak
                                                    Diskon
                                                </h1>
                                            </div>
                                            <h1 className="text-xs lg:text-sm mb-1 lg:mb-2">
                                                Diskon Hingga
                                            </h1>
                                            <h1 className="text-lg lg:text-3xl font-medium text-alert-danger">
                                                60%
                                            </h1>
                                        </div>
                                        <div className="">
                                            <img
                                                className="h-32 lg:h-auto"
                                                src="/images/gift.png"
                                                alt="gift"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden md:block absolute top-0 bottom-0 right-0 ">
                                        <img
                                            className="object-cover h-full"
                                            src="/images/mosque.png"
                                            alt="mosque"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* ======== category items ======== */}
                <div className="container-big">
                    <div>
                        <h1 className="mb-4 font-medium md:font-bold text-sm md:text-base">
                            Telusuri Kategori
                        </h1>
                        <Swiper
                            id="category-swiper"
                            spaceBetween={16}
                            slidesPerView={2.5}
                            initialSlide={0}
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    spaceBetween: 16,
                                    slidesPerView: 4,
                                    initialSlide: 0,
                                },
                                // when window width is >= 768px
                                768: {
                                    spaceBetween: 16,
                                    slidesPerView: 5,
                                    initialSlide: 0,
                                },
                                // when window width is >= 1024px
                                1024: {
                                    spaceBetween: 16,
                                    slidesPerView: 6,
                                    initialSlide: 0,
                                },
                            }}
                        >
                            {[...Array(6)].map((item, index) => {
                                let isSelected;
                                if (index === 0) isSelected = true;
                                return (
                                    <SwiperSlide key={index}>
                                        <div className=" cursor-pointer">
                                            <div
                                                type="button"
                                                className={`${
                                                    isSelected
                                                        ? "bg-primary-darkblue04 text-white"
                                                        : "bg-primary-darkblue01 text-black"
                                                } flex justify-center items-center space-x-2 px-4 md:px-6 py-3 md:py-3.5 text-base rounded-xl `}
                                            >
                                                <SvgSearch
                                                    fill={`${
                                                        isSelected
                                                            ? "stroke-white"
                                                            : "stroke-black"
                                                    }`}
                                                />
                                                <span className="text-sm">
                                                    Semua
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="font-poppins md:py-5">
                <div className="container-big grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[...Array(20)].map((item, index) => {
                        return (
                            <Link to={`/product/${index}`}>
                                <div
                                    key={index}
                                    className="rounded shadow-low px-2 pt-2 pb-4 transform hover:scale-105 transition"
                                >
                                    <div className="mb-2">
                                        <img
                                            src="/images/watch.png"
                                            className="h-full w-full object-cover"
                                            alt={index}
                                        />
                                    </div>
                                    <h2 className="text-sm mb-1">
                                        Jam Tangan Casio
                                    </h2>
                                    <h3 className="text-xs text-neutral-neutral03 mb-2">
                                        Aksesoris
                                    </h3>
                                    <h3 className="text-sm">Rp 250.000</h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Home;
