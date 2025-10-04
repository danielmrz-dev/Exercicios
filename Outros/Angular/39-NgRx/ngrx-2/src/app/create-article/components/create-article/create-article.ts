import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticleForm } from '../../../shared/types/article-form-values.interface';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';

@Component({
  selector: 'app-create-article',
  imports: [],
  templateUrl: './create-article.html',
  styleUrl: './create-article.scss',
})
export class CreateArticle {
  @Input() initialValues?: IArticleForm
  @Input() isSubmitting: boolean = false
  @Input() errors: IBackendErrors | null = null

  @Output() articleSubmit = new EventEmitter<IArticleForm>()
}
