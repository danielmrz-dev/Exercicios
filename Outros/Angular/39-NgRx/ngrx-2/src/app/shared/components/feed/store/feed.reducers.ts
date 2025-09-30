import { createFeature, createReducer, on } from "@ngrx/store";
import { IFeedState } from "../../../types/feed-state.interface";
import { feedActions } from "./feed.actions";
import { routerNavigatedAction } from "@ngrx/router-store";

const initialState: IFeedState = {
    isLoading: false,
    data: null,
    error: null
}

const feedFeature = createFeature({
    name: 'feed',
    reducer: createReducer(
        initialState,
        on(feedActions.getFeed, (state) => {
            return {
                ...state,
                isLoading: true
            }
        }),
        on(feedActions.getFeedSuccess, (state, action) => {
            return {
                ...state,
                isLoading: false,
                data: action.feed
            }
        }),
        on(feedActions.getFeedFailure, (state) => {
            return { ...state, isLoading: true }
        }),
        on(routerNavigatedAction, () => initialState)
    )
})

export const {
    name: feedFeatureKey,
    reducer: feedReducer,
    selectIsLoading,
    selectError,
    selectData: selectFeedData
} = feedFeature