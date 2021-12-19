import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class StatusInterseptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
    .pipe(
       tap({
            next: (data) => ({
                status: "success",
                data: data
            }),
            error: (error) => ({
                status: "fail",
                data: error
            })
       })
    )
  }
}



// catchError(err => (
//     { 
//     status: "success",
//     data: err }))

// map(data => (
//     { 
//     status: "success",
//     data: data 
//     }))