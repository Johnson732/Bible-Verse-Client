import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}
  url: string = '';
  getRequest() {
    //const url="http://localhost:3000/verse";
    const url = 'https://bible-verse-server.onrender.com';

    //const url="https://bible-verse-mocha.vercel.app/verse";

    return this.http.get<any>(url);

  }
}
