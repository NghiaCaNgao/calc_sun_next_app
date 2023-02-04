import dynamic from "next/dynamic";
import InputBox from "@/components/input_box";
import { Itim } from "@next/font/google";
import 'animate.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

const itim = Itim({ subsets: ["latin"], weight: "400" });

const MapWithNoSSR = dynamic<{}>(() => import('../components/Map'), {
  ssr: false
});

export default function Home() {
  return (
    <div className={itim.className + " h-screen w-screen bg-red-200 relative"}>
      <MapWithNoSSR />
      <div className="absolute top-0 left-0 z-10">
        <InputBox />
      </div>
    </div>
  )
}
