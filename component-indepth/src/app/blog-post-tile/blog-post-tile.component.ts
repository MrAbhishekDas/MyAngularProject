import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost;

  // @Input() title: string; //taking input from html via Input Tag and 
  //                         //we can pass the name in the brackets if the name is different but here it is not required simce both the 
  //                         // name is same
  // summary: string;

  constructor() { }

  ngOnInit() {
    //this.title = "Random Title"; //No Need to initialise the title if we are taking input from tags
    //this.summary = "Learing JS";

    //***************Object */
    // let blog1 = new BlogPost('Blog Title 1','Summary 1');
    // let blog2 = new BlogPost('Blog Title 2','Summary 2');
    // this.blogPost.push(blog1,blog2);
  }

}
