import React, { useEffect } from "react";
import { useState } from "react";
import data from "./Data.jsx";
// import { useEffect } from "react";

export default function Paragraph() {
  let [count, setCount] = useState(0);
  const [para, setPara] = useState([]);

  function handleSubmit() {
    let ginti = parseInt(count);

    if (ginti < 1 || ginti > 9) {
      alert("kindly enter a number above 1 and less then 8");
      ginti = 1;
    }

    let paras = data.slice(0, ginti);
    setPara(paras);

    console.log(paras);
    // renderPara();
  }

  return (
    <>
      <div id="wrapper" className="wrapper p-16 w-full h-screen">
        <div
          id="box"
          className="box w-full h-full flex flex-col gap-8 justify-start items-center  p-5"
        >
          <h1 className="text-2xl">TIRED OF BORING LOREM IPSUM ??</h1>

          <div>
            <div className="flex justify-evenly items-center ">
              <p className="text-lg text-orange-500 tracking-wide">
                Paragraphs:
              </p>
              <input
                type="text"
                value={count}
                onChange={(e) => {
                  setCount(e.target.value);
                }}
                className="px-3 w-[20%] rounded-lg ml-1 mr-2 border border-orange-400"
              />

              <button
                id="button"
                className="mx-3 px-2 py-1 text-white bg-orange-500 hover:bg-orange-400 rounded-lg"
                onClick={handleSubmit}
              >
                Generate Paras
              </button>
            </div>

            <div>
              {para.map((item, index) => {
                return (
                  <p key={index} className="my-6 italic">
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
