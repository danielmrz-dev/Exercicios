import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IFeedResponse } from "../../../types/feed-response.interface";

export const feedActions = createActionGroup({
    source: 'feed',
    events: {
        'Get feed': props<{ url: string }>(),
        'Get feed success': props<{ feed: IFeedResponse }>(),
        'Get feed failure': emptyProps(),
    }
})