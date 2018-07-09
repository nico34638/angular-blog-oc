import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLike: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  setlike(number){
    this.postLike = this.postLike + number;
    console.log(this.postLike);
  }



}
