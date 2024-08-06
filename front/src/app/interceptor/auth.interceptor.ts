import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token');

    // Clone the request and add the authorization header
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(authReq).pipe(catchError(err => {
      if (err) {
        switch (err.status) {
          case 403:
            this.snackBar.open(err.error ? err.error : "You need more permissions.", "Dismiss", {
              duration: 2000,
            });
            void this.router.navigate([ token ? '/car' : '/auth/login']);
            break;
          case 401:
            this.snackBar.open(err.error ? err.error : "You are not allowed to see this page.", "Dismiss", {
              duration: 2000,
            });
            void this.router.navigate([err.error == 'JWT expired' ? '/auth/login' : '/home']);
            break;
          default:
            this.snackBar.open(err.error.result, "Dismiss", {
              duration: 2000,
            });
            break;
        }
      }
      return throwError(() => err);
    }));
  }
}
