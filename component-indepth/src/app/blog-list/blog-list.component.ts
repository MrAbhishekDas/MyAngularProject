import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  //blogPost: BlogPost[] = [];

  blogPost: BlogPost[][];

  constructor() { }

  ngOnInit() {
  //   this.blogPost.push(new BlogPost('Blog Title 1','Summary 1'));
  //   this.blogPost.push(new BlogPost('Blog Title 2','The summary is too big. Lets learn to use the ... feature and implementing pipe'));
  this.blogPost = [
    [
      {
        title: 'Title 1',
        summary: 'Summary 1'
      },
      {
        title: 'Title 2',
        summary: 'Summary 2'
      },
      {
        title: 'Title 3',
        summary: 'Summary 3'
      },
      {
        title: 'Title 4',
        summary: 'Summary 4'
      }
    ]
    ,
    [
      {
        title: 'Title 5',
        summary: 'Summary 5'
      },
      {
        title: 'Title 6',
        summary: 'Summary 6'
      },
      {
        title: 'Title 7',
        summary: 'Summary 7'
      },
      {
        title: 'Title 8',
        summary: 'Summary 8'
      }
    ]
  ]
  }

}
