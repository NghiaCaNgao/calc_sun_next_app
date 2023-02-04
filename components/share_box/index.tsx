import { useState } from "react";
import Icon, { IconSet } from "../icon";
import InputText from "../input/input_text";
import SavedBox from "./saved_box";

export default function ShareBox() {
    const [show_share_box, set_show_share_box] = useState(false);
    return (
        <div>
            <div className="m-3 bg-white rounded-2xl shadow-xl border-gray-300 p-2">
                <button className="outline-none h-12 w-12 rounded-xl hover:bg-indigo-200 transition-all ease-in-out flex justify-center items-center">
                    <Icon icon={IconSet.Bookmark} stroke="#001A72" strokeWidth={1.5} />
                </button>
                <button className="outline-none h-12 w-12 rounded-xl hover:bg-indigo-200 transition-all ease-in-out flex justify-center items-center">
                    <Icon icon={IconSet.Share1} stroke="#001A72" strokeWidth={1.5} />
                </button>
            </div>

            <div className="absolute top-0 right-20 m-3">
                <div className="bg-white w-96 rounded-2xl shadow-2xl p-3">
                    <InputText label="Link to share" data="a" placeholder="abc.xyz" copy_button />
                </div>
            </div>

            <div className="absolute top-0 right-20 m-3">
                <SavedBox />
            </div>
        </div>
    )
}