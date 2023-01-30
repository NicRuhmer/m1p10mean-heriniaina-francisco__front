import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'moment';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  date = new Date().getFullYear();
  data: any;
  path_login = "/api/list/:id/reparation-client-attente";
  constructor(private http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id') != null) {
      // alert(localStorage.getItem('id'));
      this.voitureDeposes(localStorage.getItem('id'));
    }
  }
  voitureDeposes(id: any) {
    this.http.get("http://localhost:3000/api/list/" + id + "/reparation-client-accepter").subscribe((result: any) => {
      this.data = result;
      alert(this.data)
      console.log(this.data.data);
    })
  }
  formatDate(dateFormat:any){
    return moment(dateFormat).format("DD/MM/YYYY")
  }
  deconecte() {
    localStorage.removeItem('id');
    this.router.navigateByUrl('/home');
  }

}

