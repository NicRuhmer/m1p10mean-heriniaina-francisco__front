import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
//import { LoadingController,ToastController } from '@angular/';
@Injectable({
    providedIn: 'root'
})
export class ServiceService {

    user: any;
    tab: any;

    constructor(public http: HttpClient, public router: Router, public activatedRoute: ActivatedRoute) { }

    toGetData(base_path: string) {
        return this.http.get(base_path);
    }

    operateur_path = 'https://localhost:3000';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    /*getOperateur(){
      return this.http.get(this.operateur_path);
    }*/
    deconnecte() {
        localStorage.Clear();
        this.router.navigateByUrl('/index');
    }

}
