import { Component, OnInit } from '@angular/core';
import {Author} from "../models/author";
import {Sight} from "../models/sight";
import {BlogPost} from "../models/blog-post";
import {AuthorService} from "../services/author.service";
import {SightsService} from "../services/sights.service";
import {BlogPostService} from "../services/blog-post.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {



  authorFormControl=new FormControl('', Validators.required)
  sightFormControl=new FormControl('', Validators.required)
  headLineFormControl=new FormControl('', Validators.required)
  fullTextFormControl=new FormControl('')

  articleForm = new FormGroup({
    'author': this.authorFormControl,
    'sight': this.sightFormControl,
    'headLine':this.headLineFormControl,
    'fullText':this.fullTextFormControl
  });

  blogPost : BlogPost = new BlogPost(1,"Headline","Stefansdomasdasd",new Date(),new Sight(1,"",""),new Author(1,"",""));
  authors: Author[] = [
    new Author(1,"Hubert","Hof")
  ];
  sights: Sight[] = [
    new Sight(1,"Wien","Stefansdom")
  ];

  constructor(private authorService:AuthorService,private sightsService:SightsService,private blogPostService:BlogPostService) {
  }

  ngOnInit(): void {
   this.authorService.getAuthorsFromService().subscribe((retAuthors :Array<Author>) =>
    {
      this.authors=retAuthors
    });

    this.sightsService.getSightsFromService().subscribe((retSights :Array<Sight>) =>
    {
      this.sights=retSights
    });
  }


  Submit() {
    this.blogPostService.postBlogPostsFromService(new BlogPost(0,this.headLineFormControl.value,this.fullTextFormControl.value,new Date(),this.sightFormControl.value,this.authorFormControl.value));
  }
}
