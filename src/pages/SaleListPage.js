import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"
import Button from "../components/Button";
import SaleListPageInterested from "./SaleListPage-Interested";
import SaleListPageProduct from "./SaleListPage-Product";

const SaleListPage = () => {

    // Active Menu with get Params
    const [searchParams, setSearchParams] = useSearchParams()
    const activeMenu = () => {
        switch(searchParams.get('list')){
            case 'Produk':
                return(<SaleListPageProduct/>)
            case 'Diminati':
                return(<SaleListPageInterested/>)
            default:
                return null
        }
    }

    // Style Active Menu
    const [menu, setSelectedMenu] = useState({
        activeMenu  : null,
        content     : [
            {
                id  :  0,
                name: 'Produk',
                icon:
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22.08V12" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            },
            {
                id  :  1,
                name: 'Diminati',
                icon:
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            },
            {
                id  :  2,
                name: 'Terjual',
                icon:
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1V23" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            },
        ]
    })

    const styleButton = 'flex rounded-xl py-3 px-4 gap-2'
    const styleList   = 'flex space-x-2 py-4 cursor-pointer'
    const toggleActiveMenu = (index, event) => {
        setSelectedMenu({
            ...menu, 
            activeMenu    : menu.content[index]})
        setSearchParams({list: `${event.target.innerText}`})
    }

    const styleActiveMenu = (index) => {
        if(window.screen.width <= 768){
            if(menu.content[index] === menu.activeMenu){
                return `${styleButton} text-white bg-primary-darkblue04`
            }else{
                return `${styleButton} bg-primary-darkblue01`
            }
        }else{
            if(menu.content[index] === menu.activeMenu){
                return `${styleList} text-primary-darkblue04 font-medium`
            }else{
                return `${styleList}`
            }
        }
    }
    
    return(
        <section className="font-poppins container-medium">
            <header className="flex space-x-4 items-center md:space-x-0">
                <div className="p-3 md:hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 12H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 6H21" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
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
                        className="md:hidden"
                    >
                        {menu.content.map((element, index) => {
                            return(
                                <SwiperSlide key={index}>
                                    <button onClick = {(event) => {toggleActiveMenu(index, event)}} className={styleActiveMenu(index)}>
                                        <span>
                                            {element.icon}
                                        </span>{element.name}
                                    </button>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <div className="menu-list p-4 min-w-max shadow-lg rounded-2xl">
                        <p className="font-medium">Kategori</p>
                        <ul className="mt-6 divide-y divide-neutral-neutral03">
                            {menu.content.map((element, index) => {
                                return(
                                    <li key={index} onClick = {(event) => {toggleActiveMenu(index, event)}} className={styleActiveMenu(index)}>
                                        {element.icon}
                                        <p className="w-40">{element.name}</p>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke="#D0D0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </menu>
                {activeMenu()}
            </div>
        </section>
    )
}

export default SaleListPage