export interface Answer {
    id?: number;
    content?: string | undefined;
    postedAt?: string;
    lastModifiedDate?: string;
    upVote?: number;
    downVote?: number;
    approveDate?: string;
    votes?: Vote[] | undefined;
    comments?: Comment[] | undefined;
    savedAnswers?: SavedAnswer[] | undefined;
    questionId?: number;
    question?: Question;
}

export interface AnswerCreateDto {
    content?: string | undefined;
    authorId?: string | undefined;
    questionId?: number;
}

export interface City {
    id?: number;
    name?: string | undefined;
    countryId?: number | undefined;
    country?: Country;
    users?: User[] | undefined;
}

export interface Comment {
    id?: number;
    content?: string | undefined;
    postAt?: string;
    questionId?: number;
    question?: Question;
    answerId?: number;
    answer?: Answer;
}

export interface CommentCreateDto {
    id?: number;
    content?: string | undefined;
}

export interface Community {
    id?: number;
    name?: string | undefined;
    description?: string | undefined;
    creationDate?: string;
    isPrivate?: boolean;
    host?: string | undefined;
    connectionString?: string | undefined;
    icon?: string | undefined;
    locked?: boolean;
    groups?: Group[] | undefined;
}

export interface CommunityCreateDto {
    name?: string | undefined;
    description?: string | undefined;
    isPrivate?: boolean;
}

export interface CommunityReadDto {
    id?: number;
    name?: string | undefined;
    description?: string | undefined;
    creationDate?: string;
    host?: string;
    isPrivate?: boolean;
    icon?: string;
}

export interface CommunityUpdateDto {
    name?: string | undefined;
    description?: string | undefined;
    isPrivate?: boolean;
}

export interface Country {
    id?: number;
    name?: string | undefined;
    cities?: City[] | undefined;
    users?: User[] | undefined;
}

export interface Group {
    id?: number;
    groupName?: number;
    permissionId?: number;
    permission?: Permission;
    communities?: Community[] | undefined;
    users?: User[] | undefined;
}

export interface Permission {
    id?: number;
    name?: number;
    group?: Group[] | undefined;
}

export interface ProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;
}

export interface Question {
    id?: number;
    title?: string | undefined;
    content?: string | undefined;
    postedAt?: string;
    lastModifiedDate?: string;
    voteType?: number;
    votes?: Vote[] | undefined;
    comments?: Comment[] | undefined;
    answers?: Answer[] | undefined;
    questionTags?: QuestionTag[] | undefined;
    savedQuestions?: SavedQuestion[] | undefined;
}

export interface QuestionCreateDto {
    title: string;
    content: string;
}

export interface QuestionReadDto {
    id?: number;
    title?: string | undefined;
    content?: string | undefined;
    postedAt?: string;
    lastModifiedDate?: string;
    upVote?: number;
    downVote?: number;
    tag?: Tag;
    vote?: Vote;
    answer?: Answer;
    comment?: Comment;
}

export interface QuestionTag {
    id?: number;
    questionId?: number;
    question?: Question;
    tagId?: number;
    tag?: Tag;
}

export interface SavedAnswer {
    userId?: number;
    answerId?: number;
    answer?: Answer;
    id?: number;
}

export interface SavedAnswerDto {
    userId?: number;
    answerId?: number;
}

export interface SavedQuestion {
    userId?: number;
    questionId?: number;
    question?: Question;
    id?: number;
}

export interface SavedQuestionDto {
    userId?: number;
    questionId?: number;
}

export interface Tag {
    id?: number;
    tagName: string;
    communityId?: number;
    questionTags?: QuestionTag[] | undefined;
}

export interface TagCreateDto {
    tagName?: string | undefined;
    communityId?: number;
}

export interface TagReadDto {
    id?: number;
    tagName?: string | undefined;
    communityId?: number;
}

export interface TagUpdateDto {
    tagName?: string | undefined;
}

export interface User {
    id?: string | undefined;
    userName?: string | undefined;
    normalizedUserName?: string | undefined;
    email?: string | undefined;
    normalizedEmail?: string | undefined;
    emailConfirmed?: boolean;
    passwordHash?: string | undefined;
    securityStamp?: string | undefined;
    concurrencyStamp?: string | undefined;
    phoneNumber?: string | undefined;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string | undefined;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    gender?: string | undefined;
    joinDate?: string;
    reputationPoints?: number;
    countryId?: number | undefined;
    country?: Country;
    cityId?: number | undefined;
    city?: City;
    groups?: Group[] | undefined;
}

export interface UserCreateDto {
    userName: string;
    password: string;
    email: string;
    gender: string;
    birthDate: string;
    countryId: number;
    cityId: number;
}

export interface UserReadDto {
    id?: number;
    userName?: string | undefined;
    gender?: string | undefined;
    birthDate?: string;
    joinDate?: string;
    reputaitonPoints?: number;
    country?: Country;
    city?: City;
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
    questionId?: number | undefined;
    question?: Question;
}

export interface VoteCreateDto {
    voteType?: VoteType;
    userId?: string | undefined;
    answerId?: number | undefined;
    questionId?: number | undefined;
}

export enum VoteType {
    _0 = 0,
    _1 = 1,
}