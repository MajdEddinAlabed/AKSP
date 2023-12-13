"use client";
import CommentSection from "@/src/components/answerSection/commentSection";
import "@/src/components/Style/style.css";
import { useState } from "react";
import { AnswerReadDto, VoteType } from "@/src/lib/types";
import { QuestionTagReadDto } from "@/src/lib/types";
import { Icons } from "@/src/components/icons/icons";
import {
  upVote as upVoteAction,
  downVote as downVoteAction,
} from "@/src/lib/actions/answerAction";
import { useRouter } from "next/navigation";
import { is } from "date-fns/locale";

interface AnswerProps {
  answer: AnswerReadDto;
  tag?: QuestionTagReadDto[] | undefined;
}

export default function Answer({ answer, tag }: AnswerProps) {
  const redirect = useRouter();
  let isUserVoted: boolean = true;
  const userVoteType: VoteType = VoteType.upVote;
  const [upVote, setUpVote] = useState(answer.upVote ?? 0);
  const [downVote, setDownVote] = useState(answer.downVote ?? 0);

  const handleUpVote = async () => {
    await upVoteAction(answer.id);
    if (isUserVoted) {
      if (userVoteType === VoteType.upVote) {
        setUpVote(upVote - 1);
        setDownVote(downVote + 1);
      } else {
        setUpVote(upVote + 1);
        setDownVote(downVote - 1);
      }
    } else {
      isUserVoted = true;
      setUpVote(upVote + 1);
    }
  };

  const handleDownVote = async () => {
    await downVoteAction(answer.id);

    setDownVote(downVote + 1);
  };

  return (
    <div>
      <div className="mainWidth mx-auto">
        <div className="flex mt-16">
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
            <div
              className="flex justify-center my-3"
              onChange={redirect.refresh}
            >
              {upVote - downVote}
            </div>
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
              <p>{answer?.content}</p>
            </div>
          </div>
          <div className="border-b text-white mt-16"></div>
        </div>
        <CommentSection
          answerId={answer ? answer.id || 0 : 0}
          commentList={answer ? answer.comments : []}
        />
      </div>
    </div>
  );
}
