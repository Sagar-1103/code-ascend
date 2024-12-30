
export default function Session() {
    return (
      <div className="bg-[#32322f] w-3/4 py-3 px-5 rounded-lg mx-auto mt-8 shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-white text-xl font-semibold">Session Overview</h2>
        </div>
        <div className="flex justify-around items-center">
          <div className="w-1/2 flex justify-center items-center">
            <div className="text-gray-400 text-lg font-medium">Chart</div>
          </div>
          <div className="w-1/2">
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="text-green-400 font-semibold">Easy</p>
                <span className="text-white">10 / 100</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="text-yellow-400 font-semibold">Medium</p>
                <span className="text-white">10 / 100</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-red-400 font-semibold">Hard</p>
                <span className="text-white">10 / 100</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-red-400 h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  