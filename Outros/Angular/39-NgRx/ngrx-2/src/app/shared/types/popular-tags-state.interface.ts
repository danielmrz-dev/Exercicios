import { TPopularTag } from "./popular-tag.type";

export interface IPopularTagsState {
    isLoading: boolean;
    error: string | null;
    data: TPopularTag[] | null;
}