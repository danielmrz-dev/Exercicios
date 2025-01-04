import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.scss'
})
export class PostCommentsComponent implements OnInit {
  // NÃO FUNCIONA
  // @Input() set userId(value: string) {
  //   console.log(value);    
  // }
  
  private readonly _activatedRoute = inject(ActivatedRoute)

  @Input() set postId(value: string) {
    console.log('PostID', value);    
  }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe((value) => {
      console.log('UserID', value);      
    })
  }


}
