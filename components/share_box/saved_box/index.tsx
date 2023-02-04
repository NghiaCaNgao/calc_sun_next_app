import Icon, { IconSet } from "@/components/icon";
import ItemBox from "./item_box";

export default function SavedBox() {
    return (
        <div className="w-96 bg-white rounded-2xl shadow-xl p-3">
            <div className="flex justify-between">
                <h1 className="text-xl text-gray-800">Saved places</h1>
                <div>
                    <button className="hover:bg-indigo-100 rounded-xl p-1 mx-1">
                        <Icon icon={IconSet.Stop} stroke="#001A72" strokeWidth={1.5} />
                    </button>
                    <button>
                        <Icon icon={IconSet.Trash1} stroke="#F5F5F5" />
                    </button>
                </div>
                <h2 className="text-lg text-gray-300">3 places</h2>
            </div>

            <div>
                <ItemBox lat_long_mode name="Hanoi, Vietnam" lat={21} long={105} />
            </div>
        </div>
    )
}