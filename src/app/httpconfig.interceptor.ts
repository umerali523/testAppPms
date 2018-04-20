import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { PersistenceService } from 'angular-persistence/src/services/persistence.service';
import { StorageType } from 'angular-persistence/src/constants/persistence.storage_type';
import * as SecureLS from 'secure-ls';


@Injectable()
export class HttpConfig implements HttpInterceptor {
  constructor(private persistenceServ : PersistenceService){}
  localStore = new SecureLS();
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(req.method=="POST"){
          // req.body.token = "wjndjd7y7ejnkjda";
          // var newReq = req.clone({
          //     body :req.body

          // });
          // console.log('OldReq:',req);
          // console.log('NewReq:',newReq);
        return next.handle(req);
        
      }else if(req.method=="GET")
      {
        // var token = localStorage.getItem('access_token');

        var token = this.localStore.get('access_token' , StorageType.SESSION);
//        var token = this.persistenceServ.get('access_token' , StorageType.SESSION);
        // var params = req.params;
        // console.log('Req:' , req);
        // console.log('Req Params:' , params);
        // // param.append('token' , token)
        var newReq = req.clone({
          setParams : {
            token : token
          }
        });
          

        // });
        // console.log('newReq:',newReq);
        console.log('NewReq:',newReq);
        return next.handle(newReq);
        
      }
    console.log('Inside Http Interceptor:',req.method);
  }
}