import { Line } from "./App";
import { Kakaupii } from "./material/Kahapii";
import QRCode from "react-qr-code";

export function Flyer() {
  return (
    <div className="relative h-[1055px] flex flex-col justify-start bg-[#4b89e3]">
      <div className="bg-white p-8 pl-24 flex gap-2">
        <Kakaupii />
        <div className="inline-block pt-4 ">
          <span className="mochiy-pop-one-regular text-3xl leading-0">
            .com
          </span>
        </div>
      </div>

      {/* <div className="flex-1 flex flex-col justify-between items-center"></div> */}
      <img src={"/flyer.PNG"} />
      <div className="absolute left-0 right-0 bottom-0 w-full bg-[#2d5691] p-4 lexend-400">
        <div className="max-w-[780px] px-12 m-auto">
          <Line
            text={"E hoʻoikaika ai ka heluhelu ʻana me ka ʻokina kahakō ʻole."}
          />
        </div>
      </div>
      <div className="lexend-400 absolute top-[470px] left-[300px] max-w-58 text-white bg-[#476a0c]/95 text-3xl rounded-2xl px-8 py-2">
        Hiki no iau ke heluhelu
      </div>
      <div className="absolute top-[0px] right-[36px] max-w-54 bg-white p-4 pt-12">
        <QRCode
          // size={100}
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "160px",
            margin: "auto",
          }}
          value={"https://kakaupii.com"}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}
