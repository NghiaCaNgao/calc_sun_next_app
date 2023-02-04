interface IProps {
    data: {
        text: string,
        selected: boolean
    }[],
    pop_in: boolean
}

export default function Selector({ data, pop_in }: IProps) {
    return (
        <div
            className={
                "bg-white shadow-2xl rounded-xl p-4 w-full border-2 border-slate-400 "
                + "max-h-36 overflow-y-scroll absolute top-24 left-0 z-50 "
                + "animate__animated animate__faster "
                + (pop_in
                    ? "animate__fadeInUp"
                    : "animate__fadeOutDown")}>
            {data.map(item => (
                <div
                    key={item.text}
                    className={
                        "hover:bg-gray-100 rounded-md p-2 cursor-pointer "
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