  import  "./styles.css";
  import Theme from "./themes/Theme";
  import { LexicalComposer } from "@lexical/react/LexicalComposer";
  import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
  import { ContentEditable } from "@lexical/react/LexicalContentEditable";
  import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
  import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
  import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
  import ToolbarPlugin from "./plugins/ToolbarPlugin";
  import { HeadingNode, QuoteNode } from "@lexical/rich-text";
  import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
  import { ListItemNode, ListNode } from "@lexical/list";
  import { CodeHighlightNode, CodeNode } from "@lexical/code";
  import { AutoLinkNode, LinkNode } from "@lexical/link";
  import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
  import { ListPlugin } from "@lexical/react/LexicalListPlugin";
  import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
  import { TRANSFORMERS } from "@lexical/markdown";
  import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
  import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
  import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

  import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
  import { useEffect,useState } from "react";
  import { LexicalComposerContext } from '@lexical/react/LexicalComposerContext';


  function Placeholder() {
    return <div className="editor-placeholder">ادخل تفاصيل السؤال</div>;
  }

  const editorConfig = {
    // The editor theme
    theme: Theme,
    // Handling of errors during update
    onError(error:any) {
      throw error;
    },
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode
    ],
    namespace:"editor"
  };

  interface OnChangePluginProps {
    onChange: (editorState: any) => void;
  }

  function OnChangePlugin({ onChange }: OnChangePluginProps) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
      return editor.registerUpdateListener(({editorState}) => {
        onChange(editorState);
      });
    }, [editor, onChange]);
    return null;
  }

  interface EditorProps {
    onEditorStateChange: (updatedEditorState: string) => void;
  }
  
  export default function Editor({ onEditorStateChange }: EditorProps) {
  
  
    const [editorState, setEditorState] = useState<string | undefined>();
    function onChange(editorState : any) {
      const editorStateJSON = editorState.toJSON();
      setEditorState(JSON.stringify(editorStateJSON));
      onEditorStateChange(JSON.stringify(editorState));
      console.log(JSON.stringify(editorStateJSON))
    }
    
    return (
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
              />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <LinkPlugin />
            <AutoLinkPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <OnChangePlugin onChange={onChange}/>
          </div>
        </div>
      </LexicalComposer>
    );
  }

