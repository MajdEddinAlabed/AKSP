"use client";
import askButton from "@/src/components/buttons/askButton";
import "@/src/components/Style/style.css";
import Answer from '../../../../components/answerSection/answers';
import "@/src/components/Style/style.css";
import { getQuestionById } from "@/src/lib/actions/questionActions";
import { formatDistanceToNow } from "date-fns";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { QuestionReadDto } from '@/src/lib/types';



export default function Question() {

  const router = usePathname();
  const patheSegments = router.split("/");
  const questionId = Number(patheSegments[patheSegments.length - 1]);
  
  

  const [question, setQuestion] = useState<QuestionReadDto | null> (null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getQuestionById(questionId);
      setQuestion(result);
    };

    fetchData();
  }, [questionId]);


  if (!question) {
    return <div>Loading...</div>;
  }
  const date = question.lastModifiedDate || question.postedAt;
  const dateObject = date ? new Date(date) : new Date();
  const timeAgo = formatDistanceToNow(dateObject, { addSuffix: true });
  //const answer = question.answers ? question.answers[0] : undefined;

  return (
    <main>
      <div>
        <div className="mainWidth mx-auto">
          <div>
            {/* Question header */}
            <div className="flex justify-between pb-4 border-b border-white">
              <div>
                <h1 className="titleTextSize text-left mt-10">
                  {question.title}
                </h1>
                <div className="flex">
                  <p className="text-sm mt-2 mr-6">
                    <span className="subTextColor">Asked</span> {question.postedAt} {timeAgo}
                  </p>
                  <p className="text-sm mt-2 mr-6">
                    <span className="subTextColor">Modified</span> {question.lastModifiedDate} {timeAgo}
                  </p>
                  <p className="text-sm mt-2">
                    <span className="subTextColor">Viewed</span> {question.viewCount} times
                  </p>
                </div>
              </div>
              <div className="mt-9">{askButton({ width: 52 })}</div>
            </div>
            {/* main content */}
           
            <Answer answer={question.answers?.[0]} tag={question.tags} />
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
          {/* answers section */}
          <div>
            {/* number of answer */}
            <div>
              <h1 className="text-xl mt-10">  Answers</h1>
            </div>
            {/* answers */}
            <div>
              {/* answer 1 */}
              {question.answers?.slice(1).map((answer) => (
            <Answer
              key={answer.id}
              answer={answer}
            />
          ))}
              <div className="divider my-8"></div>
            </div>

            {/* Add you answer */}
            <div>
              <div>
                <h1 className="ml-6 text-xl">Your Answer</h1>
              </div>
              <div>{/*add here the editing thing*/}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
