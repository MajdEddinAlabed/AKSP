"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import "/src/lib/general.css";
import {
  AnswerCreateDto,
  QuestionCreateDto,
  QuestionTagCreateDto,
} from "@/src/lib/types";
import TagSelector from "@/src/components/tagSelector/tagSelector";
import RichTextEditor from "@/src/components/inputField/richTextEditor";
import { Tag } from "react-tag-autocomplete";
import { createQuestion } from "@/src/lib/actions/questionActions";
import { BackAPIClient as api } from "@/src/lib/bClient/client";
import { createAnswer } from "@/src/lib/actions/answerAction";

export default async function Ask() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [content, setContent] = useState("");
  const [setTags, setTag] = useState<Tag[]>([]);

  function handleEditorStateChange(updatedEditorState: string) {
    setContent(updatedEditorState);
  }
  const tags: Tag[] = [];
  let ServerTags = (await api()).getAllTags();
  (await ServerTags).forEach((tag) => {
    tags.push({ value: Number(tag.id), label: String(tag.tagName) });
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const q: QuestionCreateDto = { title: enteredTitle };
    const response = await createQuestion(q);

    if (response) {
      let selectedTags: QuestionTagCreateDto[] = [];
      setTags.forEach((tag) => {
        selectedTags.push({
          TagId: Number(tag.value),
          QuestionId: Number(response.id),
        });
      });

      //await createQuestionTag(selectedTags);

      let answer: AnswerCreateDto = {
        questionId: Number(response.id),
        content: content,
      };
      if (await createAnswer(answer)) {
        const router = useRouter();
        router.push(`/community/q/${response.id}`);
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-1/3"
      >
        <label className="m-4 text-white w-full ">
          <div className="relative flex items-center justify-center h-12 rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">
            <input
              className="  peer h-full w-full outline-none text-sm text-white pr-2 bg-transparent"
              type="text"
              placeholder="ادخل العنوان"
              onChange={(e) => setEnteredTitle(e.target.value)}
            />
          </div>
        </label>
        <label className="text-white">
          <div className="w-full relative flex items-center rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">
            <RichTextEditor onEditorStateChange={handleEditorStateChange} />
          </div>
        </label>
        <div className="w-full flex justify-between items-center">
          <div>
            <TagSelector
              suggestions={tags}
              selected={setTags}
              setSelected={setTag}
            />
          </div>
          <div className=" w-52 max-w-xs">
            <button type="submit" className="button ">
              النشر
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
