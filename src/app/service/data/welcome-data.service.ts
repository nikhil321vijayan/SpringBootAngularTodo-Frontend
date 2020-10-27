import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

export class HelloWorldBean {
    constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('//localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldServiceWithPathVariable(name) {

    console.log("reached executeHelloWorldServiceWithPathVariable()")
     let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
     let headers = new HttpHeaders ({
       Authorization: basicAuthHeaderString
     })
    return this.http.get<HelloWorldBean>
      (`http://localhost:8080/hello-world/path-variable/${name}`,
      {headers});
    //console.log("Execute Hello World Bean Service")
  }

   createBasicAuthenticationHttpHeader() {
     let username = 'nikhil';
     let password = 'password';
     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

     return basicAuthHeaderString;
   }

}
