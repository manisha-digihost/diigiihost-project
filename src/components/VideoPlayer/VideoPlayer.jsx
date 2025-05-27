import { PlayCircle } from "lucide-react";
import thumbNail from "../../assets/images/thumb.png";
import Button from "../Button/Button";
import Heading from "../Heading/Heading.Jsx";

const ChroPanelSection = () => {
  return (
    <section className=" py-10 px-4 flex flex-col items-center">
      <div className="flex items-center space-x-2 text-[#220D04]">
        <Heading
          title="Lorem ipsum dolor"
          className=" text-lg text-center md:w-2/3 w-full mx-auto"
          withCircle={true}
          subtitleClassName="[text-[#220D04CC]]"
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        />
      </div>    

      <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-md shadow-lg mb-8">
        <img
          src={thumbNail}
          alt="CHRO Panel on iMocha-EY Report"
          className="w-full h-full object-cover opacity-70"
        />

        <button className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-black bg-opacity-80 flex items-center justify-center">
            <PlayCircle className="text-orange-500 w-10 h-10" />
          </div>
        </button>

      </div>

      <Button >
        Download Full Report
      </Button>
    </section>
  );
};

export default ChroPanelSection;
