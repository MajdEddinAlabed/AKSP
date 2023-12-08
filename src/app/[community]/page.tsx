import { mockQuestions } from "@/src/lib/mockQuestions";
import { BackAPIClient as api } from "@/src/bClient/client";
import { JSX } from "react";
import "/src/lib/general.css";
import { QuestionReadDto } from "@/src/lib/types";
import askButton from "@/src/components/buttons/askButton";
import Link from "next/link";

function QuestionPreview(question: QuestionReadDto) {
  return (
    <div className="flex flex-col w-full">
      <div className="zoom">
        <Link href={`/${question.id}`}>
          <div className="m-4 font-IBMPlexSansArabic text-right ">
            <h1 className="font-bold text-2xl">{question.title}</h1>
            <p className="font-light text-lg text-stone-300	opacity-75">
              {question.content}
            </p>
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="divider rounded-full"></div>
      </div>
    </div>
  );
}

export default async function Questions() {
  const questions =await ( await api()).getAllQuestion();
  //const questions = mockQuestions;
  return (
    <main>
      <div className="flex flex-row items-center justify-center h-1/2">
        <div className="flex items-center justify-center w-1/2 max-w-xs">
          <h1 className="text-3xl font-serif">Top Questions</h1>
        </div>
        <div className="mx-60 my-20"></div>
        {askButton({width:52})}
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


