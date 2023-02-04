import CityImage from "@/assets/images/city.png";
import LatLongImage from "@/assets/images/lat_long.png"
import InputText from "@/components/input/input_text";
import Image from "next/image";

interface IProps {
    lat_long_mode: boolean,
    name: string,
    lat: number,
    long: number
}

export default function ItemBox(props: IProps) {
    return (
        <div className="flex">
            <div className="h-12 w-12">
                <Image
                    src={props.lat_long_mode ? LatLongImage : CityImage}
                    alt={props.lat_long_mode ? "lat long image" : "city image"}
                    className="object-scale-down" />
            </div>
            <div>
                <InputText label="" placeholder="place name" data={props.name} />
                <div className="flex">
                    <InputText label="" placeholder="Latitude" data={props.lat.toString()} />
                    <InputText label="" placeholder="Longitude" data={props.long.toString()} />
                </div>
            </div>
        </div>
    )
}