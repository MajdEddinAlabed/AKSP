"use server";
import { BackAPIClient as api } from "@/src/bClient/client";
import { VoteType } from "@/src/lib/types";
import { AnswerCreateDto } from "../types";

export async function getAllAnswers() {
  console.log("Getting all answers");
  const response = await (await api()).getAllAnswers();
  return response;
}

export async function getAnswerById(id: number) {
  console.log("Getting answer:", id);
  const response = await (await api()).getAnswerById(id);
  return response;
}

export async function createAnswer(body: AnswerCreateDto) {
  console.log("Creating answer:", body);
  const response = await (await api()).addAnswer(body);
  return response;
}

export async function updateAnswer(id: number, body: AnswerCreateDto) {
  console.log("Updating answer:", id, body);
  const response = await (await api()).updateAnswer(id, body);
  return response;
}

export async function deleteAnswer(id: number) {
  console.log("Deleting answer:", id);
  const response = await (await api()).deleteAnswer(id);
  return response;
}

