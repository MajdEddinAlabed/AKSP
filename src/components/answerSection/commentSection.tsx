import {
  addComment,
  getAllComments,
  getCommentById,
} from "@/src/lib/actions/commentActions";
import { CommentCreateDto, CommentReadDto } from "@/src/lib/types";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface CommentSectionProps {
  answerId: number | undefined;
  commentList: CommentReadDto[] | undefined;
}

export default function CommentSection({
  answerId,
  commentList,
}: CommentSectionProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [commentValue, setCommentValue] = useState<string>("");
  const [comments, setComments] = useState<CommentReadDto[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    setIsClicked(true);
  };

  const fetchComments = () => {
    setComments(commentList ? commentList : []);
  };

  const handleCommentSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const comment: CommentCreateDto = {
      answerId: answerId,
      content: commentValue,
    };

    await addComment(comment);

    const newComment: CommentReadDto = {
      userId: "Majd",
      content: commentValue
    };

    setComments(prevComments => [...prevComments, newComment ]);

    setCommentValue("");
    setIsClicked(false);
  };

  useEffect(() => {
    const fetchComments = () => {
      setComments(commentList ? commentList : []);
    };

    fetchComments();
  }, [answerId, commentList]);

  return (
    <>
      <div>
        {comments.map((comment, index) => (
          <CommentStyle
            key={index}
            content={comment.content || ""}
            userId={comment.userId}
          />
        ))}
        {isClicked ? (
          <form onSubmit={handleCommentSubmit}>
            <textarea
              className="textarea textarea-bordered w-full h-24 mt-16"
              placeholder="Type your comment here..."
              value={commentValue}
              name="content"
              autoFocus
              onChange={(e) => setCommentValue(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-outline">
              Submit
            </button>
          </form>
        ) : (
          <button className="text-blue-400 btn btn-outline btn-accent btn-sm mt-4" onClick={handleClick}>
            Add a comment
          </button>
        )}
      </div>
    </>
  );
}

export function CommentStyle({
  content,
  userId,
}: {
  content: string;
  userId?: string | undefined;
}) {
  return (
    <div className="mt-4 ">
      <div className="ml-4 text-gray-400 text-sm">
        {content} - {userId}
      </div>
      <div className="divider"></div>
    </div>
  );
}
