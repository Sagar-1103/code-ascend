import Image from "next/image";
import ContestImage from "@/public/contest-1.png";
import { Calendar, Clock } from "lucide-react";

interface ActiveContestCardProps {
    title: string;
    details: string;
}

export default function ActiveContestCard({ title, details }: ActiveContestCardProps) {
  return (
    <div className="w-[30%] relative h-fit bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl lg:mx-0 md:mx-auto">
      <Image src={ContestImage} alt="Contest-Image" className="rounded-3xl"/>
      
      <div className="absolute top-5 right-5 bg-black/50 p-3 hover:bg-gray-900/60 rounded-full">
        <Calendar className="text-white" />
      </div>
      
      <div className="absolute flex bottom-32 left-6 space-x-2 text-white">
        <Clock />
        <p>Starts in</p>
      </div>

      <div className="absolute bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white rounded-b-3xl w-full">
        <div className="bg-gray-800/50 rounded-3xl p-5">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">{details}</p>
        </div>
      </div>
    </div>
  );
}
