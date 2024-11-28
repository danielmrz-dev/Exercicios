import { NgModule } from "@angular/core";
import { GenreDescriptionPipe } from './genre-description.pipe';
import { StateDescriptionPipe } from './state-description.pipe';
import { IsFavoritePipe } from './is-favorite.pipe';

@NgModule({
    declarations: [
      GenreDescriptionPipe,
      StateDescriptionPipe,
      IsFavoritePipe
  ],
    imports: [],
    exports: [
      GenreDescriptionPipe,
      StateDescriptionPipe,
      IsFavoritePipe
    ]
})
export class PipesModule {}