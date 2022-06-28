import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
};

const Notification = () => {
    const [width, height] = useWindowSize();
    const navigate = useNavigate();
    useEffect(() => {
        /* ======== breakpoint for medium screen ======== */
        if (width > 768) {
            toast.error("This page not available for desktop screen");
            navigate("/");
        }
    }, [width]);
    return (
        <>
            <Navbar
                titleSearch="Notifikasi"
                showSearchInput={false}
                isCustomTitleSearch={true}
            />
            <section className="pt-2">
                <div className="font-poppins container-small divide-y">
                    {/* ======== card penawaran product ======== */}
                    <div className="flex space-x-4 py-4">
                        {/* ======== item image ======== */}
                        <div className="h-12 w-12 ">
                            <img
                                className="object-cover h-full w-full rounded-xl"
                                src="/images/watch-small.png"
                                alt="watch"
                            />
                        </div>
                        {/* ======== item details ======== */}
                        <div className="grow">
                            <div className="mb-1 flex justify-between items-center text-[10px] text-neutral-neutral03">
                                <h3>Penawaran produk</h3>
                                <h3>
                                    20 Apr, 14:04{" "}
                                    <span className="ml-2 inline-block h-2 w-2 rounded-full bg-alert-danger" />
                                </h3>
                            </div>
                            <div className="text-sm space-y-1">
                                <h1>Jam Tangan Casio</h1>
                                <h1>Rp 250.000</h1>
                                <h1>Ditawar Rp 200.000</h1>
                            </div>
                        </div>
                    </div>
                    {/* ======== card product berhasil diterbitkan ======== */}
                    <div className="flex space-x-4 py-4">
                        {/* ======== item image ======== */}
                        <div className="h-12 w-12 ">
                            <img
                                className="object-cover h-full w-full rounded-xl"
                                src="/images/watch-small.png"
                                alt="watch"
                            />
                        </div>
                        {/* ======== item details ======== */}
                        <div className="grow">
                            <div className="mb-1 flex justify-between items-center text-[10px] text-neutral-neutral03">
                                <h3>Berhasil diterbitkan</h3>
                                <h3>
                                    20 Apr, 14:04{" "}
                                    <span className="ml-2 inline-block h-2 w-2 rounded-full bg-alert-danger" />
                                </h3>
                            </div>
                            <div className="text-sm space-y-1">
                                <h1>Jam Tangan Casio</h1>
                                <h1>Rp 250.000</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Notification;
