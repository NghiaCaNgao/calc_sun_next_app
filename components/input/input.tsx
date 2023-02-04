import React, { ReactNode, useState } from "react";
import Tippy from '@tippyjs/react';
import Icon, { IconSet } from "@/components/icon";

export interface InputProps {
    label: string,
    placeholder: string,
    tooltipContent?: string,
    children?: ReactNode,
    focus?: boolean,
    error?: string
    checker?: (value: string) => string,
    onValueChange?: (value: string) => void,
    onError?: (value: string) => void
}

export default function Input(props: InputProps) {
    return (
        <div className="w-full relative">
            <label className="text-xl text-gray-500 ml-2 mb-1 flex items-center">
                {props.label}
                {(props.tooltipContent)
                    ? (<Tippy content={props.tooltipContent} theme="light">
                        <Icon
                            icon={IconSet.QuestionCircle}
                            stroke="#62618F"
                            height="20" />
                    </Tippy>)
                    : void 0}
            </label>

            <div
                className={
                    "rounded-xl  h-11 outline-none w-full overflow-hidden "
                    + "border-2 transition-all flex items-center box-border "
                    + (props.focus
                        ? props.error != ""
                            ? "border-red-400 text-red-700 bg-red-100 "
                            : "border-blue-700 text-blue-700 bg-indigo-100 "
                        : "text-gray-600 bg-gray-100 ")
                }>
                {props.children}
            </div>
        </div >
    )
}