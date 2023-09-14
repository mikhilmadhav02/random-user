import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor(private http:HttpClient) { }


  random(id:any){
   return this.http.get(`https://dummyjson.com/users/${id}`)
  }
}
