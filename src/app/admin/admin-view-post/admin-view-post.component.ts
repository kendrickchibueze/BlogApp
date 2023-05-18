import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Post} from "../../model/post.model";

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css']
})
export class AdminViewPostComponent implements OnInit {

  constructor(private route:ActivatedRoute, private postService:PostService) {
  }

  post:Post | undefined
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params =>{
        const id = params.get('id');

        if(id){
          this.postService.getPostById(id).subscribe(
            response=>{
              this.post = response;
            }
          )

        }
      }
    )
  }

}
