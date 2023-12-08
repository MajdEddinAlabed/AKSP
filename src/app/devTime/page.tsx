// question page preview
"use client";
import askButton from "@/src/components/buttons/askButton";
import "/src/app/devTime/style.css";
import { useState } from "react";

export default function Question() {
  const [voteCount, setVoteCount] = useState(0);
  return (
    <main>
      <div>
        <div className="mainWidth mx-auto">
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
          <div className="flex mt-5">
            <div>
              {/* up button */}
              <div>
                <button
                  onClick={() => setVoteCount(voteCount + 1)}
                  className="flex items-center justify-center border-2 border-white bg-white rounded-full cursor-pointer hover:bg-black"
                  aria-pressed="false"
                  aria-label="Up vote"
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 hover:fill-white"
                    viewBox="-2.5 -2.5 23 23"
                  >
                    <path d="M1 12h16L9 4l-8 8Z"></path>
                  </svg>
                </button>
              </div>
              {/* vote counter */}
              <div className="flex justify-center my-3">{voteCount}</div>
              {/* down button */}
              <div>
                <button
                  onClick={() => setVoteCount(voteCount - 1)}
                  className="flex items-center justify-center border-2 border-white bg-white rounded-full cursor-pointer hover:bg-black"
                  aria-pressed="false"
                  aria-label="Up vote"
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 hover:fill-white"
                    viewBox="-2.5 -2.5 23 23"
                  >
                    <path d="M1 6h16l-8 8-8-8Z"></path>
                  </svg>
                </button>
              </div>
              {/* save button */}
              <div>
                <button
                  className="flex items-center justify-center py-1 cursor-pointer hover:bg-blue-200"
                  type="button"
                  id="saves-btn-77619895"
                  aria-pressed="false"
                >
                  <svg
                    aria-hidden="true"
                    className="text-blue-400 hidden w-4 h-4"
                    viewBox="0 0 18 18"
                  >
                    <path d="M3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    viewBox="0 0 18 18"
                  >
                    <path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* question content */}
            <div className="ml-5">
              <div>
                <p>
                  I hope that finally someone can answer my question ... which
                  is more of a general good to know question rather than a
                  vitally important one :-) I cannot for the life of me find a
                  definite answer to my question whether or not the name
                  property of a Redux Toolkit slice has to correspond to the
                  property name of the reducer in the configured store. None of
                  the tutorials I read and viewed and even the docs show the
                  connection between these ...
                </p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
