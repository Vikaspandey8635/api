import { Component, OnInit } from '@angular/core';
import { AllsesrvicesService } from '../services/allsesrvices.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  abc:any=[]
  item:any
  constructor(private toastrService: ToastrService, private http:AllsesrvicesService) {
    this.getallpost();

   }

   getallpost(){
    this.http.get('posts').subscribe((result:any)=>
    {
      console.log(result);
      this.abc = result;
    })
  }
  removed(id:any){
      console.warn(id);
      this.http.deleteapi('posts/',id).subscribe((result:any)=>{
        this.getallpost();
        console.log(result);
        this.toastrService.success('yours data is successfully removed', 'removed Success');
      })
  }

  ngOnInit(): void {
  }

}
