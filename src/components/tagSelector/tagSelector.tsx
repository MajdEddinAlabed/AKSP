import { TagReadDto } from '@/src/lib/types/interfaces';
import React, { useCallback, useState } from 'react'
import { ReactTags,Tag } from 'react-tag-autocomplete'

interface TagSelectorProps {
  suggestions: Tag[];
  selected: Tag[];
  setSelected: (tags: Tag[]) => void;
}

export default function TagSelector({ suggestions, selected, setSelected }: TagSelectorProps) {

  const onAdd = useCallback(
    (newTag : Tag | undefined) => {
      if (newTag) {
        setSelected([...selected, newTag])
      }
    },
    [selected]
  )

  const onDelete = useCallback(
    (tagIndex: number) => {
      setSelected(selected.filter((_, i) => i !== tagIndex))
    },
    [selected]
  )

   return (
     <div className='m-5 items-center justify-center'>
    
      <ReactTags
        classNames={{
          root: 'bg-black',
          rootIsActive: 'is-active',
          rootIsDisabled: 'is-disabled',
          rootIsInvalid: 'is-invalid',
          label: 'bg-black',
          tagList: 'tag-list',
          tagListItem: 'tag-list-item',
          tag: 'tag',
          tagName: 'tag-name',
          comboBox: 'bg-black rounded-lg border border-white w-32 h-10',
          input: 'bg-black ',
          listBox: 'rounded border border-white',
          option: 'option',
          optionIsActive: 'option-is-active',
          highlight: 'highlight'
        }}
        labelText="Select tags"
        selected={selected}
        suggestions={suggestions}
        onAdd={onAdd}
        onDelete={onDelete}
        noOptionsText="No matching countries"
      />

    </div>
  )
}
