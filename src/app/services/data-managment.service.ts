import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class DataManagment {

    public url: string;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }
    constructHeader(token) {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token,
        });
    }

    post(obj, token, section) {
        const params = JSON.stringify(obj);
        const options = {
            headers: this.constructHeader(token),
        };
        return this._http.post(`${this.url}/${section}/new`, params, options);
    }
    get(token, section) {
        const options = {
            headers: this.constructHeader(token),
        };
        return this._http.get(`${this.url}/${section}`, options);

    }

    getAll(token, section) {
        const options = {
            headers: this.constructHeader(token),
        };
        return this._http.get<any[]>(`${this.url}/${section}`, options);
    }

    put(obj, token, section) {
        const options = {
            headers: this.constructHeader(token),
        };
        return this._http.put(`${this.url}/${section}/${obj.id}`, obj, options);
    }

    delete(obj, token, section) {
        const options = {
            headers: this.constructHeader(token),
        };
        return this._http.delete(`${this.url}/${section}/${obj.id}`, options);

    }
}
