import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


// import { FCM } from '@ionic-native/fcm/ngx';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  getSoldeClient(idNumero: string) {
    throw new Error('Method not implemented.');
  }
    user:any;
   tab:any;
  constructor(public http: HttpClient,private apiService: ApiService, public router: Router) { }




 /*
  showLoading() {  
   this.loadingCtrl.create({ message: 'Loading.....'  }).then((loading) => {   
       loading.present();{
     } 
      setTimeout(() => {   
        loading.dismiss();  
      }, 5000 );   
     });  
   }  */

URL = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  loginClient(imput:any){
  
    return this.http.post(this.URL+"/api/login.user",imput,this.httpOptions);
  }
  
  /*
   getMyOffreAppel(path_,id_num:string){
    return this.http.get(this.URL+"");
  }
*/

}
