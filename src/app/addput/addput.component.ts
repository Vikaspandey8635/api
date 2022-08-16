import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllsesrvicesService } from '../services/allsesrvices.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms'; 


@Component({
  selector: 'app-addput',
  templateUrl: './addput.component.html',
  styleUrls: ['./addput.component.css']
})
export class AddputComponent implements OnInit {

  
  updatelist: FormGroup;
  // allpost: any;
  // userID: any;
  // title: any;
  // id: any;
  // body: any;

  constructor( private router:ActivatedRoute ,private toastrService: ToastrService ,private abc: AllsesrvicesService) {
    
    this.updatelist = new FormGroup({
      userId: new FormControl(''),
      title: new FormControl(''),
      id: new FormControl(''),
      body: new FormControl('')
    })
   }

  ngOnInit(): void {

    console.warn(this.router.snapshot.params['id'])
    this.abc.get('posts/'+this.router.snapshot.params['id']).subscribe((result)=>{
 
    this.updatelist.patchValue(result);
    })
  }

  updatedata(){ 
    console.warn("item",this.updatelist.value);
    this.abc.update('posts/',this.router.snapshot.params['id'],this.updatelist.value).subscribe((result)=>{
     console.warn(result);
     this.toastrService.success('yours data is successfully update', 'updated Success');
    })
  }

}
