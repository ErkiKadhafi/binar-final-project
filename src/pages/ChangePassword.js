import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";

const ChangePassword = () => {
  return (
    <>
      <Navbar
        showSearchInput={false}
        titleSearch="Ubah Password"
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
            Ubah Password
          </p>

          <form>
            <fieldset className="flex flex-col mt-4 space-y-1">
              <label>Password Lama*</label>
              <Input type="password" placeholder="Password Lama" />
            </fieldset>

            <fieldset className="flex flex-col mt-4 space-y-1">
              <label>Password Baru*</label>
              <Input type="password" placeholder="Password Baru" />
            </fieldset>

            <fieldset className="flex flex-col mt-4 space-y-1">
              <label>Konfirmasi Password Baru*</label>
              <Input type="password" placeholder="Konfirmasi Password Baru" />
            </fieldset>

            <div className="md:absolute flex flex-row items-start mt-6 gap-4">
              <Button className="w-30">Simpan</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
