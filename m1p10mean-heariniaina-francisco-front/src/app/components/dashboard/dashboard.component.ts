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
  listeVoitures:any;
  date = new Date().getFullYear();
  data: any;
  path_login = "/api/list/:id/reparation-client-attente";
  constructor(private http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) { }


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

  ngOnInit() {
    // this.deconnecte();
    if(localStorage.getItem("id")!=null){
      this.listeVoiture(localStorage.getItem("id"));
    }
  }


  listeVoiture(clien_id:any) {
      this.http.get("http://localhost:3000/api/list/"+clien_id+"/voiture").subscribe((result: any) => {
          
      if(result.status==400){
       
         } else {
          this.listeVoitures = result.data;
         }
      });
    }

    deconnecte(){
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      this.router.navigateByUrl('/login');
    }
}

