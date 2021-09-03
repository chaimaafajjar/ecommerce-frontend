import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
public host: string="http://localhost:8080"
  constructor(private http: HttpClient) { }

  public getResource(url){
      return this.http.get(this.host+url);
  }

  public createResource(url,body){
    console.log("hello");
    console.log(body);
  return this.http.post(this.host+url,body)
    console.log(body);
  }

  public updateResource(url,body){
   return this.http.put(this.host+url,body)
  }

  public deleteResource(url){
  return this.http.delete(this.host+url)
  }




}
