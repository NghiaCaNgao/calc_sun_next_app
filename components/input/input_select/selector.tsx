import { useReducer } from "react";

interface IProps {
    data: {
        text: string,
        selected: boolean
    }[],
    pop_in: boolean
}

export default function Selector({ data, pop_in }: IProps) {
    let [state, dispatch] = useReducer(() => ({ is_first_show: true }),
        { is_first_show: false });

    if (!state.is_first_show && pop_in) dispatch();

    return (
        <div
            className={
                "bg-white shadow-2xl rounded-xl p-4 w-full border-2 border-slate-400 "
                + "max-h-36 overflow-y-scroll absolute top-20 left-0 "
                + "animate__animated animate__faster transition-all duration-500 scroll-smooth "
                + (!state.is_first_show
                    ? "hidden "
                    : pop_in
                        ? "animate__fadeInUp z-50"
                        : "animate__fadeOutDown -z-10")
            }>
            {data.map((item, index) => (
                <div
                    key={index}
                    className={
                        "hover:bg-gray-100 rounded-md p-2 cursor-pointer text-gray-800 "
                        + (item.selected
                            ? "relative before:absolute before:top-2 before:-left-2 "
                            + "before:w-1 before:h-2/3 before:bg-blue-400 before:rounded-md"
                            : "")
                    }>
                    {item.text}
                </div>
            ))}
        </div>
    )
}