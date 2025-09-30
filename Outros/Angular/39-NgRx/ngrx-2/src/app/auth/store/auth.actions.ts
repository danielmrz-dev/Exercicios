import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IRegisterRequest } from "../../shared/types/register-request.interface";
import { ICurrentUser } from "../../shared/types/current-user.interface";
import { IBackendErrors } from "../../shared/types/backend-errors.interface";
import { ILoginRequest } from "../../shared/types/login-request.interface";

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        'Register': props<{ request: IRegisterRequest }>(),
        'Register Success': props<{ currentUser: ICurrentUser }>(),
        'Register Failure': props<{ errors: IBackendErrors }>(),
        
        'Login': props<{ request: ILoginRequest }>(),
        'Login Success': props<{ currentUser: ICurrentUser }>(),
        'Login Failure': props<{ errors: IBackendErrors }>(),

        'Get Current User': emptyProps(),
        'Get Current User Success': props<{ currentUser: ICurrentUser }>(),
        'Get Current User Failure': emptyProps(),
    }
});