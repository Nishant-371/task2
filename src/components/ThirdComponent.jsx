import React from "react";
import MultiFunction from "./MultiFunction";

const ThirdComponent = () => {
  return (
    <div className="border-2 rounded-sm border-gray-300	shadow-lg ">
      <div className="ml-5">
        <div className="flex ">
          <div className="font-medium">
            <input type="checkbox" />
            Step 3:
          </div>
          <div className="ml-5">Display Handling</div>
        </div>
        <div className="ml-[13vh]">Select the fields to be displayed</div>
        <div className="ml-[10vh]">
          <MultiFunction />
        </div>
      </div>
    </div>
  );
};

export default ThirdComponent;
