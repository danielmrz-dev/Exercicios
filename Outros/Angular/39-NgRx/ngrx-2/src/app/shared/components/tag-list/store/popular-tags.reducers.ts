import { createFeature, createReducer, on } from "@ngrx/store";
import { IPopularTagsState } from "../../../types/popular-tags-state.interface";
import { popularTagsActions } from "./popular-tags.actions";
import { routerNavigationAction } from "@ngrx/router-store";

const initialState: IPopularTagsState = {
    isLoading: false,
    error: null,
    data: null
}

const popularTagsFeature = createFeature({
    name: 'popular-tags',
    reducer: createReducer(
        initialState,
        on(popularTagsActions.getTagList, (state) => ({ ...state, isLoading: true })),
        on(popularTagsActions.getTagListSuccess, (state, action) => ({ 
            ...state, 
            isLoading: false,
            data: action.popularTags
        })),
        on(popularTagsActions.getTagListFailure, (state) => ({ ...state, isLoading: false })),
    )
})