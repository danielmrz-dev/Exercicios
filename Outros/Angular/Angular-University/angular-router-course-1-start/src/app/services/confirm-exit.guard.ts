import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from "@angular/router";
import { CourseComponent } from "../courses/course/course.component";

@Injectable({
  providedIn: "root",
})
export class ConfirmExitGuard implements CanDeactivate<CourseComponent> {

  canDeactivate(
    component: CourseComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    
    return component.confirmExit();

  }
  
}
