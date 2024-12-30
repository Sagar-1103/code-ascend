import ActiveContestCard from "@/components/Contest/ActiveContestCard";
import ContestHistory from "@/components/Contest/ContestHistory";

export default function Contest() {
  const contests = [
    { title: "Weekly Contest 1", details: "Sunday 8:00 AM GMT+5:30" },
    { title: "Weekly Contest 2", details: "Sunday 8:00 AM GMT+5:30" },
  ];
  return (
    <div className="bg-[#252525] min-h-screen">
      <div className=" flex  justify-center">
        <div className=" w-[70%] mx-auto text-white py-10 ">
          <div className="flex lg:flex-row lg:justify-center lg:space-x-40 md:flex-col lg:space-y-0 md:space-y-10 ">
          {contests.map((contest, index) => (
            <ActiveContestCard
              key={index}
              title={contest.title}
              details={contest.details}
            />
          ))}
        </div>
        </div>
      </div>
      <div className="flex w-[70%] mx-auto justify-center">
      <ContestHistory />
      </div>
    </div>
  );
}
