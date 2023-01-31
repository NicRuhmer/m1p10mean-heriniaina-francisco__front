import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit{
  data: any;
  id: any;
  constructor(private http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id') != null) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id')
      this.facture(this.id)
    }
  }
  facture(id: any) {
    // alert(id)
    this.http.get("http://51.178.17.54:3001/api/detail/"+ id +"/facture-client").subscribe((result: any) => {
      this.data = result;
      console.log(this.data);
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
