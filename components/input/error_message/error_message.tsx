interface IProps {
    message: string
}

export default function ErrorMessage({ message }: IProps) {
    return (
        <h4
            className="ml-2 text-red-700 text-sm h-5">
            {message}
        </h4>
    )
}