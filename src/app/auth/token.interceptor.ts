
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest,HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse  } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from "rxjs/operators";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
 
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    @BlockUI() blockUI: NgBlockUI;
  constructor(
    private _router: Router
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    this.blockUI.start();
    request = request.clone({
        setHeaders: {
            Authorization: `Bearer testToken`
        }
    });
    return next.handle(request).pipe(
        tap(evt => {
            setTimeout(() => {
                this.blockUI.stop();    
            }, 5000);
            
            if (evt instanceof HttpResponse) {
            }
        }),
        catchError((err: any) => {
            this.blockUI.stop();
            if(err instanceof HttpErrorResponse) {
                if (err.status === 500) {
                    // return to error page
                }
            }
            return of(err);
        }));
    
  }
}