"use server";
import { BackAPIClient as api } from "@/src/lib/bClient/client";
import {
  QuestionReadDto,
  QuestionCreateDto,
  QuestionTagCreateDto,
  TagQuestionReadDto,
} from "../types";
import { Tag } from "react-tag-autocomplete";

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

export async function updateQuestion(
  id: number,
  body: QuestionCreateDto
): Promise<QuestionReadDto> {
  console.log("Updating question:", id, body);
  const response = await (await api()).updateQuestion(id, body);
  return response;
}

export async function deleteQuestion(id: number): Promise<QuestionReadDto> {
  console.log("Deleting question:", id);
  const response = await (await api()).delete(id);
  return response;
}

export async function addQuestionTag(
  body: QuestionTagCreateDto[] | undefined
): Promise<TagQuestionReadDto> {
  const response = await (await api()).addQuestionTag(body);
  return response;
}

export async function fetchTags(): Promise<Tag[]> {
  const ServerTags = await (await api()).getAllTags();
  return ServerTags.map(tag => ({ value: Number(tag.id), label: String(tag.tagName) }));
}
