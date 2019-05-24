import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']//For Applying encapsulation,
  // encapsulation: ViewEncapsulation.None
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost;

  fullSum: string;

  // @Input() title: string; //taking input from html via Input Tag and 
  //                         //we can pass the name in the brackets if the name is different but here it is not required simce both the 
  //                         // name is same
  // summary: string;

  constructor(private truncatePipe: TruncatePipe) { 

  }

  ngOnInit() {
    this.fullSum = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30);


    //this.title = "Random Title"; //No Need to initialise the title if we are taking input from tags
    //this.summary = "Learing JS";

    //***************Object */
    // let blog1 = new BlogPost('Blog Title 1','Summary 1');
    // let blog2 = new BlogPost('Blog Title 2','Summary 2');
    // this.blogPost.push(blog1,blog2);
  }

  showFullSummary(){
    this.post.summary = this.fullSum;
  }

  markFav() {
    this.post.isFav = !this.post.isFav;
  }

}
