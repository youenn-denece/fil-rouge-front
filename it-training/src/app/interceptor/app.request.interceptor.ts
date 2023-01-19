import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import { Student } from '../model/student.model';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  student = new Student();
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();
    console.log(sessionStorage.getItem('userdetails'));
    if(sessionStorage.getItem('userdetails')){
      this.student = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if(this.student && this.student.password && this.student.email){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.student.email + ':' + this.student.password));
      console.log(this.student);
    }else { 
        let authorization = sessionStorage.getItem('Authorization');
        if(authorization){
          httpHeaders = httpHeaders.append('Authorization', authorization); 
          console.log(httpHeaders);
        }
    }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
  return next.handle(xhr).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
            console.log('coucou');
          if (err.status !== 401) {
            console.log('je suis une erreur');
            return;
          }
          this.router.navigate(['home']);
        }
      }));
  }
}
