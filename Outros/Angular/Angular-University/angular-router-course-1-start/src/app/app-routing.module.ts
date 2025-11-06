import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./services/auth.guard";
import { CustomPreloadingStrategy } from "./services/custom-preloading-strategy";

const routes: Routes = [
  { path: "", redirectTo: "/courses", pathMatch: "full" },
  {
    path: "courses",
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
    data: {
      preload: true
    }
  },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: CustomPreloadingStrategy }
    )
  ],
  exports: [RouterModule],
  providers: [AuthGuard, CustomPreloadingStrategy],
})
export class AppRoutingModule {}
