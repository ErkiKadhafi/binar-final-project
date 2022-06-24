import React from "react";

const SaleListPageInterested = () => {

    return (
        <article className="mt-2 divide-y divide-neutral-neutral02">
            {Array.from([1, 2, 3], index => {
                return(
                    <div className="flex space-x-4 py-4" key={index}>
                        <img src="./images/watch-small.png" alt="" className="h-max" />
                        <div className="w-full space-y-1">
                            <div className="flex justify-between">
                                <p className="text-xs text-neutral-neutral03">Penawaran produk</p>
                                <p className="text-xs text-neutral-neutral03">20 Apr, 14:04</p>
                            </div>
                            <p>Jam Tangan Casio</p>
                            <p>Rp 250.000</p>
                            <p>Ditawar Rp 200.000</p>
                        </div>
                    </div>   
                )
            })}
        </article>
    )
}

export default SaleListPageInterested