import { useState, KeyboardEvent } from "react"
import Selector from "./selector";
import Icon, { IconSet } from "../icon";


interface IProps {
    label: string,
    placeholder: string
}

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

export default function InputSelect({ label, placeholder }: IProps) {
    const [isFocus, setFocus] = useState(false);
    const [isShow, setShow] = useState(false);

    function handleKey(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Escape") {
            event.currentTarget.blur();
        }
    }

    return (
        <div className="w-full relative">
            <label className="block text-xl text-gray-500 ml-2 mb-1 items-center">{label}</label>
            <div
                className={
                    "flex items-center rounded-xl box-border border-2 h-11 transition-all overflow-hidden "
                    + (isFocus
                        ? "border-blue-700 text-blue-700 bg-indigo-100"
                        : "text-gray-600 bg-gray-100")
                }>
                <input
                    onFocus={() => { setFocus(true); setShow(true) }}
                    onBlur={() => { setFocus(false); setShow(false) }}
                    placeholder={placeholder}
                    onKeyDown={handleKey}

                    className="p-1 px-3 outline-none w-full bg-transparent h-full">
                </input>
                <button
                    onClick={() => setShow(!isShow)}
                    className={
                        "w-8 h-8 m-1 rounded-md flex justify-center items-center flex-none "
                        + (isFocus
                            ? "bg-indigo-200"
                            : "bg-gray-200")}>
                    <Icon icon={IconSet.ArrowSmallDown} stroke="#62618F" />
                </button>
            </div>
            <Selector data={GMT} pop_in={isShow} />
        </div>
    )
}