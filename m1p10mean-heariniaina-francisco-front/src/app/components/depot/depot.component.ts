import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

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


  listVoiture() {
   
    this.http.get("http://localhost:3000/api/list/" + localStorage.getItem("id") + "/voiture").subscribe((result: any) => {

      if (result.status == 400) {
        alert(JSON.stringify(result.message));
      } else {
        this.listeVoitures = result.data;
      }
    });
  }


  listVoitureDeposer() {
    this.http.get("http://localhost:3000/api/list/" + localStorage.getItem("id") + "/reparation-client-attente").subscribe((result: any) => {
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
      this.http.post("http://localhost:3000/api/create/" + localStorage.getItem("id") + "/reparation", form, this.httpOptions).subscribe((result: any) => {
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


  deconnecte() {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    this.router.navigateByUrl('/login');
  }

}
