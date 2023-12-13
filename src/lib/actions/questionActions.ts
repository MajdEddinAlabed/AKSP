"use server";
import { BackAPIClient as api } from "@/src/bClient/client";
import { QuestionReadDto, QuestionCreateDto } from "../types";

export async function getAllQuestion() {
  console.log("Getting all questions");
  const response = await (await api()).getAllQuestion();
  return response;
}

export async function getQuestionById(id: number): Promise<QuestionReadDto> {
  console.log("Getting question:", id);
  const response = await (await api()).getQuestionById(id);
  return response;
}

export async function createQuestion(body: QuestionCreateDto) {
  console.log("Creating question:", body);
  const response = await (await api()).createQuestion(body);
  return response;
}

