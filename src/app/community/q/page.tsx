"use client";
import askButton from "@/src/components/buttons/askButton";
import "@/src/components/Style/style.css";
import Answer from "../../answer/page";
export default function Question() {
  return (
    <main>
      <div>
        <div className="mainWidth mx-auto">
          {/* Question header */}
          <div className="flex justify-between pb-4 border-b border-white">
            <div>
              <h1 className="titleTextSize text-left mt-10">
                React Redux Toolkit: Naming convention between slice and store
              </h1>
              <div className="flex">
                <p className="text-sm mt-2 mr-6">
                  <span className="subTextColor">Asked</span> today
                </p>
                <p className="text-sm mt-2 mr-6">
                  <span className="subTextColor">Modified</span> today
                </p>
                <p className="text-sm mt-2">
                  <span className="subTextColor">Viewed</span> 3 times
                </p>
              </div>
            </div>
            <div className="mt-9">{askButton({ width: 52 })}</div>
          </div>
          {/* main content */}
          {Answer()}
          {/* number of answer */}
          <div>
            <h1 className="text-xl mt-10"> 5 Answers</h1>
          </div>
          <div>
            {/* tags */}
            {/* 
            <div className="mt-6 mb-3">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-wrap">
                  <ul className="list-none inline-flex ">
                    <li className="inline mr-1">
                      <a
                        href=""
                        className="tag bg-gray-600 rounded"
                        aria-label="show questions tagged 'reactjs'"
                      >
                        reactjs
                      </a>
                    </li>
                    <li className="inline mr-1">
                      <a
                        href=""
                        className="tag bg-gray-600 rounded"
                        aria-label="show questions tagged 'redux-toolkit'"
                      >
                        redux-toolkit
                      </a>
                    </li>
                    <li className="inline mr-1">
                      <a
                        href=""
                        className="tag bg-gray-600 rounded"
                        aria-label="show questions tagged 'reduce'"
                      >
                        reduce
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
