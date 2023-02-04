import Icon, { IconSet } from "@/components/icon";
import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import Input, { InputProps } from "../input";
import { toast } from 'react-toastify';

interface IProps extends InputProps {
    data: string,
    copy_button?: boolean
}

export default function InputText(props: IProps) {
    const [isFocus, setFocus] = useState(false);
    const [value, setValue] = useState(props.data);
    const [error, setError] = useState("");

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        let valueText = event.currentTarget.value;
        const tmp_check_result = (props.checker) ? props.checker(valueText) : "";
        console.log(valueText, tmp_check_result);

        setError(tmp_check_result);
        valueText = (tmp_check_result === "") ? valueText : value;

        props.onValueChange && props.onValueChange(valueText);
        props.onError && props.onError(tmp_check_result);
        setValue(valueText);
    }

    function handleBlur() {
        setFocus(false);
        setError("");
        props.onError && props.onError("");
    }

    function handleKey(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Escape") {
            event.currentTarget.blur();
        }
    }

    function copy() {
        navigator.clipboard.writeText(value);
        toast("Copied to clipboard!", { position: "top-center" })
    }

    return (
        <Input {...props} focus={isFocus} error={error}>
            <input
                placeholder={props.placeholder}
                value={value}
                onFocus={() => { setFocus(true); }}
                onBlur={handleBlur}
                onChange={handleInputChange}
                onKeyDown={handleKey}
                className="p-1 px-3 outline-none w-full bg-transparent h-full">
            </input>
            {props.copy_button ?
                (<button
                    onClick={copy}
                    className={
                        "w-8 h-8 m-1 rounded-md flex justify-center items-center flex-none outline-none "
                        + "hover:bg-indigo-200 "
                        + (isFocus
                            ? error
                                ? "bg-red-200"
                                : "bg-indigo-200"
                            : "bg-gray-200")}>
                    <Icon icon={IconSet.Copy} stroke="#62618F" />
                </button>)
                : void 0}
        </Input>
    )
}