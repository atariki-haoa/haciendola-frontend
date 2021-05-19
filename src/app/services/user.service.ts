import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from '../models/user';
import { DataManagment } from './data-managment.service';
import { Subject } from 'rxjs';
const apiUrl = 'http://localhost:3977/api';

@Injectable({ providedIn: 'root' })
export class UserService {
  private subject = new Subject<any>();
  constructor(private dataManagment: DataManagment) { }

  register(user: IUser) {
    this.dataManagment.post(user, '', 'users').subscribe(
      response => {
          this.subject.next(response);
      },
      error => {
          const errorMessage = <any>error;
          if (errorMessage) {
              this.subject.next([]);
          }
      }
  );
  return this.subject.asObservable();
  }
}
