import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  name: any = "";

  collapseShow = false;
  constructor(private http: HttpClient,public activatedRoute: ActivatedRoute,public router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("id")!=null){
      this.name=localStorage.getItem("name");
    }
  }
  toggleCollapseShow() {
    this.collapseShow = !this.collapseShow;
  }
  deconnecte() {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    this.router.navigateByUrl('/login');
  }
}
