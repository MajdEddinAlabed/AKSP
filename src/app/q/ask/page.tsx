'use client';
import { useState } from 'react';
import { JSX } from "react";
import "/src/lib/general.css";
import { QuestionCreateDto } from "@/src/lib/types";
import Link from "next/link";
import TagSelector from '@/src/components/tagSelector/tagSelector';
import RichTextEditor from '@/src/components/inputField/richTextEditor';
import { Tag } from 'react-tag-autocomplete';

export default function Ask() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tag, setTag] = useState('');

    const tags:Tag[] =[
      {label:'tag1',value:'tag1'},
      {label:'tag2',value:'tag2'},
      {label:'tag3',value:'tag3'}
    ] // preset list of tags

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ title, content, tag });
    };

    return (
        <div className="w-full flex items-center justify-center ">
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-1/3">
            <label className='m-4 text-white w-full '> Title:
              <div className="relative flex items-center justify-center h-12 rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">
                <input className="  peer h-full w-full outline-none text-sm text-white pr-2 bg-transparent" type="text" placeholder=" Enter title..." />
              </div>
            </label>
            <label className='text-white'> input field
              <div className="w-full relative flex items-center rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">
                <RichTextEditor />
              </div>
            </label>
            <TagSelector suggestions={tags}  />
            <div className=' w-52 max-w-xs'>
              <button type="submit" className="button ">Submit</button>
            </div>
          </form>
        </div>
      );
    }

