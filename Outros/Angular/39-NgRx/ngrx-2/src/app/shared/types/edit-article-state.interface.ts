import { IArticle } from "./article.interface";
import { IBackendErrors } from "./backend-errors.interface";

export interface IEditArticleState {
    article: IArticle | null;
    isLoading: boolean;
    isSubmitting: boolean;
    validationErrors: IBackendErrors | null;
}