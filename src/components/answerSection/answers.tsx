"use client";
import CommentSection from "@/src/components/answerSection/commentSection";
import "@/src/components/Style/style.css";
import { useState } from "react";
import { QuestionReadDto } from "@/src/lib/types";
import { AnswerReadDto } from "@/src/lib/types";
import { QuestionTagReadDto } from "@/src/lib/types";
import { Icons } from "@/src/components/icons/icons";
import {
  upVote as upVoteAction,
  downVote as downVoteAction,
} from "@/src/lib/actions/answerAction";

interface AnswerProps {
  answer: AnswerReadDto | undefined;
  tag?: QuestionTagReadDto[] | undefined;
}

export default function Answer({ answer, tag }: AnswerProps) {
  const [upVote, setUpVote] = useState(answer ? answer.upVote || 0 : 0);
  const [downVote, setDownVote] = useState(answer ? answer.downVote || 0 : 0);

  const handleUpVote = async () => {
    if (answer && typeof answer.id === "number") {
      const response = await upVoteAction(answer.id);

      if (response) {
        setUpVote(upVote + 1);
      }
    }
  };

  const handleDownVote = async () => {
    if (answer && typeof answer.id === "number") {
      const response = await downVoteAction(answer.id);

      if (response) {
        setDownVote(downVote + 1);
      }
    }
  };
  return (
    <div>
      <div className="mainWidth mx-auto">
        <div className="flex mt-5">
          <div>
            {/* up button */}
            <div>
              <button
                onClick={handleUpVote}
                className="flex items-center justify-center border-2 border-white bg-white rounded-full cursor-pointer hover:bg-black"
                aria-pressed="false"
                aria-label="Up vote"
              >
                {Icons.arrowUpIcon}
              </button>
            </div>
            {/* vote counter */}
            <div className="flex justify-center my-3">{upVote - downVote}</div>
            {/* down button */}
            <div>
              <button
                onClick={handleDownVote}
                className="flex items-center justify-center border-2 border-white bg-white rounded-full cursor-pointer hover:bg-black"
                aria-pressed="false"
                aria-label="Up vote"
              >
                {Icons.arrowDownIcon}
              </button>
            </div>
            {/* save button */}
            <div>
              <button
                className="flex items-center justify-center py-1 cursor-pointer hover:bg-blue-200"
                type="button"
                id="saves-btn-77619895"
                aria-pressed="false"
                aria-label="close dialog"
              >
                <svg
                  aria-hidden="true"
                  className="text-blue-400 hidden w-4 h-4"
                  viewBox="0 0 18 18"
                >
                  <path d="M3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path>
                </svg>
                <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 18 18">
                  <path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* content section */}
          <div className="ml-5">
            <div>
              <p>I hope that final</p>
            </div>
          </div>
          <div className="border-b text-white mt-16"></div>
          <CommentSection />
        </div>
      </div>
    </div>
  );
}
