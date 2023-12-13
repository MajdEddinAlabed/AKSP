'use client';
import { useState } from 'react';
import { JSX } from "react";
import "/src/lib/general.css";
import { QuestionCreateDto, TagReadDto } from "@/src/lib/types";
import Link from "next/link";
import TagSelector from '@/src/components/tagSelector/tagSelector';
import RichTextEditor from '@/src/components/inputField/richTextEditor';
import { Tag } from 'react-tag-autocomplete';
import { createQuestion } from '@/src/lib/actions/questionActions';
import { createAnswer } from '@/src/lib/actions/answerAction';

export default async function Ask() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [setTags, setTag] = useState<Tag[]>([]);

  function handleEditorStateChange(updatedEditorState: string) {
    setContent(updatedEditorState);
  }

  const tags: Tag[] = [
    {
      label:'tag1',
      value:1
    },
    {
      label:'tag2',
      value:2
    },
    {
      label:'tag3',
      value:3
    }
    
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let selectedTags:number[]=[];
    setTags.forEach(tag => {
      selectedTags.push(Number(tag.value))
    });
    const q:QuestionCreateDto={title:title}
    let response = await createQuestion(q);
    
    console.log({ title, content,   selectedTags});
  };

  return (
    <div className="w-full flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-1/3">
        <label className='m-4 text-white w-full '> Title:
          <div className="relative flex items-center justify-center h-12 rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">
            <input className="  peer h-full w-full outline-none text-sm text-white pr-2 bg-transparent" type="text" placeholder=" Enter title..." onChange={e => setTitle(e.target.value)} />
          </div>
        </label>
        <label className='text-white'> input field
          <div className="w-full relative flex items-center rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">
          <RichTextEditor onEditorStateChange={handleEditorStateChange} />
          </div>
        </label>
        <div>
        <TagSelector suggestions={tags} selected={setTags} setSelected={setTag} />
        </div>

        <div className=' w-52 max-w-xs'>
          <button type="submit" className="button ">Submit</button>
        </div>
      </form>
    </div>
  );
}

