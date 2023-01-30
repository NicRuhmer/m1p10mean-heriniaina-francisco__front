import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent {

  voiture:any="";
  listeVoitures:any;
  historiques:any;
   error: any;
   path_login = 'http://localhost:3000';
 
   constructor(public http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) {
 
   }
 
   ngOnInit() {
     this.listVoiture();
     
   }
 
 
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   };
 
 
  listVoiture(){
   this.http.get("http://localhost:3000/api/list/"+localStorage.getItem("id")+"/voiture").subscribe((result: any) => {
    
       if(result.status==400){
         alert(JSON.stringify(result.message));
          } else {
         
           this.listeVoitures = result.data;
          
          }
       });
  }
 
  filter_historiques(){
    this.http.get("http://localhost:3000/api/historique/"+this.voiture+"/reparation-client").subscribe((result: any) => {
    
    if(result.status==400){
      alert(JSON.stringify(result.message));
       } else {
     
        this.historiques = result;
       
       }
    });
  }
  
 
}
