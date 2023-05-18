import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../model/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl:string = 'https://localhost:7085'

  constructor(private http:HttpClient) { }

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl + '/api/posts');
  }

  getPostById(id:string):Observable<Post>{

    return this.http.get<Post>(this.baseUrl + '/api/posts/' + id)

  }

}
