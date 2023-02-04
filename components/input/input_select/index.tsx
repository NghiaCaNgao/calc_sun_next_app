import { useState, KeyboardEvent, ChangeEvent } from "react"
import Selector from "./selector";
import Icon, { IconSet } from "../../icon";
import Input, { InputProps } from "../input";

interface IProps extends InputProps {
    data: {
        text: string,
        selected: boolean
    }[]
}

export default function InputSelect(props: IProps) {
    const [isFocus, setFocus] = useState(false);
    const [isShow, setShow] = useState(false);
    const [value, setValue] = useState("");
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
        setShow(false)
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
                onFocus={() => { setFocus(true); setShow(true) }}
                onBlur={handleBlur}
                placeholder={props.placeholder}
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKey}

                className="p-1 px-3 outline-none w-full bg-transparent h-full">
            </input>
            <button
                onClick={() => setShow(!isShow)}
                className={
                    "w-8 h-8 m-1 rounded-md flex justify-center items-center flex-none outline-none "
                    + (isFocus
                        ? error
                            ? "bg-red-200"
                            : "bg-indigo-200"
                        : "bg-gray-200")}>
                <Icon icon={IconSet.ArrowSmallDown} stroke="#62618F" />
            </button>
            <Selector data={props.data} pop_in={isShow} />
        </Input >
    )
}