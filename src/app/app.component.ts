import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllsesrvicesService } from './services/allsesrvices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  abc:any=[]
  item:any
  constructor(private http:AllsesrvicesService) {
    // this.getallpost();
  }

  // getallpost(){
  //   this.http.get('posts').subscribe((result)=>
  //   {
  //     console.log(result);
  //     this.abc = result;
  //   })
  // }
  // removed(id:any){
  //     console.warn(id);
  //     this.http.deleteapi('posts/',id).subscribe((result)=>{
  //       this.getallpost();
  //       console.log(result);
  //     })
  // }
}
