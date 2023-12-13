import { CommunityReadDto, CommunityCreateDto } from "../types";
import { BackAPIClient as api } from "@/src/lib/bClient/client";


export async function getAllCommunities(): Promise<CommunityReadDto[]> {
  console.log("Getting communities");
  const response = await (await api()).communitiesAll();
  return response;
}
export async function getCommunityById(id: number): Promise<CommunityReadDto> {
  console.log("Getting community:", id);
  const response = await (await api()).getCommunityById(id);
  return response;
}
export async function addCommunity(community: CommunityCreateDto) {
  console.log("Adding community:", community);
  await (await api()).communitiesPOST(community);
}
export async function deleteCommunity(id: number) {
  console.log("Deleting community:", id);
  await (await api()).communitiesDELETE(id);
}
export async function updateCommunity(id: number, community: CommunityCreateDto) {
  // console.log("Updating community:", id, community);
  await (await api()).communitiesPUT(id, community);
}
