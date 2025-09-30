import { IArticle } from "./article.interface"

export interface IFeedResponse {
    articles: IArticle[]
    articlesCount: number 
}