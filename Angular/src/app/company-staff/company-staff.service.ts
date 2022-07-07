import { Injectable } from '@angular/core';
import {Observable, Subject, throwError} from 'rxjs';
import { StaffInterface} from './staff.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class CompanyStaffService {
  private url = 'api/products/';
  public staffInfo = new Subject<Array<StaffInterface>>();
  public filterStaffInfo = new Subject<any>();
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient
  ) {
  }

  getStaff(): void {
    this.http.get<Array<StaffInterface>>(this.url)
      .subscribe((resp: StaffInterface[]) => {
        this.staffInfo.next(resp);
      });
  }

  addStaff(payload: StaffInterface): Observable<any> {
    return this.http.post<StaffInterface>(this.url, payload).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }));
  }

  editStaff(payload): Observable<any> {
    return this.http.put(this.url + payload.id, payload).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }));
  }

  deleteStaff(payload): Observable<any> {
    return this.http.delete(this.url + payload).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }));
  }

  filterStaff(payload): void {
    return this.filterStaffInfo.next(payload);
  }
}
