import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent {

  voiture: any = "";
  description: any = "";
  listeVoitures: any;
  listeDeposer: any;
  error: any;
  data: any;
  path_login = 'http://localhost:3000';

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
  
    if (localStorage.getItem("id") != null) {
      this.listVoiture();
    this.listVoitureDeposer();
    } else {
      this.deconnecte();
    }
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  formatDate(dateFormat: any) {
    return moment(dateFormat).format("DD/MM/YYYY")
  }

  listVoiture() {
   
    this.http.get("http://51.178.17.54:3001/api/list/" + localStorage.getItem("id") + "/voiture").subscribe((result: any) => {

      if (result.status == 400) {
        alert(JSON.stringify(result.message));
      } else {
        this.listeVoitures = result.data;
      }
    });
  }


  listVoitureDeposer() {
    this.http.get("http://51.178.17.54:3001/api/list/" + localStorage.getItem("id") + "/reparation-client-attente").subscribe((result: any) => {
      if (result.status == 400) {
        alert(JSON.stringify(result.message));
      } else {
        this.listeDeposer = result;
      }
    });
  }

  register() {
    const form = {
      voiture: this.voiture,
      description: this.description
    };

    if (form.voiture != "" ) {
      this.http.post("http://51.178.17.54:3001/api/create/" + localStorage.getItem("id") + "/reparation", form, this.httpOptions).subscribe((result: any) => {
      if (result.status == 200) {
        this.error = result.message;
        } else {
          this.listeDeposer = result;
        }
      });
    } else {
      this.error = "Champ invalide !";
    }
  }
  delete(id: any) {
    alert(id);
    this.http.delete("http://51.178.17.54:3001/api/delete/"+id+"/reparation").subscribe((result: any) => {
      this.data = result;
      this.listVoitureDeposer();
    })
  }

  deconnecte() {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    this.router.navigateByUrl('/login');
  }

}
