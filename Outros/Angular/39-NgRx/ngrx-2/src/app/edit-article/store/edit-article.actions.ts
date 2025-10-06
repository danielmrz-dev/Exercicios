import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IArticleRequest } from "../../shared/types/article-request.interface";
import { IArticle } from "../../shared/types/article.interface";
import { IBackendErrors } from "../../shared/types/backend-errors.interface";

export const editArticleActions = createActionGroup({
    source: 'edit article',
    events: {
        'Get article': props<{ slug: string }>(),
        'Get article success': props<{ article: IArticle }>(),
        'Get article failure': emptyProps(),

        'Edit article': props<{ request: IArticleRequest, slug: string }>(),
        'Edit article success': props<{ article: IArticle }>(),
        'Edit article failure': props<{ errors: IBackendErrors }>(),
    }
})

