import React from "react";

const SecondComponent = () => {
  return (
    <div className="border-2 rounded-sm border-gray-300	shadow-lg 	 p-5 w-[100vh] ">
      <div className="flex">
        <div className="flex font-medium">Step 2: </div>
        <div className="px-8">Specify Format</div>
      </div>
      <div className="pl-20 flex mt-[1vh]">
        <label>File Type:</label>
        <div className="border-2 w-[30vh] ml-[15vh]">
          <select>
            <option value="Csv">CSV</option>
            <option value="Json">JSON</option>
          </select>
        </div>
      </div>
      <div className="pl-20 flex mt-[1vh]">
        <label>Character Encoding:</label>
        <div className="border-2 w-[30vh] ml-[3.5vh]">
          <select>
            <option value="UTF-8">UTF-8</option>
            <option value="UTF-16">UTF-16</option>
            <option value="UTF-32">UTF-32</option>
          </select>
        </div>
      </div>
      <div className="pl-20 flex mt-[1vh]">
        <label>Delimiter:</label>
        <div className="border-2 w-[30vh] ml-[14.6vh]">
          <select>
            <option value="comma">comma</option>
            <option value="semicolon">semicolon</option>
            <option value="colon">colon</option>
          </select>
        </div>
      </div>
      <div className="ml-[12vh]">
        <input type="checkbox" /> has header
      </div>
    </div>
  );
};

export default SecondComponent;
