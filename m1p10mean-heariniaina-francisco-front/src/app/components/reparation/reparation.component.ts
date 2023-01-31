import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export class ReparationComponent implements OnInit {
  data: any;
  reparation: any;
  succes: any;

  constructor(private http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id') != null) {
      // alert(localStorage.getItem('id'));
      this.voitureDeposes(localStorage.getItem('id'));
      this.voitureEnReparation(localStorage.getItem('id'));
    }
  }
  voitureDeposes(id: any) {
    this.http.get("http://localhost:3000/api/list/" + id + "/reparation-client-attente").subscribe((result: any) => {
      this.data = result;
      // alert(JSON.stringify(this.data))
    })
  }
  voitureEnReparation(id: any) {
    this.http.get("http://localhost:3000/api/list/" + id + "/reparation-client-accepter").subscribe((result: any) => {
      this.reparation = result;
      // alert(this.reparation)
    })
  }
  formatDate(dateFormat: any) {
    return moment(dateFormat).format("DD/MM/YYYY")
  }
  deconecte() {
    localStorage.removeItem('id');
    this.router.navigateByUrl('/home');
  }
  delete(id: any) {
    
    this.http.delete("http://localhost:3000/api/delete/"+id+"/reparation").subscribe((result: any) => {
      this.data = result;
      this.voitureDeposes(id);
    })
  }
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  // avancement(id: any) {
  //   // alert(id)
  //   this.http.get("http://localhost:3000/api/etat-avancement/"+id+"/reparation-client").subscribe((result: any) => {
  //     this.data = result;
  //     this.router.navigateByUrl('/avancement');
  //     // alert(JSON.stringify(this.data))
  //   })
  // }
}

