"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import Session from "@/components/Session/Session";
import StudyPlan from "@/components/StudyPlans/StudyPlan";
import Topics from "@/components/Topics/Topics";
import Problems from "@/components/Problems/Problems";
import Difficulties from "@/data/difficulty"
import Statuses from "@/data/status"
import { DifficultyDropDown } from "@/components/ui/DifficultyDropDown";
import { StatusDropDown } from "@/components/ui/StatusDropdown";
import { Input } from "@/components/ui/input"


export default function ProblemSet() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-[#252525] min-h-screen">
      <div className=" w-[70%] mx-auto text-white py-10 flex justify-normal">
        {/* Left  */}
        <div className="w-[70%]">
          <StudyPlan />
          <div className="">
            <Topics />
            <div className="flex">
            <DifficultyDropDown title="Difficulty" frameworks={Difficulties}/>
            <StatusDropDown title="Status" frameworks={Statuses}/>
            <Input className="my-3 mx-2" title="Search Questions"/>
            </div>
            <Problems/>
          </div>
        </div>

        {/* Right */}
        <div className="w-[30%] ">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-fit mx-auto"
          />
          <Session />
        </div>
      </div>
    </div>
  );
}
