import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.scss']
})
export class VoitureComponent {
  name: any = "";
  matricule: any = "";
  carburant: any = "";
  model: any = "";
  nameV: any = "";
  matriculeV: any = "";
  carburantV: any = "";
  modelV: any = "";
  listeVoitures: any;

  error: any;
  path_login = 'http://localhost:3000';


  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
    this.listVoiture();
    if (localStorage.getItem("id") != null) {
    
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
   
    this.http.get("http://51.178.17.54:3001/api/list/" + localStorage.getItem("id") + "/voiture").subscribe((result: any) => {

      if (result.status == 400) {
        alert(JSON.stringify(result.message));
      } else {
        this.listeVoitures = result.data;
      }
    });
  }

  register() {
    const form = {
      name: this.name,
      matricule: this.matricule,
      carburant: this.carburant,
      model: this.model
    };

    if (this.name != "" || this.matricule != "" || this.carburant != "" || this.model != "") {
      this.http.post("http://51.178.17.54:3001/api/create/" + localStorage.getItem("id") + "/voiture", form, this.httpOptions).subscribe((result: any) => {
      if (result.status == 200) {
          this.listeVoitures = result.data;
        } else {
          this.error = result.message;
        }
      });
    } else {
      this.error = "Champ invalide !";
    }
  }

  modifier() {
    const form = {
      name: this.nameV,
      matricule: this.matriculeV,
      carburant: this.carburantV,
      model: this.modelV
    };

    if (this.name != "" || this.matricule != "" || this.carburant != "" || this.model != "") {
      this.http.post("http://51.178.17.54:3001/api/create/" + localStorage.getItem("id") + "/voiture", form, this.httpOptions).subscribe((result: any) => {
      if (result.status == 200) {
          this.listeVoitures = result.data;
        } else {
          this.error = result.message;
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

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

}
