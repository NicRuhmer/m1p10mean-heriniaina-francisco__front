import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  data: any;
  name: any = '';
  cin: any = '';
  username: any = '';
  contact: any = '';
  adresse: any = '';
  email: any = '';
  new_password: any = '';
  confirm_password: any = '';
  error: any;
  path_login = 'http://localhost:3000';

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) {

  }

  ngOnInit() {
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };



  register() {
    const form = {
      name: this.name,
      username: this.username,
      cin: this.cin,
      contact: this.contact,
      adresse: this.adresse,
      email: this.email,
      new_password: this.new_password,
      confirm_password: this.confirm_password
    };

    if (this.cin != "" || this.name != "" || this.contact != "" || this.adresse != "" && this.email != "" && this.new_password != "" && this.confirm_password != "") {
      if (this.new_password == this.confirm_password) {
        this.http.post("http://51.178.17.54:3001/api/client.create", form, this.httpOptions).subscribe((result: any) => {
        if (result.status == 200) {
            localStorage.setItem("id",result.data._id);
            localStorage.setItem("name",result.data.name+" "+result.data.username);
            this.router.navigateByUrl('/dashboard');
          } else {
            this.error = result.message;
          }
        });
      } else {
        this.error = "Mot de passe invalide !";
      }
    } else {
      this.error = "Champ invalide !";
    }
  }

 

}
