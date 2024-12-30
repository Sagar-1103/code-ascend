import Image from "next/image";
import Logo from "@/public/Code-Ascend-logo.png";

export default function StudyPlan() {
  const studyPlans = [
    {
      title: "Top Interview 150",
      description: "Must-do List for Interview Prep",
    },
    { title: "LeetCode 75", description: "Ace Coding Interview with 75 Qs" },
    { title: "SQL 50", description: "Crack SQL Interview in 50 Qs" },
    {
      title: "Introduction to Pandas",
      description: "Learn Basic Pandas in 15 Qs",
    },
    {
      title: "30 Days of JavaScript",
      description: "Learn JS Basics with 30 Qs",
    },
    {
      title: "Amazon Spring '23 High Frequency",
      description: "Practice Amazon 25 Recently Asked Qs",
    },
  ];

  return (
    <div className="p-6 bg-[#32322f] rounded-lg shadow-lg">
      <p className="text-2xl font-bold text-white mb-6">Study Plan</p>

      <div className="grid grid-cols-3 gap-4">
        {studyPlans.map((plan, index) => (
          <div
            key={index}
            className="flex p-4 bg-[#4f4f4c] rounded-lg w-full h-28 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Image src={Logo} height={62} width={80} alt="Logo" className="rounded" />
            <div className="ml-4 text-sm">
              <p className="font-bold text-white ">{plan.title}</p>
              <p className="font-light text-gray-400 overflow-hidden">
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
