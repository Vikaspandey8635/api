import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllsesrvicesService {

  base_url="https://jsonplaceholder.typicode.com/"
  constructor (private http:HttpClient){}

  get(url:string){
    return this.http.get(this.base_url+url);
  }

  allpost(url:string, data:any){
    return this.http.post(this.base_url+url,data)
  }

  deleteapi(url:string, id:any){
    return this.http.delete(this.base_url+url+id)
  }

  getc(url:string, id:any){
    return this.http.get(this.base_url+url+id);
  }

  update(url:string, id:any, data:any){
    return this.http.put(this.base_url+url+id,data)
  }

}

