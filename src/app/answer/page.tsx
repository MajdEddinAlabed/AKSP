"use client";
import askButton from "@/src/components/buttons/askButton";
import "@/src/components/Style/style.css";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Comment, CommentCreateDto } from "@/src/lib/types";
import { addComment } from "@/src/lib/dataServices/commentService";

export default function Answer() {
  const [voteCount, setVoteCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [commentValue, setCommentValue] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.target.value);
  };

  const handleCommentSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCommentValue("");
    setIsClicked(false);
  };

  return (
    <main>
      <div>
        <div className="mainWidth mx-auto">
          <div className="flex mt-5">
            <div>
              {/* up button */}
              <div>
                <button
                  onClick={() => setVoteCount(voteCount + 1)}
                  className="flex items-center justify-center border-2 border-white bg-white rounded-full cursor-pointer hover:bg-black"
                  aria-pressed="false"
                  aria-label="Up vote"
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 hover:fill-white"
                    viewBox="-2.5 -2.5 23 23"
                  >
                    <path d="M1 12h16L9 4l-8 8Z"></path>
                  </svg>
                </button>
              </div>
              {/* vote counter */}
              <div className="flex justify-center my-3">{voteCount}</div>
              {/* down button */}
              <div>
                <button
                  onClick={() => setVoteCount(voteCount - 1)}
                  className="flex items-center justify-center border-2 border-white bg-white rounded-full cursor-pointer hover:bg-black"
                  aria-pressed="false"
                  aria-label="Up vote"
                >
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 hover:fill-white"
                    viewBox="-2.5 -2.5 23 23"
                  >
                    <path d="M1 6h16l-8 8-8-8Z"></path>
                  </svg>
                </button>
              </div>
              {/* save button */}
              <div>
                <button
                  className="flex items-center justify-center py-1 cursor-pointer hover:bg-blue-200"
                  type="button"
                  id="saves-btn-77619895"
                  aria-pressed="false"
                  aria-label="close dialog"
                >
                  <svg
                    aria-hidden="true"
                    className="text-blue-400 hidden w-4 h-4"
                    viewBox="0 0 18 18"
                  >
                    <path d="M3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    viewBox="0 0 18 18"
                  >
                    <path d="m9 10.6 4 2.66V3H5v10.26l4-2.66ZM3 17V3c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v14l-6-4-6 4Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* answer content */}
            <div className="ml-5">
              <div>
                <p>
                  I hope that finally someone can answer my question ... which
                  is more of a general good to know question rather than a
                  vitally important one :-) I cannot for the life of me find a
                  definiteimport answer to my question whether or not the name
                  property of a Redux Toolkit slice has to correspond to the
                  property name of the reducer in the configured store. None of
                  the tutorials I read and viewed and even the docs show the
                  connection between these ...
                </p>

                {/* add comment */}
                <div>
                  {comments.map((commentValue, index) => (
                    <p key={index}>{commentValue.content}</p>
                  ))}
                  {isClicked ? (
                    <form action={addComment}>
                      <textarea
                        className="textarea textarea-bordered w-full h-24 "
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
                    <button className="text-blue-400 btn" onClick={handleClick}>
                      Add a comment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
