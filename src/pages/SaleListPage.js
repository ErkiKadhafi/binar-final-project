import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import Button from "../components/Button";

const SaleListPage = () => {

    return(
        <section className="font-poppins container-medium">
            <header className="flex space-x-4 items-center md:space-x-0">
                <img src="/images/fi_menu.svg" alt="menu" className="p-3 md:hidden" />
                <h3 className="font-bold text-xl">Daftar Jual Saya</h3>
            </header>
            <figure className="flex justify-between mt-2 p-4 shadow rounded-2xl">
                <div className="flex space-x-4">
                    <img src="/images/Profile.svg" alt="Profile" />
                    <figcaption className="space-y-1 my-auto"> 
                        <p className="font-medium">Nama Penjual</p>
                        <p className="text-xs text-neutral-neutral03">Kota</p>
                    </figcaption>
                </div>
                <Button variant="outlined" className="my-auto px-3 py-1">Edit</Button>
            </figure>
            <div className="mt-6 md:flex md:space-x-8">
                <menu>
                    <Swiper
                        id="button-swiper"
                        spaceBetween={16}
                        slidesPerView={2.5}
                        className="mb-6 md:hidden"
                    >
                        <SwiperSlide>
                            <Button className="py-3 px-4"><span><img src="/images/fi_box.svg" alt="" className="mr-2"/></span>Produk</Button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Button variant="secondary" className="py-3 px-4"><span><img src="/images/fi_heart.svg" alt="" className="mr-2"/></span>Diminati</Button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Button variant="secondary" className="py-3 px-4"><span><img src="/images/fi_dollar-sign.svg" alt="" className="mr-2"/></span>Terjual</Button>
                        </SwiperSlide>
                    </Swiper>

                    <div className="menu-list p-4 min-w-max shadow-lg rounded-2xl">
                        <p className="font-medium">Kategori</p>
                        <ul className="mt-6 divide-y divide-neutral-neutral03">
                            <li className="flex space-x-2 py-4 font-medium text-primary-darkblue04">
                                <img src="/images/fi_box.svg" alt="" />
                                <p className="w-40">Semua Produk</p>
                                <img src="/images/fi_chevron-right.svg" alt="" />
                            </li>
                            <li className="flex space-x-2 py-4">
                                <img src="/images/fi_heart.svg" alt=""/>
                                <p className="w-40">Diminati</p>
                                <img src="/images/fi_chevron-right.svg" alt="" />
                            </li>
                            <li className="flex space-x-2 py-4">
                                <img src="/images/fi_dollar-sign.svg" alt=""/>
                                <p className="w-40">Terjual</p>
                                <img src="/images/fi_chevron-right.svg" alt="" />
                            </li>
                        </ul>
                    </div>
                </menu>

                <article className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
                    <div className="rounded border-2 border-neutral-neutral02 border-dashed flex">
                        <div className="m-auto">
                            <img src="/images/fi_plus.svg" alt="" className="m-auto" />
                            <p className="text-xs text-neutral-neutral03 mt-2">Tambah Produk</p>
                        </div>
                    </div>
                    {Array.from([1, 2, 3, 4, 5, 6], index => {
                        return(
                            <figure className="p-2 rounded shadow" key={index}>
                                <img src="/images/Product.svg" alt="Product" className="m-auto"/>
                                <figcaption className="my-2">
                                    <p className="text-sm mb-1">Jam Tangan Casio</p>
                                    <p className="text-xs text-neutral-neutral03">Aksesoris</p>
                                </figcaption>
                                <p className="text-sm mb-4">Rp 250.000</p>
                            </figure>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default SaleListPage