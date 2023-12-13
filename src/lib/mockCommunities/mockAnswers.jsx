import { mockComments } from "./mockComments";

export const mockAnswers = [
  {
    id: 1,
    answer: "What is your favorite programming language?",
    upVotes: 0,
    downVotes: 0,
    username: "user1",
    date: Date.now(),
    approved: false,
    comments: [mockComments[0], mockComments[1]],
  },
  {
    id: 2,
    answer: "Java",
    upVotes: 0,
    downVotes: 0,
    username: "user1",
    date: Date.now(),
    approved: false,
    comments: [mockComments[2], mockComments[3]],
  },
  {
    id: 1,
    answer: "Explain the difference between a stack and a queue",
    upVotes: 0,
    downVotes: 0,
    username: "user1",
    date: Date.now(),
    approved: false,
    comments: [mockComments[4], mockComments[5]],
  },
  {
    id: 2,
    answer: "Stack is LIFO, Queue is FIFO",
    upVotes: 0,
    downVotes: 0,
    username: "user1",
    date: Date.now(),
    approved: false,
    comments: [mockComments[6], mockComments[7]],
  },
];
