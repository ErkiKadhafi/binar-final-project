import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import { addProduct } from "../features/user/product/productSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddProduct = () => {

    const dispatch = useDispatch
    const [image, setImage] = useState()
    const userState = JSON.parse(localStorage.getItem("secondhand"))
    const initialValues = {
        productName : "",
        description : "",
        price       : "",
        categoryId  : "",
        image       : image,
    }

    const categoryOptions = [
        {key: 'Pilih Kategori', value:''},
        {key: 'Sepatu', value:1},
        {key: 'Baju', value:2},
        {key: 'Jam Tangan', value:3},
    ]

    const validationSchema = () => {
        const validationObject = {
            product: Yup.string().required(
                "Masukkan Nama Produk"
            )
        }
        return Yup.object().shape(validationObject)
    }

    const formik = useFormik({
        initialValues,
        // validationSchema,
        onSubmit: (values) => {
            if(userState){
                console.log(values)
                // dispatch(addProduct(values))
            }else{
                toast.info("Silakan Login Terlebih Dahulu");
            }
        },
    });
    
    // console.log(formik.errors.product)
    // console.log(image)
    return (
        <>
            <Navbar
                showSearchInput={false}
                titleSearch="Lengkapi Detail Produk"
                showOnMobile={false}
            />
            <section className="pt-5 md:pt-8">
                <div className="container-small relative">
                    <Link
                        to="/"
                        className="absolute md:-left-76px block w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                    >
                        {/* prettier-ignore  */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 19L5 12L12 5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <p className="text-center font-medium mb-10 md:hidden pt-1">
                        Lengkapi Detail Produk
                    </p>
                    <form onSubmit={formik.handleSubmit} method="POST">
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>Nama Produk</label>
                            <Input 
                                type="text" 
                                id='productName'
                                name='productName'
                                placeholder="Nama Produk"
                                onChange={formik.handleChange}
                                value={formik.values.productName}
                            />
                            {formik.touched.product && formik.errors.product && (
                            <span className="text-sm text-red-500">
                                {formik.errors.product}
                            </span>
                            )}
                        </fieldset>
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>Harga Produk</label>
                            <Input 
                                type="number"
                                id='price'
                                name='price'
                                placeholder="Harga Produk"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            />
                        </fieldset>
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>Kategori</label>
                            <Select
                                name='categoryId' 
                                options={categoryOptions} 
                                onChange={formik.handleChange} 
                                 >
                            </Select>
                        </fieldset>
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>Deskripsi</label>
                            <Input
                                type="text"
                                id='description'
                                name='description'
                                placeholder="Contoh: Jalan Ikan Hiu 33"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                        </fieldset>
                        <fieldset className="flex flex-col mt-4 space-y-6">
                            <label>Foto Produk</label>
                            <div className="absolute w-24 h-24 flex items-center justify-center mx-auto rounded-lg border-2 border-dashed bg-neutral-neutral02">
                                {/* prettier-ignore  */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 12H19" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <input 
                                    type='file'
                                    id='images'
                                    name='images'
                                    accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className="absolute h-full w-full opacity-0" />
                            </div>
                        </fieldset>
                        <div className="md:absolute flex flex-row items-start mt-28 gap-4">
                            <Button className="w-64" variant="secondary">
                                Preview
                            </Button>
                            <Button type="submit" className="w-64 ">Terbitkan</Button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddProduct;
