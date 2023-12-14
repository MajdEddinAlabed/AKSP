export interface Answer {
  id?: number;
  userId?: string | undefined;
  content?: string | undefined;
  postedAt?: string;
  lastModifiedDate?: string | undefined;
  upVote?: number;
  downVote?: number;
  approveDate?: string | undefined;
  votes?: Vote[] | undefined;
  comments?: Comment[] | undefined;
  savedAnswers?: SavedAnswer[] | undefined;
  questionId?: number;
  question?: Question;
}

export interface AnswerCreateDto {
  questionId?: number;
  content?: string | undefined;
}

export interface AnswerReadDto {
  id: number;
  questionId?: number;
  userId?: string | undefined;
  content?: string | undefined;
  postedAt?: string;
  upVote?: number;
  downVote?: number;
  lastModifiedDate?: string | undefined;
  comments?: CommentReadDto[] | undefined;
}

export interface AnswerRefDto {
  id?: number;
  questionId?: number;
  content?: string | undefined;
  postedAt?: string;
  upVote?: number;
  downVote?: number;
}

export interface CityRefDto {
  id?: number;
  cityName?: string | undefined;
}

export interface Comment {
  id?: number;
  content?: string | undefined;
  userId?: string | undefined;
  postAt?: string;
  answerId?: number;
  answer?: Answer;
}

export interface CommentCreateDto {
  content?: string | undefined;
  answerId?: number | undefined;

}

export interface CommentReadDto {
  id?: number;
  content?: string | undefined;
  userId?: string | undefined;
  postedAt?: string;
}

export interface CommunityCreateDto {
  name?: string | undefined;
  description?: string | undefined;
  host?: string | undefined;
  icon?: string | undefined;
  isPrivate?: boolean;
  locked?: boolean;
  connectionString?: string | undefined;
}

export interface CommunityReadDto {
  id?: number;
  name?: string | undefined;
  description?: string | undefined;
  creationDate?: string;
  isPrivate?: boolean;
  icon?: string | undefined;
  host?: string | undefined;
  locked?: boolean;
}

export interface CommunityUpdateDto {
  name?: string | undefined;
  description?: string | undefined;
  isPrivate?: boolean;
}

export interface CountryRefDto {
  id?: number;
  name?: string | undefined;
}

export interface ProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Question {
  id?: number;
  title?: string | undefined;
  userId?: string | undefined;
  postedAt?: string;
  lastModifiedDate?: string | undefined;
  viewCount?: number | undefined;
  answers?: Answer[] | undefined;
  questionTags?: QuestionTag[] | undefined;
}

export interface QuestionCreateDto {
  title: string;
  tags?:QuestionTagCreateDto[];
}

export interface QuestionTagCreateDto{
  QuestionId:number;
  TagId:number;
}
export interface QuestionReadDto {
  id?: number;
  title?: string | undefined;
  postedAt?: string;
  lastModifiedDate?: string;
  viewCount?: number;
  userId?: string | undefined;
  questionTags?: QuestionTagReadDto[];
  answers?: AnswerReadDto[] | undefined;
}

export interface QuestionRefDto {
  id?: number;
  title?: string | undefined;
  postedAt?: string;
  lastModifiedDate?: string;
  viewCount?: number;
  tag?: QuestionTagReadDto[] | undefined;
  answer?: AnswerRefDto[] | undefined;
}

export interface QuestionTag {
  id?: number;
  questionId?: number;
  question?: Question;
  tagId?: number;
  tag?: Tag;
}

export interface QuestionTagCreateDto {
  tagId?: number;
  questionId?: number;
}

export interface QuestionTagReadDto {
  QuestionId: number;
  //Error if you uncomment this.
  //[x: string]: number;
  tag?: TagRefDto;
}

export interface SavedAnswer {
  id?: number;
  answerId?: number;
  answer?: Answer;
  authorId?: string | undefined;
}

export interface SavedAnswerDto {
  id?: string | undefined;
  userId?: string | undefined;
  answerId?: number;
}

export interface Tag {
  id?: number;
  tagName: string;
  communityId?: number | undefined;
  questionTags?: QuestionTag[] | undefined;
}

export interface TagCreateDto {
  tagName?: string | undefined;
}

export interface TagQuestionReadDto {
  question?: QuestionRefDto;
}

export interface TagReadDto {
  id?: number;
  tagName?: string | undefined;
  communityId?: number;
  questionTags?: TagQuestionReadDto[] | undefined;
}

export interface TagRefDto {
  id?: number;
  tagName?: string | undefined;
}

export interface TagUpdateDto {
  tagName?: string | undefined;
}

export interface UserCreateDto {
  passwrod: string;
  userName: string;
  password: string;
  email: string;
}

export interface UserReadDto {
  id?: string | undefined;
  userName?: string | undefined;
  gender?: string | undefined;
  birthDate?: string;
  joinDate?: string;
  reputaitonPoints?: number;
  country?: CountryRefDto;
  city?: CityRefDto;
}

export interface UserUpdateDto {
  userName: string;
  email: string;
  countryId: number;
  cityId: number;
  gender?: string | undefined;
}

export interface Vote {
  id?: number;
  voteType?: VoteType;
  date?: string;
  userId?: string | undefined;
  answerId?: number | undefined;
  answer?: Answer;
}

export interface VoteCreateDto {
  voteType?: VoteType;
}

export enum VoteType {
  upVote = 0,
  downVote = 1,
}
