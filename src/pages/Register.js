import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {

    return(
        <section className="mx-5 font-poppins lg:grid lg:grid-cols-2 lg:mx-0">
            <img src="/images/banner-login.svg" alt="banner-login" className="banner-login w-full h-screen object-cover" />
            <div className="gap-6 flex flex-col sm:w-3/5 sm:m-auto">
                <header className='py-4 lg:hidden'>
                    <img src="/images/fi_arrow-left.svg" alt=''/>
                </header>
                <h2 className='text-2xl font-bold'>Daftar</h2>
                <form>
                    <fieldset className='flex flex-col gap-1'>
                        <label>Nama</label>
                        <Input type="text" placeholder="Nama Lengkap"/>
                    </fieldset>
                    <fieldset className='flex flex-col gap-1 mt-4'>
                        <label>Email</label>
                        <Input type="email" placeholder="Contoh: johndee@gmail.com"/>
                    </fieldset>
                    <fieldset className='flex flex-col gap-1 mt-4'>
                        <label>Buat Password</label>
                        <Input type="password" placeholder="Buat password" />
                    </fieldset>
                    <Button className="w-full mt-6">Daftar</Button>
                </form>
                <p className="link-register mt-4">Sudah punya akun?
                    <a href="/login" className="text-primary-darkblue04 font-bold ml-2">Masuk di sini</a>
                </p>
            </div>
        </section>
    )
}

export default Register