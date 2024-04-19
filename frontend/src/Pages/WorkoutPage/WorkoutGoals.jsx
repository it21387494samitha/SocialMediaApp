import React from "react";

const WorkoutGoals = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[50%]">
          <h1 className="text-2xl m-4 font-semibold">Dialy Goals</h1>
          <hr />
          <div>
            <div>
              <div className="m-4 border border-gray-400 p-4 rounded-lg">
                <div className="">
                  <label htmlFor="">Running</label>
                  <input type="text" value="2000" />
                </div>

                <div className="">
                  <label htmlFor="">Water</label>
                  <input type="text" value="2L" />
                </div>
                <div className="">
                  <label htmlFor="">Sleep</label>
                  <input type="text" value="8h" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <h1 className="text-2xl m-4 font-semibold">Weekly Goals</h1>
          <hr />
          <div>
            <div>
              <div className="m-4 border border-gray-400 p-4 rounded-lg">
                <div className="">
                  <label htmlFor="">Running</label>
                  <input type="text" value="2000" />
                </div>

                <div className="">
                  <label htmlFor="">Water</label>
                  <input type="text" value="2L" />
                </div>
                <div className="">
                  <label htmlFor="">Sleep</label>
                  <input type="text" value="8h" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl m-4 font-semibold">Monthly Goals</h1>
        <hr />
        <div>
          <div>
            <div className="m-4 border border-gray-400 p-4 rounded-lg">
              <div className="">
                <label htmlFor="">Running</label>
                <input type="text" value="2000" />
              </div>

              <div className="">
                <label htmlFor="">Water</label>
                <input type="text" value="2L" />
              </div>
              <div className="">
                <label htmlFor="">Sleep</label>
                <input type="text" value="8h" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutGoals;
