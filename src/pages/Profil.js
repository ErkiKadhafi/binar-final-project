import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Profil = () => {

    return(
        <section className="h-screen mx-4 font-poppins md:grid md:grid-cols-2 md:mx-0">
            <div className="space-y-6 md:flex md:flex-col md:w-3/5 md:m-auto">
                <header className='py-4 md:hidden'>
                    <img src="/images/fi_arrow-left.svg" alt=''/>
                </header>
                <div className='flex'>
                  <img clas="" src="/images/fi_camera.svg" alt=""/>
                </div>
                <form>
                    <fieldset className='flex flex-col gap-1 mt-4'>
                        <label>Nama*</label>
                        <Input type="text" placeholder="Nama"/>
                    </fieldset>
                    <fieldset className='flex flex-col gap-1 mt-4'>
                        <label>Kota*</label>
                        <Input type="email" placeholder="Kota"/>
                    </fieldset>
                    <fieldset className='flex flex-col gap-1 mt-4'>
                        <label>Alamat*</label>
                        <Input type="password" placeholder="Contoh: Jalan Ikan Hiu 33" />
                    </fieldset>
                    <fieldset className='flex flex-col gap-1 mt-4'>
                        <label>No Handphone*</label>
                        <Input type="password" placeholder="Contoh: +6282222222" />
                    </fieldset>
                    <Button className="w-full mt-6 bg-primary-darkblue05">Simpan</Button>
                </form>
            </div>
        </section>
    )
}

export default Profil