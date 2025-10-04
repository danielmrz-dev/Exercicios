import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";

import { appRoutes } from "./app.routes";
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from "./auth/store/auth.reducers";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './auth/store/auth.effects';
import * as feedEffects from './shared/components/feed/store/feed.effects';
import * as popularTagsEffects from './shared/components/tag-list/store/popular-tags.effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { authInterceptor } from "./shared/interceptors/auth.interceptor";
import { feedFeatureKey, feedReducer } from "./shared/components/feed/store/feed.reducers";
import { popularTagsFeatureKey, popularTagsReducer } from "./shared/components/tag-list/store/popular-tags.reducers";

export const appConfig: ApplicationConfig = {
    providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([
        authInterceptor
    ])),
    provideRouter(appRoutes),
    provideStore({
        router: routerReducer
    }),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(popularTagsFeatureKey, popularTagsReducer),
    provideEffects(authEffects, feedEffects, popularTagsEffects),
    provideRouterStore(),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        trace: false,
        traceLimit: 75
    }),
],
};
