import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';
import { CoursesHttpService } from './services/courses-http.service';
import { CourseComponent } from './course/course.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { compareCourses } from './model/course';

import { compareLessons } from './model/lesson';
import { CoursesResolver } from './courses.resolver';
import { EffectsModule } from '@ngrx/effects';
import { CoursesDataService } from './services/courses-data.service';
import { CoursesEntityService } from './services/courses-entity.service';
import { LessonsEntityService } from './services/lessons-entity.service';

const entityMetadata: EntityMetadataMap = {
  Course: {
    sortComparer: compareCourses,
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticDelete: true
    }
  },
  Lesson: {
    sortComparer: compareLessons,
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticDelete: true
    }
  }
}

export const coursesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      courses: CoursesResolver
    }

  },
  {
    path: ':courseUrl',
    component: CourseComponent,
    resolve: {
      courses: CoursesResolver
    }
  }
];


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    RouterModule.forChild(coursesRoutes),
    EffectsModule.forFeature([]),
  ],
  declarations: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent
  ],
  exports: [
    HomeComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    CourseComponent
  ],
  providers: [
    CoursesHttpService,
    CoursesResolver,
    CoursesEntityService,
    LessonsEntityService,
    CoursesDataService,
  ]
})
export class CoursesModule {

  private readonly eds = inject(EntityDefinitionService);
  private readonly entityDataService = inject(EntityDataService);
  private readonly coursesDataService = inject(CoursesDataService);

  constructor() {
    this.eds.registerMetadataMap(entityMetadata);
    this.entityDataService.registerService('Course', this.coursesDataService)
  }


}
