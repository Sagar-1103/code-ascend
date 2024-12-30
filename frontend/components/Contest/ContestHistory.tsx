import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { myContests, pastContests } from "@/data/contest";
import ContestImage from "@/public/contest-1.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function ContestHistory() {
  return (
    <div className="text-gray-100 bg-gray-800/80 p-4 md:p-6 rounded-lg shadow-md w-full max-w-lg lg:max-w-2xl mx-auto my-5">
      <Tabs defaultValue="Past Contests">
        <TabsList className="bg-gray-800/80 rounded-lg p-1 flex justify-center">
          <TabsTrigger
            value="Past Contests"
            className="text-sm  px-4 py-2 rounded-lg"
          >
            Past Contests
          </TabsTrigger>
          <TabsTrigger
            value="My Contests"
            className="text-sm  px-4 py-2 rounded-lg"
          >
            My Contests
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Past Contests">
          {pastContests.map((contest, index) => (
            <div
              className="flex flex-wrap md:flex-nowrap space-x-3 md:space-x-5 my-3 md:my-5 bg-gray-700/60 p-4 rounded-lg hover:bg-gray-600 transition"
              key={index}
            >
              <Image
                className="rounded-lg w-[30%] sm:w-[20%] mx-auto md:mx-0"
                src={ContestImage}
                alt="Contest-Image"
              />
              <div className="my-auto text-center md:text-left">
                <p className="text-lg font-semibold text-gray-200">
                  {contest.title}
                </p>
                <p className="text-sm text-gray-400">{contest.details}</p>
              </div>
              <div className="my-auto">
                <Badge
                  variant="contestBadge"
                  className="bg-purple-600 text-white px-2 py-1 rounded mx-auto sm:ml-44 sm:mt-5 md:ml-32"
                >
                  Virtual
                </Badge>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="My Contests">
          {myContests.map((contest, index) => (
            <div
              className="flex flex-wrap md:flex-nowrap space-x-3 md:space-x-5 my-3 md:my-5 bg-gray-700/60 p-4 rounded-lg hover:bg-gray-600 transition"
              key={index}
            >
              <Image
                className="rounded-lg w-[30%] sm:w-[20%] mx-auto md:mx-0"
                src={ContestImage}
                alt="Contest-Image"
              />
              <div className="my-auto text-center md:text-left">
                <p className="text-lg font-semibold text-gray-200">
                  {contest.title}
                </p>
                <p className="text-sm text-gray-400">{contest.details}</p>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
