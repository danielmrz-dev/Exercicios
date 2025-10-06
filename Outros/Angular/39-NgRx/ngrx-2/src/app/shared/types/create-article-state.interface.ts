import { IBackendErrors } from "./backend-errors.interface";

export interface ICreateArticleState {
    isSubmitting: boolean;
    validationErrors: IBackendErrors | null;
}