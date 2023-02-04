import React, { ChangeEvent, KeyboardEvent, useState } from "react"
import Tippy from '@tippyjs/react';
import Icon, { IconSet } from "../icon";

interface IProps {
    label: string,
    placeholder: string,
    value: string,
    onChange?: (value: string) => void,
    checker?: (value: string) => boolean
}

export default function InputText({ value, label, placeholder, onChange, checker }: IProps) {
    const [isFocus, setFocus] = useState(false);
    const [valueText, setValue] = useState(value)

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        let value = event.currentTarget.value;
        value = (checker && checker(value)) ? value : valueText;
        console.log(value);

        onChange && onChange(value);
        setValue(value);
    }

    function handleKey(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Escape") {
            event.currentTarget.blur();
        }
    }

    return (
        <div className="w-full">
            <label className="text-xl text-gray-500 ml-2 mb-1 flex items-center">
                {label}
                <Tippy content="hello" theme="light">
                    <Icon
                        icon={IconSet.QuestionCircle}
                        stroke="#62618F"
                        height="20" />
                </Tippy>
            </label>
            <input
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
                placeholder={placeholder}
                value={valueText}
                onChange={handleInputChange}
                onKeyDown={handleKey}

                className={
                    "rounded-xl p-1 px-3 h-11 outline-none w-full "
                    + "border-2 transition-all "
                    + (isFocus
                        ? "border-blue-700 text-blue-700 bg-indigo-100 "
                        : "text-gray-600 bg-gray-100")
                }>
            </input>
        </div>
    )
}