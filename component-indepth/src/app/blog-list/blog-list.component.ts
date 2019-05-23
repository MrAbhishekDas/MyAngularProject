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

  currentPage: number;

  constructor() { }

  ngOnInit() {
  //   this.blogPost.push(new BlogPost('Blog Title 1','Summary 1'));
  //   this.blogPost.push(new BlogPost('Blog Title 2','The summary is too big. Lets learn to use the ... feature and implementing pipe'));
  
  this.currentPage = 0;
  
  this.blogPost = [
    [
      {
        title: 'Title 1',
        summary: 'The summary is too big. Lets learn to use pipe (...) to truncate the string'
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
    ,
    [
      {
        title: 'Title 9',
        summary: 'Summary 9'
      },
      {
        title: 'Title 10',
        summary: 'Summary 10'
      },
      {
        title: 'Title 11',
        summary: 'Summary 11'
      },
      {
        title: 'Title 12',
        summary: 'Summary 12'
      }
    ]
    ,
    [
      {
        title: 'Title 13',
        summary: 'Summary 13'
      },
      {
        title: 'Title 14',
        summary: 'Summary 14'
      },
      {
        title: 'Title 15',
        summary: 'Summary 15'
      },
      {
        title: 'Title 16',
        summary: 'Summary 16'
      }
    ]
  ]
  }

  updatePage(newPage){
    console.log("Event Emitted");
    this.currentPage = newPage;
  }

  expandAll(){
    
  }

}
