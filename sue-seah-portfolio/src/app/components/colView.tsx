import { useState, useEffect } from "react";
import OneColIcon from "../../../public/svg/oneCol"
import TwoColIcon from "../../../public/svg/twoCol"
import ThreeColIcon from "../../../public/svg/threeCol"

export default function ColView() {
    return (
        <div className="w-full flex flex-row justify-end gap-[20px] text-primary-400">
            <div className="cursor-pointer hover:text-primary-900">
                <OneColIcon />
            </div>
            <div className="cursor-pointer hover:text-primary-900">
                <TwoColIcon />
            </div>
            <div className="cursor-pointer hover:text-primary-900">
                <ThreeColIcon />
            </div>
        </div>
    )
}