"use client";
import { BackAPIClient as api } from "@/src/bClient/client";
import { QuestionReadDto } from "@/src/lib/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { mockQuestions } from "@/src/lib/mockQuestions";

export default function Question() {
  const router = useRouter();
  const { id } = router.query;
  const [question, setQuestion] = useState<QuestionReadDto | null>(null);

  // useEffect(() => {
  //   if (router.isReady) {
  //  //   console.log("id", id);
  //     // api().getQuestionById(Number(id))
  //     //   .then(data => setQuestion(data));
  //     const mockQuestion =
  //       mockQuestions.find((q) => q.id === Number(id)) || null;
  //    // console.log("mockQuestions", mockQuestion);
  //     setQuestion(mockQuestion);
  //   }
  // }, [router.isReady, id]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {/* Question header */}
      <div>
        {/* Question title */}
        <div>
          <div>
            <h1>{question.title}</h1>
          </div>
          <div>ask question button</div>
        </div>
        {/* Question prop */}
        <div>
          <p>
            Asked: {question.postedAt} Modified: {question.lastModifiedDate}{" "}
            Viewed: 2 times
          </p>
        </div>
        {/* divider */}
      </div>
      {/* Question body */}
      <div>
        {/* Question content */}
        <div>
          <div>
            <p>{question.content}</p>
          </div>
        </div>
        {/* Question side prop */}
        <div>
          <div>upvote</div>
          <div>{question.upVote}</div>
          <div>down vote</div>
          <div>save</div>
        </div>
      </div>
    </main>
  );
}
