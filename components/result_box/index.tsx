import { ResultInfo } from "../input/result_infor";
import Sunrise from "@/assets/images/sunrise.png"
import Sunset from "@/assets/images/sunset.png";
import SolarNoon from "@/assets/images/sun.png";
import DayLight from "@/assets/images/daylight.png";
import EqTime from "@/assets/images/eqtime.png";
import TST from "@/assets/images/duration.png";

export default function ResultBox() {
    return (
        <div className="bg-white m-2 p-5 rounded-2xl shadow-xl">
            <div className="grid grid-cols-3 gap-3">
                <ResultInfo
                    src={Sunrise}
                    title="sunrise"
                    value="6:30" />
                <ResultInfo
                    src={Sunset}
                    title="sunset"
                    value="18:30" />
                <ResultInfo
                    src={SolarNoon}
                    title="solar noon"
                    value="12:00" />
                <ResultInfo
                    src={DayLight}
                    title="daylight"
                    value="12:00" />
                <ResultInfo
                    src={EqTime}
                    title="eq time"
                    value="12:00" />
                <ResultInfo
                    src={TST}
                    title="tst"
                    value="12:00" />
            </div>
        </div>
    )
}