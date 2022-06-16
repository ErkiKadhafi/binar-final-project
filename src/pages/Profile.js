import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <section className="pt-118px md:pt-116px">
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

                <div className="w-24 h-24 flex items-center justify-center mx-auto rounded-lg bg-primary-darkblue01">
                    {/* prettier-ignore  */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <form>
                    <fieldset className="flex flex-col mt-4 space-y-1">
                        <label>Nama*</label>
                        <Input type="text" placeholder="Nama" />
                    </fieldset>
                    <fieldset className="flex flex-col mt-4 space-y-1">
                        <label>Pilih Kota*</label>
                        <Select>
                            <option value="surabaya">Surabaya</option>
                            <option value="jakarta">Jakarta</option>
                            <option value="bali">Bali</option>
                        </Select>
                    </fieldset>
                    <fieldset className="flex flex-col mt-4 space-y-1">
                        <label>Alamat*</label>
                        <Input
                            type="password"
                            placeholder="Contoh: Jalan Ikan Hiu 33"
                        />
                    </fieldset>
                    <fieldset className="flex flex-col mt-4 space-y-1">
                        <label>No Handphone*</label>
                        <Input
                            type="password"
                            placeholder="Contoh: +6282222222"
                        />
                    </fieldset>
                    <Button className="w-full mt-6">Simpan</Button>
                </form>
            </div>
        </section>
    );
};

export default Profile;
