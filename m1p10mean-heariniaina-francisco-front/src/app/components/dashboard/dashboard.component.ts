import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listeVoitures:any;
  date = new Date().getFullYear();
  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) {

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
          alert(JSON.stringify("ok"));
         }
      });
    }

    deconnecte(){
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      this.router.navigateByUrl('/login');
    }
}

