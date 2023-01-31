import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  

  
  testform:any={
    name: "",
      username: "",
      cin: "",
      contact: "",
      adresse: "",
      email: ""
  };

  detail: any;
 /* name: any = '';
  cin: any = '';
  username: any = '';
  contact: any = '';
  adresse: any = '';
  email: any = '';*/
  error: any;
  path_login = 'http://localhost:3000';

  constructor(public fb: FormBuilder,public http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) {

  }


  ngOnInit() {
    if(localStorage.getItem("id")!=null){
      this.profile();
    this.testform = this.fb.group({
      id: [''],
      first_name: [''],
      last_name: [''],
      phone: ['']
    });
    } else {
      this.deconnecte();
    }
   }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


 profile(){

  this.http.get("http://51.178.17.54:3001/api/client/"+localStorage.getItem("id")).subscribe((result: any) => {
   
      if(result.status==400){
        alert(JSON.stringify(result.message));
         } else {
          this.detail = result;
          /*this.testform.patchValue({
            name: result.name,
            cin: result.cin,
            username: result.username,
            contact: result.contact,
            adresse: result.adresse,
            email: result.email,
            id: result._id,
      
          });*/
      
      
         }
      });
 }

  setting() {
   
    alert(JSON.stringify(this.testform));

   /* 
    const form = {
      name: testform.value.name,
      username: testform.value.username,
      cin: testform.value.cin,
      contact: testform.value.contact,
      adresse: testform.value.adresse,
      email: testform.value.email
    };

   if (form.cin != "" || form.name != "" || form.contact != "" || form.adresse != "" && form.email != "") {
        this.http.post("http://51.178.17.54:3001/api/client.update/"+localStorage.getItem("id"), form, this.httpOptions).subscribe((result: any) => {
      alert(JSON.stringify(result));

        if (result.status == 200) {
          this.detail = result.data;
          } else {
            this.error = result.message;
          }
        });
     
    } else {
      this.error = "Champ invalide !";
    }*/
  }
  deconnecte(){
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    this.router.navigateByUrl('/login');
  }
 

}
