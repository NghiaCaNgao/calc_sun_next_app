import dynamic from "next/dynamic";
import InputBox from "@/components/input_box";
import { Itim } from "@next/font/google";
import { ToastContainer } from 'react-toastify';
import 'animate.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'react-toastify/dist/ReactToastify.css';
import ResultBox from "@/components/result_box";
import ShareBox from "@/components/share_box";

const itim = Itim({ subsets: ["latin"], weight: "400" });

const MapWithNoSSR = dynamic<{}>(() => import('../components/Map'), {
  ssr: false
});

export default function Home() {
  return (
    <div className={itim.className + " h-screen w-screen bg-red-200 relative"}>
      <MapWithNoSSR />

      <div className="absolute top-0 left-0 z-10 w-[420px]">
        <InputBox />
        <ResultBox />
      </div>

      <div className="absolute top-0 right-0 z-10">
        <ShareBox />
      </div>

      <ToastContainer />
    </div>
  )
}
