import React from "react";
import ArrowSmallDown from "@/assets/svgs/arrowsmalldown.svg";
import QuestionCircle from "@/assets/svgs/questioncircle.svg";
import NewScreen from "@/assets/svgs/newscreen.svg";
import Bookmark from "@/assets/svgs/bookmark.svg";
import Share1 from "@/assets/svgs/share1.svg";
import Copy from "@/assets/svgs/copy.svg";
import Trash1 from "@/assets/svgs/trash1.svg";
import Stop from "@/assets/svgs/stop.svg";

const IconSet = {
    ArrowSmallDown,
    QuestionCircle,
    NewScreen,
    Bookmark,
    Share1,
    Copy,
    Trash1,
    Stop
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