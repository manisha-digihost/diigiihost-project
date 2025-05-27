import { Mail, MapPin, Phone } from "lucide-react";

import Bubble_1 from "../../assets/images/Bubble1.svg"
import Bubble_2 from "../../assets/images/Bubble_2.svg"
import Bubble_3 from "../../assets/images/Bubble_3.svg"

const ContactInfo = () => {
  return (
    <div className="relative w-[400px] h-[300px]">
      {/* <div className="absolute top-1/2 left-1/2 w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white z-0"></div> */}
      <div className="absolute top-0 right-0 z-20">
        <div className="relative">
          <img
            src={Bubble_2}
            alt=""
            className="w-[280px]"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center pl-12">
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500 flex-shrink-0" size={20} />
              <span className="text-white text-sm">
                mukesh.kokare@idealabs.me
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[100px] left-0 z-10">
        <div className="relative">
          <div className="absolute -inset-[2px] rounded-full border-2 border-white"></div>
          <img
            src={Bubble_1}
            alt=""
            className="w-[280px] relative z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center pl-12 z-20">
            <div className="flex items-start gap-3">
              <MapPin
                className="text-orange-500 mt-1 flex-shrink-0"
                size={20}
              />

              <div className="text-white text-sm">
                <div>Office number 21-19,</div>
                <div>Conrad Business</div>
                <div>Center, Sheikh Zayed</div>
                <div>Road, Dubai, UAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-30">
        <div className="relative">
          <img
            src={Bubble_3}
            alt=""
            className="w-[280px]"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end pr-12">
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500 flex-shrink-0" size={20} />
              <span className="text-white text-sm">+971 52 141 2629</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
