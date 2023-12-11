import { mockAnswers } from "./mockAnswers";

export const mockCommunities = [
  {
    id: 1,
    host: "c1",
    name: "Coding",
    description: "Coding is fun",
    questions: [
      {
        id: 1,
        title: "Favorite Programming Language",
        date: Date.now(),
        modified: Date.now(),
        views: 0,
        answers: [mockAnswers[0], mockAnswers[1]],
      },
      {
        id: 2,
        title: "Favorite IDE",
        date: Date.now(),
        modified: Date.now(),
        views: 0,
        answers: [mockAnswers[2], mockAnswers[3]],
      },
    ],
  },
];
