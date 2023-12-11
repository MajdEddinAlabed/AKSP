import { useState, ChangeEvent, FormEvent } from "react";

export default function CommentSection() {
  const [isClicked, setIsClicked] = useState(false);
  const [commentValue, setCommentValue] = useState<string>("");
  const [comments, setComments] = useState<{ content: string }[]>([]);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.target.value);
  };

  const handleCommentSubmit = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, { content: commentValue }]);
    setCommentValue("");
    setIsClicked(false);
  };

  return (
    <>
      <div>
        {comments.map((comment, index) => (
          <CommentStyle key={index} content={comment.content} />
        ))}
        {isClicked ? (
          <form onSubmit={handleCommentSubmit}>
            <textarea
              className="textarea textarea-bordered w-full h-24 mt-16"
              placeholder="Type your comment here..."
              value={commentValue}
              onChange={handleCommentChange}
              name="content"
            ></textarea>
            <button type="submit" className="btn btn-outline">
              Submit
            </button>
          </form>
        ) : (
          <button className="text-blue-400 btn mt-16" onClick={handleClick}>
            Add a comment
          </button>
        )}
      </div>
    </>
  );
}

export function CommentStyle({ content }: { content: string }) {
  return (
    <div className="mt-4 ">
      <div className="ml-4 text-gray-400">{content} - {/*add user here*/}Meap</div>
      <div className="divider"></div>
    </div>
  );
}
