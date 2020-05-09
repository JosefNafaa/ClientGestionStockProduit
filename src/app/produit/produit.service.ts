import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { API_URLS} from '../config/api.url.config';
import { Produit } from '../shared/produit';
import { CrudService } from '../shared/crud.service';
@Injectable()
export class ProduitService implements CrudService{

  constructor(private http: HttpClient){

  }

  getAll(): Observable<any>{
    const credentials = {
      username: 'user',
      password: 'password1'
    };

    const token = btoa(credentials.username + ':' + credentials.password);

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + token
    } : {});
    return this.http.get(API_URLS.PRODUITS_URL, {headers: headers});

  }

  add(produit:Produit): Observable<any>{
    return this.http.post(API_URLS.PRODUITS_URL, produit);
  }

  update(produit: Produit): Observable<any>{
    return this.http.put(API_URLS.PRODUITS_URL, produit);
  }

  delete(id:number): Observable<any>{
    return this.http.delete(API_URLS.PRODUITS_URL + `/${id}`);
  }

  addAll(list): Observable<any>{
      return this.http.post(API_URLS.PRODUITS_URL + '/all', list);
    }


}
