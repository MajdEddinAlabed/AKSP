"use client";
import { useEffect, useState } from "react";
import "/src/lib/general.css";
import {
  AnswerCreateDto,
  QuestionCreateDto,
  QuestionTagCreateDto,
} from "@/src/lib/types";
import TagSelector from "@/src/components/tagSelector/tagSelector";
import RichTextEditor from "@/src/components/inputField/richTextEditor";
import { Tag } from "react-tag-autocomplete";
import {
  createQuestion,
  fetchTags,
  addQuestionTag,
} from "@/src/lib/actions/questionActions";
import { createAnswer } from "@/src/lib/actions/answerAction";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Ask() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const router = useRouter();

  function handleEditorStateChange(updatedEditorState: string) {
    setContent(updatedEditorState);
  }
  useEffect(() => {
    const fetchAndSetTags = async () => {
      const fetchedTags = await fetchTags();
      setTags(fetchedTags);
    };

    fetchAndSetTags();
  }, []);

  const handleSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    const q: QuestionCreateDto = { title: enteredTitle };
    const response = await createQuestion(q);

    if (response) {
      let selectedTagsS: QuestionTagCreateDto[] = [];
      console.log("responsessssssssss", response);

      selectedTags.forEach((tag) => {
        selectedTagsS.push({
          TagId: Number(tag.value),
          QuestionId: Number(response.id),
        });
      });
      console.log("selectedTagsS", selectedTagsS);
      await addQuestionTag(selectedTagsS);

      let answer: AnswerCreateDto = {
        questionId: Number(response.id),
        content: content,
      };
      console.log("content", content);
      const responseAnswer = await createAnswer(answer);

      if (responseAnswer) {
        router.push(`/q/${Number(response.id)}`);
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-center pt-20">
      <div className="flex flex-col items-center w-1/3">
        <label className="m-4 text-white ">
          <div
            className="relative flex items-center justify-center h-12 rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2"
          >
            <input
              className="  peer h-full w-full outline-none text-sm text-white bg-transparent"
              type="text"
              placeholder="Enter a title"
              onChange={(e) => setEnteredTitle(e.target.value)}
            />
          </div>
        </label>
        <label className="text-white">
          <div className="w-full relative flex items-center rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden ">
            <RichTextEditor onEditorStateChange={handleEditorStateChange} />
          </div>
        </label>
        <div className="w-full flex justify-between ">
          <div className="flex-grow pl-2">
            <TagSelector
              suggestions={tags}
              selected={selectedTags}
              setSelected={setSelectedTags}
            />
          </div>
          <div className=" w-52 max-w-xs flex-shrink-0 pt-8 pl-20 ">
            <button
              onClick={handleSubmit}
              className="btn btn-outline btn-success px-4 w-24 mt-4 ml-2 "
            >
              <p className="font-light text-xl">Submit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}