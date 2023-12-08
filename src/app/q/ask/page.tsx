'use client';
import { useState } from 'react';
import { JSX } from "react";
import "/src/lib/general.css";
import { QuestionCreateDto } from "@/src/lib/types";
import Link from "next/link";
import TagSelector from '@/src/components/tagSelector/tagSelector';
import RichTextEditor from '@/src/components/inputField/richTextEditor';

export default function Home() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tag, setTag] = useState('');

    const tags = ['tag1', 'tag2', 'tag3']; // preset list of tags

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ title, content, tag });
    };

    return (
        <div className="w-full flex items-center justify-center ">
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-2/3">
            <label className='m-4 text-white w-full '> Title:
              <div className="relative flex items-center justify-center h-12 rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">
                <input className="  peer h-full w-full outline-none text-sm text-white pr-2 bg-transparent" type="text" placeholder=" Enter title..." />
              </div>
            </label>
            <label className='text-white'> input field
              <div className="relative flex items-center rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">
                <RichTextEditor />
              </div>
            </label>
            <TagSelector tags={tags}  />
            <div className=' w-52 max-w-xs'>
              <button type="submit" className="button ">Submit</button>
            </div>
          </form>
        </div>
      );
    }

