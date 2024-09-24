import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PipesModule } from '../Pipes/pipes.module';

@NgModule({
  declarations: [
      UserDetailsComponent,
      FilterComponent,
      TableComponent
    ],
    imports: [
      AngularMaterialModule,
      FormsModule,
      CommonModule,
      PipesModule
  ],
  exports: [
      UserDetailsComponent,
      FilterComponent,
      TableComponent
  ],
  providers: [],
})
export class ComponentsModule {}
