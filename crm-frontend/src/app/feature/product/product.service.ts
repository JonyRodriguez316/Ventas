import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/product";


  public findById(id:number):Observable<Product>{
    return this.http.get<Product>(this.url+"/"+id, this.httpOptions);
  }

  public findByName(term: string):Observable<Product[]>{
    return this.http.get<Product[]>(this.url+"/findByName/"+term, this.httpOptions);
  }
}
