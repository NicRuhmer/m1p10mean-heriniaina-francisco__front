import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-avancement',
  templateUrl: './avancement.component.html',
  styleUrls: ['./avancement.component.scss']
})
export class AvancementComponent implements OnInit{
  data: any;
  id: any;
  constructor(private http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id') != null) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id')
      this.avancement(this.id)
    }
  }
  avancement(id: any) {
    // alert(id)
    this.http.get("http://localhost:3000/api/etat-avancement/"+id+"/reparation-client").subscribe((result: any) => {
      this.data = result;
      console.log(this.data.progress);
      
      
      // alert(JSON.stringify(this.data))
    })
  }
  formatDate(dateFormat: any) {
    return moment(dateFormat).format("DD/MM/YYYY")
  }
  deconecte() {
    localStorage.removeItem('id');
    this.router.navigateByUrl('/home');
  }
}
