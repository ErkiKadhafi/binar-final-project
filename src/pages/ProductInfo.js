import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import { Link } from "react-router-dom";

const ProductInfo = () => {
    return (
        <section className="pt-112px md:pt-114px">
            <div className="container-small relative">
                <Link
                    to="/"
                    className="md:absolute -left-76px block w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                >
                    {/* prettier-ignore  */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 19L5 12L12 5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <form>
                    <fieldset className="flex flex-col mt-4 space-y-1">
                        <label>Nama Produk</label>
                        <Input type="text" placeholder="Nama Produk" />
                    </fieldset>
                    <fieldset className="flex flex-col mt-4 space-y-1">
                        <label>Harga Produk</label>
                        <Input type="text" placeholder="Harga Produk" />
                    </fieldset>
                    <fieldset className="flex flex-col mt-4 space-y-1">
                        <label>Kategori</label>
                        <Select>
                            <option value="surabaya">Pilih Kategori</option>
                            <option value="jakarta">Accesories</option>
                            <option value="bali">Fashion</option>
                        </Select>
                    </fieldset>
                    <fieldset className="flex flex-col mt-4 space-y-1">
                        <label>Deskripsi</label>
                        <Input
                            type="text"
                            placeholder="Contoh: Jalan Ikan Hiu 33"
                        />
                    </fieldset>
                    <fieldset className="flex flex-col mt-4 space-y-6">
                        <label>Foto Produk</label>
                        <div className="absolute w-24 h-24 flex items-center justify-center mx-auto rounded-lg border-2 border-dashed bg-neutral-neutral02">
                    {/* prettier-ignore  */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 12H19" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>    
                    </fieldset>
                <div className="md:absolute flex flex-row items-start mt-28 gap-4">
                    <Button className="w-64 border border-black bg-white text-black">Preview</Button>
                    <Button className="w-64 ">Terbitkan</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ProductInfo;
