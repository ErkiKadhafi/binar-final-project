import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {

    return(
        <section className="mx-5 font-poppins lg:grid lg:grid-cols-2 lg:mx-0">
            <img src="/images/banner-login.svg" alt="banner-login" className="banner-login w-full h-screen object-cover" />
            <div className="space-y-6 md:flex md:flex-col md:w-3/5 md:m-auto">
                <header className='py-4 lg:hidden'>
                    <img src="/images/fi_arrow-left.svg" alt=''/>
                </header>
                <h2 className='text-2xl font-bold'>Masuk</h2>
                <form>
                    <fieldset className='flex flex-col gap-1'>
                        <label>Email</label>
                        <Input type="email" placeholder="Contoh: johndee@gmail.com"/>
                    </fieldset>
                    <fieldset className='flex flex-col gap-1 mt-4'>
                        <label>Password</label>
                        <Input type="password" placeholder="Masukkan password" />
                    </fieldset>
                    <Button className="w-full mt-6" >Masuk</Button>
                </form>
                <p className="text-center">Belum punya akun?
                    <a href="/register" className="text-primary-darkblue04 font-bold ml-2">Daftar di sini</a>
                </p>
            </div>
        </section>
    )
}

export default Login