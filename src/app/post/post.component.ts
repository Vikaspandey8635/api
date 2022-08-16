import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllsesrvicesService } from '../services/allsesrvices.service';
import { ToastrService } from 'ngx-toastr';
// import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  allpost: any;
  userID: any;
  title: any;
  id: any;
  body: any;
  constructor( private toastrService: ToastrService ,private abc: AllsesrvicesService ) { }

  ngOnInit(): void {
  }

  submit(){

    var body={
      id: this.id,
      userId: this.userID,
      title: this.title,
      body: this.body
    }
    console.log(body);
    this.abc.allpost('posts',body).subscribe((result:any)=>{
      console.log(result);
      this.toastrService.success('yours data is send successfully', 'post Success');
    })
    
  }

}
