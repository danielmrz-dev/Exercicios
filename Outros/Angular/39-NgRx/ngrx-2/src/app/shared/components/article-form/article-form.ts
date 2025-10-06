import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IArticleForm } from '../../types/article-form-values.interface';
import { IBackendErrors } from '../../types/backend-errors.interface';
import { CommonModule } from '@angular/common';
import { BackendErrorMessages } from '../backend-error-messages/backend-error-messages';

@Component({
  selector: 'app-article-form',
  imports: [CommonModule, BackendErrorMessages, ReactiveFormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss'
})
export class ArticleForm {
  @Input() initialValues?: IArticleForm;
  @Input() isSubmitting: boolean = false;
  @Input() errors: IBackendErrors | null = null;

  @Output() articleSubmit = new EventEmitter<IArticleForm>();

  private readonly fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    title: '',
    description: '',
    body: '',
    tagList: '',
  })

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    if (!this.initialValues) {
      throw new Error('Inputs not provided.')
    }
    this.form.patchValue({
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' ')
    })
  }

  onSubmit(): void {
    const formValues = this.form.getRawValue();
    const articleFormValues: IArticleForm = {
      ...formValues,
      tagList: formValues.tagList.split(' ')
    };
    this.articleSubmit.emit(articleFormValues);
  }
}
