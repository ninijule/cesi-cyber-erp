import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      console.log(err.error.result);
      if(err) {
        this.snackBar.open(err.error.result, "Dismiss");
      }
      return throwError(() => err);
    }));
  }
}
