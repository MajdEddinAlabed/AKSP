import React, { useState, useEffect } from 'react';

export default function TagSelector( {tags}:{tags:string[]} ) {
  const [input, setInput] = useState('');
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  
  useEffect(() => {
    setFilteredTags(
      tags.filter((tag :string) =>
        tag.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input, tags]);

  return (
    <label className='m-4'>
      Tag: 
      
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-1 my-2 text-sm text-white pr-2 bg-black rounded-lg max-w-xs"
        list="tag-list"
      />
      <datalist id="tag-list">
        {filteredTags.map((tag) => (
          <option key={tag} value={tag} className='text-sm text-white pr-2'>
            {tag}
          </option>
        ))}
      </datalist>
   
    </label>
  );
}


