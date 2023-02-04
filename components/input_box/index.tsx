import Image from "next/image"
import Logo from "@/assets/images/logo.png";
import { IM_Fell_DW_Pica_SC } from "@next/font/google"
import InputText from "../input/input_text";
import InputSelect from "../input/input_select";
import { useState } from "react";
import ErrorMessage from "../input/error_message/error_message";

const im_fell_dw_pica_sc = IM_Fell_DW_Pica_SC({ subsets: ['latin'], weight: "400" });

const GMT = [{
    text: "GMT +01:00",
    selected: false,
}, {
    text: "GMT +01:00",
    selected: false,
},
{
    text: "GMT +01:00",
    selected: false,
}, {
    text: "GMT +01:00",
    selected: true,
}, {
    text: "GMT +01:00",
    selected: false,
}, {
    text: "GMT +01:00",
    selected: false,
}]

export default function InputBox() {
    const [lat, setLat] = useState(21);
    const [long, setLong] = useState(105);
    const [error_1, setError_1] = useState("");

    function onHandleLatChange(value: string) {
        setLat(Number(value));
    }

    function latitudeChecker(value: string): string {
        if (value === "-")
            return ""
        else if (isNaN(Number(value))
            || Number(value) < -90
            || Number(value) > 90)
            return "Field must be a number in range [-90, 90]";
        else return "";
    }

    function onHandleLongChange(value: string) {
        setLong(Number(value));
    }

    function longitudeChecker(value: string): string {
        if (value === "-")
            return ""
        else if (isNaN(Number(value))
            || Number(value) < -180
            || Number(value) > 180)
            return "Field must be a number in range [-180, 180]";
        else return "";
    }

    function placeChecker(value: string): string {
        return "hello";
    }

    return (
        <div className="bg-white m-2 p-2 rounded-2xl shadow-xl">
            <div className={(im_fell_dw_pica_sc.className + " flex text-4xl items-center p-2")}>
                <div className="h-16 w-16">
                    <Image src={Logo} alt="a beautiful sun" className="object-scale-down"></Image>
                </div>
                <h3 className="ml-2 text-gray-800">SunMoving</h3>
            </div>


            <div className="ml-5 ">
                <ErrorMessage message={error_1} />
            </div>

            <div className="grid grid-rows-3 p-5">
                <div>
                    <InputSelect
                        label="Place"
                        placeholder="hanoi, vietnam"
                        data={GMT}
                        checker={placeChecker}
                        onError={(error) => { setError_1(error) }} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <InputText
                            label="Latitude"
                            placeholder="21"
                            data={lat.toString()}
                            onValueChange={onHandleLatChange}
                            onError={(error) => { setError_1(error) }}
                            checker={latitudeChecker}
                            tooltipContent="This is a helper" />
                    </div>
                    <div>
                        <InputText
                            label="Longitude"
                            placeholder="105"
                            data={long.toString()}
                            onValueChange={onHandleLongChange}
                            onError={(error) => { setError_1(error) }}
                            checker={longitudeChecker} />
                    </div>
                </div>

                <div>
                    <InputSelect
                        label="Time zone"
                        placeholder="GMT +7:00 : Bangkok"
                        data={GMT}
                        onError={(error) => { setError_1(error) }} />
                </div>
            </div>
        </div>
    )
}