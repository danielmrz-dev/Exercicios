import { TPopularTag } from "./popular-tag.type";
import { IProfile } from "./profile.interface";

export interface IArticle {
    body: string,
    createdAt: string,
    description: string,
    favorited: boolean,
    favoritesCount: number,
    slug: string,
    tagList: TPopularTag[],
    title: string,
    updatedAt: string,
    author: IProfile
}