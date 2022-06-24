import React from "react";

const SaleListPageProduct = () => {

    return(
        <article className="w-full mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
            <div className="rounded border-2 border-neutral-neutral02 border-dashed flex">
                <div className="m-auto">
                    <div className="m-auto w-max">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5 12H19" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="text-xs text-neutral-neutral03 mt-2">Tambah Produk</p>
                </div>
            </div>
            {Array.from([1, 2, 3, 4, 5, 6], index => {
                return(
                    <figure className="p-2 rounded shadow" key={index}>
                        <img src="/images/Product.svg" alt="Product" className="m-auto"/>
                        <figcaption className="my-2">
                            <p className="text-sm mb-1">Jam Tangan Casio</p>
                            <p className="text-xs text-neutral-neutral03">Aksesoris</p>
                        </figcaption>
                        <p className="text-sm mb-4">Rp 250.000</p>
                    </figure>
                )
            })}
        </article>
    )
}

export default SaleListPageProduct