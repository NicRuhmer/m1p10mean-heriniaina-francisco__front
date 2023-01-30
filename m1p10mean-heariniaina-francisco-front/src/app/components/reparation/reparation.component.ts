import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export class ReparationComponent implements OnInit {
  data: any;
  path_login = "/api/list/:id/reparation-client-attente";

  constructor(private http: HttpClient,public activatedRoute: ActivatedRoute,public router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('id')!=null){
      alert(localStorage.getItem('id'));
      this.voitureDeposes(localStorage.getItem('id'));
    }
  }
  voitureDeposes(id:any){
    this.http.get("http://localhost:3000/api/list/"+id+"/reparation-client-attente").subscribe((result:any)=>{
      this.data=JSON.stringify(result);
      alert(this.data)
  })
}

  deconecte(){
    localStorage.removeItem('id');
    this.router.navigateByUrl('/home');

}
}

