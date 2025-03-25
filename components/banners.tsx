import {BANNERS} from "@/lib/settings/banners";
import {cn} from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Banners = () => {
    return <>
        {
            BANNERS.map(
                (banner, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
                        <div className={cn("py-2 px-4 text-center text-sm", {
                            "bg-yellow-500/10 text-yellow-200": banner.color === "yellow",
                            "bg-red-500/10 text-red-200": banner.color === "red",
                            "bg-green-500/10 text-green-200": banner.color === "green",
                            "bg-blue-500/10 text-blue-200": banner.color === "blue",
                            "bg-purple-500/10 text-purple-200": banner.color === "purple",
                            "bg-pink-500/10 text-pink-200": banner.color === "pink",
                            "bg-gray-500/10 text-gray-200": banner.color === "gray",
                        })}>
                            {banner?.title} {banner?.link && banner?.linkText &&
                            <Link href={banner?.link} className="underline">{banner?.linkText}</Link>}
                        </div>
                    </div>
                )
            )
        }
    </>
}

export default Banners;