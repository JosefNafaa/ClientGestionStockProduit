import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { finalize } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

import { API_URLS } from './config/api.url.config';
import { PrincipalState } from './shared/principal.state';
import { SAVE_PRINCIPAL } from './shared/save.principal.action';
@Injectable({
  providedIn: 'root'
})
export class AppService {
authendicated: boolean = false;

constructor(private http: HttpClient,
   private cookieService: CookieService,
   private store: Store<PrincipalState>) { }


   authenticate(credentials, callback) {
     if(credentials){
       const token = btoa(credentials.username + ':' + credentials.password);
       this.cookieService.set('token', token);

       this.http.get(API_URLS.USER_URL).subscribe(response => {
           if (response && response['name']) {
               console.log(response);
               this.authendicated = true;
               this.store.dispatch({
                type: SAVE_PRINCIPAL,
                payload: response
              });
           } else {
               this.authendicated = false;
           }
           return callback && callback();
       });
     }
     else {
       this.authendicated = false;
     }
   }



  logout(callback){
      return callback && callback();

    }

}
