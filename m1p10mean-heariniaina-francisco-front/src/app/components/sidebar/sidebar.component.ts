import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  collapseShow = false;
  constructor(private http: HttpClient,public activatedRoute: ActivatedRoute,public router:Router) { }

  ngOnInit() {

  }
  toggleCollapseShow() {
    this.collapseShow = !this.collapseShow;
  }
  deconecte(){
    localStorage.removeItem('id');
    this.router.navigateByUrl('/home');

}
}
