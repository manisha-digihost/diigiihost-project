import Heading from "../Heading/Heading";
import CounterAnimation from "./CounterAnimation";
import StatItem from "./StatItem";

const StatsSection = () => {
  const stats = [
    { number: "20", description: "Customers across MEA Regions" },
    { number: "500", description: "Days Training Delivered" },
    { number: "30000", description: "Assessment Executed" },
    { number: "40", description: "Programs Added" },
    { number: "3500", description: "Professional Onboarded On LMS" },
    { number: "300", description: "Facilitator's & SME's" },
  ];

  return (
    <div className="relative bg-[#0a0b2e] py-16 text-white section-bottom-angled">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="relative mb-2">
              <Heading
                title="Lorem Ipsum"
                withCircle={true}
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                subtitleClassName="text-lg text-center md:w-2/3 w-full text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <StatItem description={stats[0].description}>
              <CounterAnimation end={stats[0].number} suffix="+" />
            </StatItem>
            <StatItem description={stats[1].description}>
              <CounterAnimation end={stats[1].number} suffix="+" />
            </StatItem>
            <StatItem description={stats[2].description}>
              <CounterAnimation end={stats[2].number} suffix="+" />
            </StatItem>
            <StatItem description={stats[3].description}>
              <CounterAnimation end={stats[3].number} suffix="+" />
            </StatItem>
            <StatItem description={stats[4].description}>
              <CounterAnimation end={stats[4].number} suffix="+" />
            </StatItem>
            <StatItem description={stats[5].description}>
              <CounterAnimation end={stats[5].number} suffix="+" />
            </StatItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
