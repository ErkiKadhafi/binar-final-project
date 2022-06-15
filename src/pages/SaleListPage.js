import React from "react";
import Button from "../components/Button";

const SaleListPage = () => {

    return(
        <section className="font-poppins mx-4">
            <header className="flex items-center">
                <img src="/images/fi_menu.svg" alt="menu" className="p-3" />
                <h3 className="font-bold text-xl ml-4">Daftar Jual Saya</h3>
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
            <menu className="my-6 flex">
                <Button className="py-3 px-4"><span><img src="/images/fi_box.svg" alt="" className="mr-2"/></span>Produk</Button>
                <Button className="py-3 px-4"><span><img src="/images/fi_heart.svg" alt="" className="mr-2"/></span>Diminati</Button>
                <Button className="py-3 px-4"><span><img src="/images/fi_dollar-sign.svg" alt="" className="mr-2"/></span>Terjual</Button>
            </menu>
            <article className="grid grid-cols-2 gap-4">
                <div className="rounded border-2 border-neutral-neutral02 border-dashed flex">
                    <div className="m-auto">
                        <img src="/images/fi_plus.svg" alt="" className="m-auto" />
                        <p className="text-xs text-neutral-neutral03 mt-2">Tambah Produk</p>
                    </div>
                </div>
                <figure className="p-2 rounded shadow">
                    <img src="/images/Product.svg" alt="Product" className="m-auto"/>
                    <figcaption className="my-2">
                        <p className="text-sm mb-1">Jam Tangan Casio</p>
                        <p className="text-xs text-neutral-neutral03">Aksesoris</p>
                    </figcaption>
                    <p className="text-sm mb-4">Rp 250.000</p>
                </figure>
            </article>
        </section>
    )
}

export default SaleListPage