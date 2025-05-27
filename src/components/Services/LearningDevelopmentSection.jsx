import ServiceCard from "./ServiceCard";
import Button from "../Button/Button";
import LearingDevelopmentImg from "../../assets/images/Learing&DevelopmentImg.png";
import Services_5 from "../../assets/images/Services_5.png";
import Services_6 from "../../assets/images/Services_6.png";
import Services_7 from "../../assets/images/Services_7.png";
import Services_8 from "../../assets/images/Services_8.png";

const LearningDevelopmentSection = () => {
  return (
    <div
      className="text-white py-16 relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 relative">
            <img
              src={LearingDevelopmentImg}
              alt="People in a meeting"
              className="rounded-lg w-full"
            />
          </div>

          <div className="lg:w-1/2 relative">
            <div className="lg:pl-12">
              <h2 className="text-3xl font-bold mb-4">Talent Transformation</h2>
              <p className="mb-10 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-8 space-y-6">
                <ServiceCard
                  imageSrc={Services_5}
                  title="Diversity Hiring"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_6}
                  title="Lateral Hiring"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_7}
                  title="University Hiring"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_8}
                  title="Remote Hiring"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />
              </div>

              <div className="mt-10 flex justify-center lg:justify-start">
                <Button onClick={() => console.log("Discover more clicked")}>
                  Discover More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDevelopmentSection;
