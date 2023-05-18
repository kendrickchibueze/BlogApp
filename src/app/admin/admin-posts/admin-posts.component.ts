import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../model/post.model";

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit{

  constructor(private postService:PostService) {
  }
  posts: Post[] = [];
  ngOnInit() {
    this.postService.getAllPosts()
      .subscribe(response=>{
        this.posts = response
      })
  }

}
