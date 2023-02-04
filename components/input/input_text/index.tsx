import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import Input, { InputProps } from "../input";

interface IProps extends InputProps {
    data: string
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
        </Input>
    )
}