import { useState } from "react";
import Heading from "../Heading/Heading.Jsx";
import LogoIcon from "../../icons/LogoIcon";
import WhatWeDoImg from "../../assets/images/WhatWeDo.png"

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState("enterprise");

  const tabs = {
    enterprise: {
      title: "Lorem ipsum dolor sit amet",
      description:
        "We offer talent transformation programs (ILTP & LMS) for professionals across hierarchy levels, empowering organizations to future-proof their workforce and business.",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    assessments: {
      title: "Assessments and Evaluations",
      description:
        "Our comprehensive assessment tools help organizations evaluate skills and competencies to make informed hiring and development decisions.",
      points: [
        "Pre-employment skill assessments",
        "Technical competency evaluations",
        "Behavioral and cognitive assessments",
        "Custom assessment development",
      ],
    },
  };

  const activeContent = tabs[activeTab];

  return (
    <div className="relative bg-white py-16">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto rounded-lg md:p-8 p-1">
          <div className="mb-8">
            <Heading
              title="What We Do"
              subtitle="Idealabs iMocha is Next Generation HR Tech organization, addressing Talent Acquisition and Talent
              Development requirements for Corporates with our Award-Winning Skill Intelligence cloud Platform, LMS- LXP
              Platform and Instructor Led Training programs (ILTP)"
              subtitleClassName="text-lg text-[#220D04CC] !font-medium mb-0 text-center md: w-5xl  w-full mx-auto"
              withCircle={true}
            />
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex">
              <div className="relative">
                <button
                  className={`px-6 py-3 md:w-3xs font-medium ${
                    activeTab === "enterprise"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } relative z-10`}
                  onClick={() => setActiveTab("enterprise")}
                >
                  Enterprise Learning
                </button>
                {activeTab === "enterprise" && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-orange-500 border-r-[8px] border-r-transparent"></div>
                )}
              </div>

              <button
                className={`px-6 py-3 md:w-3xs font-medium ${
                  activeTab === "assessments"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveTab("assessments")}
              >
                Assessments
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-[350px] w-full relative">
              <img
                src={WhatWeDoImg}
                alt="Team working together"
                className="w-[302px] rounded-lg"
              />

              <div className="absolute bottom-0 left-0 bg-[#0a0b2e] text-white p-4">
                <div className="text-orange-500 text-5xl font-bold">15</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            <div className="md:w-3/5">
              <h3 className="text-2xl !font-semibold mb-4">{activeContent.title}</h3>
              <p className="text-gray-700 mb-6">{activeContent.description}</p>

              <div className="space-y-4">
                {activeContent.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-orange-500 mt-1">
                      <LogoIcon />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
