import Icon, { IconSet } from "@/components/icon";
import Image from "next/image";
import { useState } from "react";
interface IProps {
    src: any,
    title: string,
    value: string
}

export function ResultInfo(props: IProps) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}

            className={
                "hover:bg-wite hover:shadow-xl border-2 hover:border-blue-700 rounded-2xl hover:bg-white h-40 "
                + "box-border overflow-hidden transition-all ease-in-out bg-gray-50 flex flex-col relative"}>
            <div className=" rounded-lg flex flex-col items-center justify-center flex-grow">
                <div className="h-24 w-24 flex justify-center items-center">
                    <Image src={props.src} alt="illustration" className="object-scale-down" />
                </div>
                <h1 className="text-gray-800 text-center -mt-4">{props.title}</h1>
            </div>
            <div
                className={
                    "rounded-lg text-center p-1 box-border transition-all ease-in-out flex-none "
                    + (hover
                        ? "m-2 blue-gradient text-white"
                        : "m-0 bg-gray-200 text-gray-800")
                }>
                <h1>{props.value}</h1>
            </div>

            <div
                className={
                    "absolute top-2 right-2 cursor-pointer transition-all ease-in-out "
                    + (hover ? "z-10 opacity-100" : "-z-10 opacity-0")}>
                <Icon icon={IconSet.NewScreen} stroke="blue" strokeWidth={2} width="20" height="20" />
            </div>
        </div>
    )
}