import React, {useState} from "react";

// prettier-ignore
const Svglogoungu = () => (
    <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="34" fill="#4B1979"/>
    </svg>
)
// prettier-ignore
const Svglup = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)
// prettier-ignore
const Svgmasuk = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.33325 14.1666L12.4999 9.99992L8.33325 5.83325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.5 10H2.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)

function Navbar() {
  return (
    // Start Navbar Dekstop

    <div className=" bg-white w-full drop-shadow-md py-5 sticky top-0 z-10">
      <div className="container-big flex">
        <div className="nav-left flex items-center ">
          <Svglogoungu />
          {/* <img src="/logoungu.svg"></img> */}
          <div className="form-search bg-[#EEEEEE] flex ml-4 p-4 rounded-2xl w-[500px]">
            {/* <button className="text-md bg-transparent w-full">
              <p className="text-[#8A8A8A] flex ml-4 my-auto ">
                Cari di sini ...
              </p>
            </button> */}
            <input
              className="text-md bg-transparent w-full outline-none"
              placeholder="Cari di sini ..."
            />
            <Svglup />
            {/* <img src="/lup.svg"></img> */}
          </div>
        </div>
        <div className="nav-right ml-auto">
          <button className="bg-[#7126B5] text-white p-4 rounded-2xl flex items-center ">
            <Svgmasuk />
            {/* <img src="/masuk.svg"></img> */}
            <p className="ml-2 my-auto ">Masuk</p>
          </button>
        </div>
      </div>
    </div>

    // End of Navbar Dekstop

    // Start Side Bar

    // End of Side Bar
  );
}

export default Navbar;
