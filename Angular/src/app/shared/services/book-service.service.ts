import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BookServiceService {

  constructor(private http: HttpClient) { }

  getQueryData(query:string = 'a'): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q='+query+'&maxResults=20&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))&key=AIzaSyBH9v8PyxNXCV4sVSfJwtrn0NN9zipvufg');
   }

  getData(): Observable<any> {
   // tslint:disable-next-line:max-line-length
   return this.http.get('https://www.googleapis.com/books/v1/volumes?q=a&maxResults=20&fields=items(saleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))&key=AIzaSyBH9v8PyxNXCV4sVSfJwtrn0NN9zipvufg');
  }
}
