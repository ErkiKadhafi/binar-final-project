import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Button from "../components/Button";
import Navbar from "../components/Navbar";
import CardProduct from "../components/CardProduct";

import queryString from "query-string";

// prettier-ignore
const SvgSearch = ({ fill="stroke-black"}) => (
    <svg className={fill} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 17.5L13.875 13.875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)
// prettier-ignore
const SvgPlus = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4.16669V15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.1665 10H15.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const categories = [
    { id: 0, name: "Semua" },
    { id: 1, name: "Hobi" },
    { id: 2, name: "Kendaraan" },
    { id: 3, name: "Baju" },
    { id: 4, name: "Elektronik" },
    { id: 5, name: "Kesehatan" },
];

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { totalProducts, products, isLoadingAllProducts } = useSelector(
        (store) => store.product
    );
    const dispatch = useDispatch();
    const [firstRender, setFirstRender] = useState(true);
    const [filterCategory, setFilterCategory] = useState(categories[0]);

    /* ======== use effect for get all products, triggered when query string is added ======== */
    useEffect(() => {
        dispatch(getAllProducts(location.search));
    }, [location.search]);

    /* ======== use effect for categories change ======== */
    useEffect(() => {
        /* ======== first render doesn't add all categories to the query string ======== */
        if (firstRender && filterCategory.id === 0) {
            setFirstRender(false);
            return;
        }

        const queryParsed = queryString.parse(location.search);

        /* ======== check if it's there is no filter ======== */
        if (filterCategory.id === 0) delete queryParsed.categoryId;
        else queryParsed.categoryId = filterCategory.id;

        const queryStringified = queryString.stringify(queryParsed);
        location.search = queryStringified;

        navigate({ pathname: "/", search: location.search });
    }, [filterCategory]);

    return (
        <>
            <Navbar />
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
                                slidesPerView: 1.5,
                                initialSlide: 1,
                            },
                        }}
                        id="banner-swiper"
                    >
                        {[...Array(3)].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center md:h-[200px] lg:h-[288px]">
                                    <div className="md:flex items-center transition-all md:h-4/5 w-full active-child relative bg-transparent md:bg-primary-limegreen03 md:rounded-20px p-0 md:py-8 md:px-10 my-auto">
                                        <div className="relative z-20 flex justify-between items-center w-full 2xl:w-2/3">
                                            <div className="text-neutral-neutral05">
                                                <div className="font-bold text-xl lg:text-4xl mb-4">
                                                    <h1 className="lg:leading-56px">
                                                        Bulan Ramadhan <br />{" "}
                                                        Banyak Diskon
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
                                                    className="h-32 md:h-28 lg:h-auto"
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
                            {categories.map(({ id, name }, index) => {
                                const isSelected = filterCategory.id === id;
                                return (
                                    <SwiperSlide key={index}>
                                        <div className=" cursor-pointer">
                                            <div
                                                onClick={() =>
                                                    setFilterCategory(
                                                        categories[index]
                                                    )
                                                }
                                                className={`${
                                                    isSelected
                                                        ? "bg-primary-darkblue04 text-white"
                                                        : "bg-primary-darkblue01 text-black"
                                                } flex justify-center items-center space-x-2 px-3 md:px-6 py-3 md:py-3.5 text-base rounded-xl `}
                                            >
                                                <SvgSearch
                                                    fill={`${
                                                        isSelected
                                                            ? "stroke-white"
                                                            : "stroke-black"
                                                    }`}
                                                />
                                                <span className="text-sm">
                                                    {name}
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
            <section className="font-poppins md:pt-5 pb-12">
                {/* ======== list products ======== */}
                <div className="container-big grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {isLoadingAllProducts ? (
                        <>
                            {[...Array(20)].map((product, index) => {
                                return (
                                    <CardProduct
                                        product={{ productId: index }}
                                        key={index}
                                    />
                                );
                            })}
                        </>
                    ) : (
                        <>
                            {products.map((product, index) => {
                                return (
                                    <CardProduct
                                        isLoading={false}
                                        product={product}
                                        key={index}
                                    />
                                );
                            })}
                        </>
                    )}
                </div>
                {/* ======== if there is no product ======== */}
                <div className="container-big ">
                    {!isLoadingAllProducts && totalProducts === 0 && (
                        <p className="mt-24 md:mb-24 text-2xl font-bold text-neutral-neutral03 text-center">
                            Tidak ada Produk
                        </p>
                    )}
                </div>
            </section>
            <Button
                onClick={() => navigate("/add_product")}
                className="left-1/2 transform -translate-x-1/2 fixed bottom-7"
            >
                <SvgPlus />
                <span className="ml-4">Jual</span>
            </Button>
        </>
    );
};

export default Home;
