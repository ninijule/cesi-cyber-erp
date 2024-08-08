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

    return next.handle(authReq).pipe(
      catchError(err => {
        if (err) {
          const defaultMessage = "An error occurred.";
          const message = err.error ? err.error : defaultMessage;
          const duration = 2000;

          switch (err.status) {
            case 403:
              this.snackBar.open(message || "You need more permissions.", "Dismiss", { duration });
              this.router.navigate([token ? '/car' : '/auth/login']).then();
              break;

            case 401:
              this.snackBar.open(message || "You are not allowed to see this page.", "Dismiss", { duration });
              if (message === 'JWT expired' || message === 'Unauthorized') {
                this.router.navigate(['/auth/login']).then();
              }
              break;

            default:
              this.snackBar.open(err.error?.result || defaultMessage, "Dismiss", { duration });
              break;
          }
        }
        return throwError(() => err);
      })
    );
  }
}
