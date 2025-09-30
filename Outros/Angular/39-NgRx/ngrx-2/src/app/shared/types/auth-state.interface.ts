import { IBackendErrors } from "./backend-errors.interface";
import { ICurrentUser } from "./current-user.interface";

export interface IAuthState {
    isSubmitting: boolean,
    currentUser: ICurrentUser | null | undefined,
    isLoading: boolean,
    validationErrors: IBackendErrors | null
}