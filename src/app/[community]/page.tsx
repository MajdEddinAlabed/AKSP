import { BackAPIClient as api } from "@/src/lib/bClient/client";
import { JSX } from "react";
import "/src/lib/general.css";
import { QuestionReadDto } from "@/src/lib/types";
import { AnswerRefDto } from "@/src/lib/types";
import askButton from "@/src/components/buttons/askButton";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export default async function QuestionsList() {
  const questions = await (await api()).getAllQuestion();
  //const questions = mockQuestions;
  return (
    <main>
      <div className="flex flex-row items-center justify-center h-1/2">
        <div className="flex items-center justify-center w-1/2 max-w-xs">
          <h1 className="text-3xl font-serif">Top Questions</h1>
        </div>
        <div className="mx-60 my-20"></div>
        {askButton({ width: 52 })}
      </div>
      <div className="my-5"></div>
      <div className="flex flex-col items-center justify-center h-1/2">
        <div className="w-full">
          {questions.map(
            (questions: JSX.IntrinsicAttributes & QuestionReadDto) => (
              <QuestionPreview key={questions.id} {...questions} />
            )
          )}
        </div>
      </div>
    </main>
  );
}

function QuestionPreview(
  question: QuestionReadDto,
  answer: AnswerRefDto | undefined
) {
  const voteCount = answer ? (answer.upVote || 0) + (answer.downVote || 0) : 0;
  const answerCount = question.answers ? question.answers.length : 0;

  let action = "asked";
  if (
    question.lastModifiedDate &&
    question.postedAt &&
    new Date(question.lastModifiedDate) > new Date(question.postedAt)
  ) {
    action = "modified";
  }
  const date = question.lastModifiedDate || question.postedAt;
  const dateObject = date ? new Date(date) : new Date();
  const timeAgo = formatDistanceToNow(dateObject, { addSuffix: true });

  return (
    <>
      <div className="flex justify-center my-4">
        <div className="text-right text-sm">
          <div>{voteCount} votes</div>
          <div
            className={answerCount === 0 ? "text-gray-400" : "text-green-500"}
          >
            {answerCount <= 1 ? 0 : answerCount - 1} answers
          </div>
          <div className="text-gray-400">{question.viewCount} views</div>
        </div>
        <div className="CWidthQ ">
          <div className="zoom ">
            <Link href={`/q/${question.id}`}>
              <div className="m-4 font-IBMPlexSansArabic flex justify-start">
                <h1 className="font-bold text-xl">{question.title} </h1>
              </div>
            </Link>
            <h1 className="flex justify-end text-xs text-gray-400">
              {question.userId} {action} {timeAgo}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="cDivider rounded-full"></div>
      </div>
    </>
  );
}
