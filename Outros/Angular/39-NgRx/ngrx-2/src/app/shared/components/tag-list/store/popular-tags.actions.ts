import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { TPopularTag } from "../../../types/popular-tag.type";

export const popularTagsActions = createActionGroup({
    source: 'tag-list',
    events: {
        'Get Tag List': emptyProps(),
        'Get Tag List Success': props<{ popularTags: TPopularTag[] }>(),
        'Get Tag List Failure': emptyProps(),
    }
})