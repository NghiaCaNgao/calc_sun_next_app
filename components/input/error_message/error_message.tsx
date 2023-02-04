interface IProps {
    message: string
}

export default function ErrorMessage({ message }: IProps) {
    return (
        <h4
            className={"ml-2 text-red-700 text-sm transition-all ease-in-out "
                + (message === "" ? "h-0" : "h-5")}>
            {message}
        </h4>
    )
}