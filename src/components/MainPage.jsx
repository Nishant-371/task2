import React, { useState } from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import Next from "./Next";
// import { useState } from "react/cjs/react.production.min";

const MainPage = () => {
  const [File, setFile] = useState(null);
  const FileuploadHandler = (file) => {
    setFile(file);
  };
  return (
    <div>
      <div className="flex">
        <div className="p-10">Import Products</div>
        <div className="mt-20 flex ">
          <div className="mr-7">
            <FirstComponent onChange={FileuploadHandler} />
          </div>
          <div className="">
            <SecondComponent />
          </div>
        </div>
      </div>
      <div className="pt-[3vh] ml-[29vh] w-[175vh] ">
        <ThirdComponent />
      </div>
      <button className="ml-[185vh] mt-[7vh] bg-green-400 rounded-sm	 ">
        <div className="px-2 py-1 text-white">
          <Next />
        </div>
      </button>
      <button className="ml-[2vh] text-red-600">Cancel</button>
    </div>
  );
};

export default MainPage;
