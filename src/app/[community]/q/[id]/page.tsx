"use client";
import askButton from "@/src/components/buttons/askButton";
import "@/src/components/Style/style.css";
import Answer from "../../../../components/answerSection/answers";
import "@/src/components/Style/style.css";
import {
  getQuestionById,
  updateQuestion,
} from "@/src/lib/actions/questionActions";
import { formatDistanceToNow, format } from "date-fns";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnswerCreateDto, QuestionReadDto } from "@/src/lib/types";
import AddAnswerTextEditor from "@/src/components/textEditor";
import { createAnswer } from "@/src/lib/actions/answerAction";
import { FiEdit3 } from "react-icons/fi";

export default function Question() {
  const router = usePathname();
  const patheSegments = router.split("/");
  const questionId = Number(patheSegments[patheSegments.length - 1]);

  const [question, setQuestion] = useState<QuestionReadDto | null>(null);
  const [answer, setAnswer] = useState<AnswerCreateDto>({
    content: "",
    questionId: questionId,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");

  const handleEdit = () => {
    setIsEditing(true);
    setEditedTitle(question?.title || "");
  };

  const handleBlur = async () => {
    if (question && editedTitle !== question.title) {
      await updateQuestion(questionId, { ...question, title: editedTitle });
    }
    setIsEditing(false);
  };

  const handleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await handleBlur();
    }
  };

  const handleSubmit = async () => {
    const response = await createAnswer(answer);
    if (response) {
      setAnswer({
        content: answer.content,
        questionId: questionId,
      });
      if (question) {
        setQuestion({
          ...question,
          answers: [...(question.answers || []), response],
        });
      }
    }
  };

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
  const answerCount = question.answers ? question.answers.length : 0;
  const timePostShow = question.postedAt
    ? format(new Date(question.postedAt), "yyyy/mm/dd hh:mm:ss")
    : "";
  const timeModifyShow = question.lastModifiedDate
    ? format(new Date(question.lastModifiedDate), "yyyy/mm/dd hh:mm:ss")
    : "";

  return (
    <main>
      <div>
        <div className="mainWidth mx-auto">
          <div>
            {/* Question header */}
            <div className="flex justify-between pb-4 border-b border-white">
              <div>
                <div className="flex">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      className="input input-bordered input-info input-sm w-full max-w-xs mt-10"
                    />
                  ) : (
                    <h1 className=" flex titleTextSize text-left mt-10">
                      {question.title}{" "}
                      <a className="text-xs" onClick={handleEdit}>
                        <div className="mt-4 ml-2">
                          <FiEdit3 />
                        </div>
                      </a>
                    </h1>
                  )}
                </div>
                <div className="flex">
                  <p className="text-sm mt-2 mr-6">
                    <span className="subTextColor" title={timePostShow}>
                      Asked
                    </span>{" "}
                    <span title={timePostShow}>{timeAgo}</span>
                  </p>
                  <p className="text-sm mt-2 mr-6">
                    <span className="subTextColor" title={timeModifyShow}>
                      Modified
                    </span>{" "}
                    <span title={timeModifyShow}>{timeAgo}</span>
                  </p>
                  <p className="text-sm mt-2">
                    <span className="subTextColor">Viewed</span>{" "}
                    {question.viewCount} times
                  </p>
                </div>
              </div>
              <div className="mt-9">{askButton({ width: 52 })}</div>
            </div>
            {/* main content */}
            {question.answers?.[0] && (
              <Answer answer={question.answers?.[0]} tag={question.tags} />
            )}

            {/* tags */}
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
              <h1 className="text-xl mt-10">
                {" "}
                {answerCount <= 1 ? 0 : answerCount - 1} Answers
              </h1>
            </div>
            {/* answers */}
            <div className="mt-16">
              {question.answers?.slice(1).map((answer) => (
                <>
                  <Answer key={answer.id} answer={answer} />
                  <div className="cDivider mt-8"></div>
                </>
              ))}
              <div className="divider my-8"></div>
            </div>
            {/* Add you answer */}
            <div>
              <div>
                <h1 className="ml-6 text-xl">Your Answer</h1>
              </div>
              <div className="max-w-2xl mt-6 ml-6">
                <AddAnswerTextEditor />
                <textarea
                  className="textarea textarea-bordered w-full h-full"
                  rows={8}
                  placeholder="Write an answer..."
                  name="content"
                  value={answer.content}
                  onChange={(event) =>
                    setAnswer({ ...answer, content: event.target.value })
                  }
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-outline"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
