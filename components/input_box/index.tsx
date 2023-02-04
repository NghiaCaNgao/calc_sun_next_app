import Image from "next/image"
import Logo from "@/assets/images/logo.png";
import { IM_Fell_DW_Pica_SC } from "@next/font/google"
import InputText from "../input_text";
import InputSelect from "../input_select";
import { useState } from "react";

const im_fell_dw_pica_sc = IM_Fell_DW_Pica_SC({ subsets: ['latin'], weight: "400" });

export default function InputBox() {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);

    function onHandleLatChange(value: string) {
        setLat(Number(value));
    }

    function latitudeChecker(value: string) {
        return (!isNaN(Number(value))
            && Number(value) >= -90
            && Number(value) <= 90)
            || value == "-";
    }

    function onHandleLongChange(value: string) {
        setLong(Number(value));
    }

    function longitudeChecker(value: string) {
        return (!isNaN(Number(value))
            && Number(value) >= -180
            && Number(value) <= 180)
            || value == "-";
    }

    return (
        <div className="bg-white w-96 m-2 p-2 rounded-2xl shadow-xl">
            <div className={(im_fell_dw_pica_sc.className + " flex text-4xl items-center p-2")}>
                <div className="h-16 w-16">
                    <Image src={Logo} alt="a beautiful sun" className="object-scale-down"></Image>
                </div>
                <h3 className="ml-2 text-gray-800">SunMoving</h3>
            </div>

            <div className="grid grid-rows-3 gap-2 p-5">
                <div>
                    <InputSelect label="Place" placeholder="hanoi, vietnam" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <InputText
                            label="Latitude"
                            placeholder="21"
                            value={lat.toString()}
                            onChange={onHandleLatChange}
                            checker={latitudeChecker} />
                    </div>
                    <div>
                        <InputText
                            label="Longitude"
                            placeholder="105"
                            value={long.toString()}
                            onChange={onHandleLongChange}
                            checker={longitudeChecker} />
                    </div>
                </div>
                <div>
                    <InputSelect label="Time zone" placeholder="GMT +7:00 : Bangkok" />
                </div>
            </div>
        </div>
    )
}