'use server'
import { BackAPIClient as api } from "@/src/lib/bClient/client";
import { CommentCreateDto } from "../types";

export async function addComment(formData: FormData) {
    await (await api()).addComment(
        {
            id: 1,
            content: formData.get("content") as string,
          }
    );
  }