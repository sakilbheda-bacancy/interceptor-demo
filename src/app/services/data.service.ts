import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'abcXyz'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { 

  }

  getPostList(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
