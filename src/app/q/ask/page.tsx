'use client';
import { useState } from 'react';
import { JSX } from "react";
import "/src/lib/general.css";
import { QuestionCreateDto } from "@/src/lib/types";
import Link from "next/link";
import TagSelector from '@/src/components/tagSelector/tagSelector';

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
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label className='m-4'>
                    Title:
                    <div className="relative flex items-center w-full md:w-96 h-12 rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">

                        <input
                            className="peer h-full w-full outline-none text-sm text-white pr-2 bg-transparent"
                            type="text"
                            placeholder=" Enter title..."
                        />
                    </div>
                </label>

                <label className='m-4'>
                    Content:
                <div className="relative flex items-center w-full md:w-96 h-20 rounded-lg focus-within:shadow-lg bg-black border border-white overflow-hidden p-2">
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} className="peer h-full w-full outline-none text-sm text-white pr-2 bg-transparent" />
                </div>
                </label>
                {/* <label className='m-4'>
                    Tag:
                    <select value={tag} onChange={(e) => setTag(e.target.value)} className="border p-2 my-2 text-sm text-white pr-2 bg-transparent">
                        {tags.map((tag) => (
                            <option key={tag} value={tag} className='text-sm text-white pr-2 bg-black'>
                                {tag}
                            </option>
                        ))}
                    </select>
                </label> */}
                <TagSelector tags={tags} />
                <div className=' w-52 max-w-xs'>

                    <button type="submit" className="button ">Submit</button>
                </div>
            </form>
        </div>
    );
}

