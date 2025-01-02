"use client"
import { useState } from "react";
import { Trophy } from "lucide-react";
import rankings from "@/data/ranking";

export default function GlobalRanking() {
  const [showAll, setShowAll] = useState(false);

  // Determine the rankings to display
  const displayedRankings = showAll ? rankings : rankings.slice(0, 10);

  return (
    <div className="text-gray-100 bg-gray-800/80 p-4 md:p-6 rounded-lg shadow-md w-[35%] max-w-lg h-fit lg:max-w-2xl mx-auto my-5">
      {/* Header */}
      <div className="flex items-center mb-4">
        <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
        <p className="text-xl font-semibold">Global Ranking</p>
      </div>

      {/* Rankings List */}
      <div>
        {displayedRankings.map((rank) => (
          <div
            key={rank.rank}
            className={`flex items-center p-3 rounded-lg shadow-md transform transition-all bg-gray-600/70 my-3 ${
              rank.rank === 1
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 font-bold text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {/* Rank */}
            <p className={`text-lg font-bold w-10 text-center`}>
              {rank.rank}
            </p>

            {/* Profile Section */}
            <div className="flex items-center flex-grow ml-4">
              {/* Profile Image */}
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center font-bold">
                {/* Placeholder for profile image */}
                {rank.name.charAt(0).toUpperCase()}
              </div>

              {/* User Info */}
              <div className="ml-4">
                <p className="text-lg">{rank.name}</p>
                <div className="flex space-x-2 mt-2">
                  <p className="text-sm">Rating: {rank.rating}</p>
                  <p className="text-sm">Attended: {rank.attended}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center " >
        
      {rankings.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="my-2 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-all"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      )}
      </div>
    </div>
  );
}
