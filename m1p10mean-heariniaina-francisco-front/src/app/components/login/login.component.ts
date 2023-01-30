import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

// import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: any;
  username: any = '';
  password: any = '';
  error: any;
  path_login = "http://localhost:3000/api/login.user";

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigateByUrl('dashboard');

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  login() {
    const form = {
      username: this.username,
      password: this.password
    };

    if (this.username == null || this.username == "" || this.password == null || this.password == "") {
      this.error = "Champ invalid";
    } else {
      this.error = null;

      this.http.post("http://localhost:3000/api/login.user", form, this.httpOptions).subscribe((result: any) => {
        if (result.status == 200) {
          localStorage.setItem("id", result.data._id);
          localStorage.setItem("name", result.data.name + " " + result.data.username);
          this.router.navigateByUrl('/dashboard');
        } else {
          this.error = result.message;
        }

      });

    }
  }

  deconnecte() {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    this.router.navigateByUrl('/login');
  }


}
