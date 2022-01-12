import {Author} from "./author";
import {Sight} from "./sight";

export class BlogPost {
  public id : Number;
  public headline : String;
  public fullText : String;
  public publicationDate : Date;
  public sight : Sight;
  public author : Author;

  constructor(id: Number, headline: String, fullText: String, publicationDate: Date, sight: Sight, author: Author) {
    this.id = id;
    this.headline = headline;
    this.fullText = fullText;
    this.publicationDate = publicationDate;
    this.sight = sight;
    this.author = author;
  }
}
