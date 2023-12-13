"use server";
import { BackAPIClient as api } from "@/src/lib/bClient/client";
import { CommentCreateDto, CommentReadDto } from "../types";

export async function addComment(comment: CommentCreateDto) {
  console.log("Adding comment:", comment);
  await (await api()).addComment(comment);
}

export async function deleteComment(id: number) {
  console.log("Deleting comment:", id);
  await (await api()).deleteComment(id);
}

export async function updateComment(id: number, comment: CommentCreateDto) {
  console.log("Updating comment:", id, comment);
  await (await api()).updateComment(id, comment);
}

export async function getCommentById(id: number) {
  console.log("Getting comment:", id);
  const response = await (await api()).getCommentById(id);
  return response;
}

export async function getAllComments(): Promise<CommentReadDto[]> {
  console.log("Getting comments");
  const response = await (await api()).getAllComments();
  return response;
}
