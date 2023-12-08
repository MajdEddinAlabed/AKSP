import React, { useEffect, useRef } from 'react';
import { StacksEditor } from "@stackoverflow/stacks-editor";
import "@stackoverflow/stacks-editor/dist/styles.css";
import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";

export default function RichTextEditor() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<StacksEditor | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Cleanup previous instance if it exists
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
  
      // Remove all child nodes
      while (containerRef.current.firstChild) {
        containerRef.current.firstChild.remove();
      }
  
      const div = document.createElement('div');
      containerRef.current.appendChild(div);
      const editor = new StacksEditor(div, "*Your* **markdown** here");
      editorRef.current = editor;
    }
  
    // Cleanup function for useEffect
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  // In your component
return <div ref={containerRef} className='rich-text-editor bg-gray-800 text-white'/>;

}
