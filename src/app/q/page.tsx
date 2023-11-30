import { Client } from "@/src/bClient/clients";
import Image from "next/image";
import { mockQuestions } from "@/src/lib/mockQuestions";
import { JSX } from "react";
import "/src/lib/general.css";
import { QuestionReadDto } from "@/src/lib/types";

function QuestionPreview(question: QuestionReadDto) {
  return (
    <>
      <div className="zoom">
        <div className="m-4 font-IBMPlexSansArabic text-right ">
          <h1 className="font-bold text-2xl">{question.title}</h1>
          <p className="font-light text-lg text-stone-300	opacity-75">
            {question.content}
          </p>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default async function Questions() {
  const api = new Client("http://api.myapp.com:8081");
  const questions2 = await api.getAllQuestion();
  const questions = mockQuestions;
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif py-8">Questions</h1>
        <div>
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
