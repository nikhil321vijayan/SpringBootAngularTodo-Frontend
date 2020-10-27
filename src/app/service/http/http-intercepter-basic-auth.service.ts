import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/*
This class intercepts any request and adds a request header with the authentication details.
This acts as a helper class to avoid the same code being repeated in all the
Service classes
*/
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  //This method intercepts any request from the angular application
  //and adds a request header with the username and password.
  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username = 'nikhil';
    let password = 'password';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    })

    return next.handle(request);
  }
}
