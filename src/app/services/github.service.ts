import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private username: string = '';
  url: string = 'https://api.github.com/users/';
  //url2 : string= 'https://api.github.com/users/khushbooshivhare1234/repos'
  constructor(private http: HttpClient) {}

  getUser(username: string) {
    //https://api.github.com/users/username
    //https://api.github.com/users/khushbooshivhare1234/repos

    return this.http.get(this.url + username);
  }
  getUserRepos() {
    return this.http.get(`this.url  ${this.username} /repos`);
  }
}
