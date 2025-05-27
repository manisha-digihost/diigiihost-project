import ServiceCard from "./ServiceCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading.Jsx";
import TalentTransformationImg from "../../assets/images/TalentTransformationImg.png";
import Services_1 from "../../assets/images/Services_1.png";
import Services_2 from "../../assets/images/Services_2.png";
import Services_3 from "../../assets/images/Services_3.png";
import Services_4 from "../../assets/images/Services_4.png";

const TalentTransformationSection = () => {
  return (
    <>
      <div
        className="text-white py-16 relative section-top-angled"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <Heading
              title="Services"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              withCircle={true}
              className="text-center"
              subtitleClassName="text-gray-300 text-lg text-center md:w-2/3 w-full mx-auto"
            />
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Talent Transformation</h2>
              <p className="mb-10 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="space-y-6">
                <ServiceCard
                  imageSrc={Services_1}
                  title="Compliance Tracking"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_2}
                  title="Certification Program"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_3}
                  title="Internal Mobility"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />

                <ServiceCard
                  imageSrc={Services_4}
                  title="Upskilling/Re-skilling ROI"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur"
                />
              </div>

              <div className="mt-10">
                <Button onClick={() => console.log("Discover more clicked")}>
                  Discover More
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <img
                src={TalentTransformationImg}
                alt="People working at computers"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentTransformationSection;
