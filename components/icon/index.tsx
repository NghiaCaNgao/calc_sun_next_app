import React from "react";
import ArrowSmallDown from "@/assets/svgs/arrowsmalldown.svg";
import QuestionCircle from "@/assets/svgs/questioncircle.svg";

const IconSet = {
    ArrowSmallDown,
    QuestionCircle
}

interface IProps extends React.ComponentPropsWithoutRef<"svg"> {
    icon: any
}

export default React.forwardRef<HTMLDivElement, IProps>((
    { icon, ...attrs }: IProps, ref: any) => {
    const Icon = icon;

    return (
        <div ref={ref}>
            <Icon viewBox="0 0 25 25" {...attrs} />
        </div>
    )
});

export { IconSet }