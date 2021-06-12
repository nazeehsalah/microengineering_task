import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://www.omdbapi.com/?apikey=bbf5cbce&'
  constructor(private httpClient: HttpClient) {
    this.apiUrl.replace('id', 'test')
  }
  getMovieById(id: any) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiUrl}i=${id}`)
        .subscribe((res) => {
          resolve(res)
        }, e => {
          reject(e)
        })
    })

  }
}
