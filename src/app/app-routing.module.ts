import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddputComponent } from './addput/addput.component';
import { PostComponent } from './post/post.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    component:ListComponent,
    path:'list'
  },
  {
    component:PostComponent,
    path:'post'
  },
  {
    component:AddputComponent,
    path:'addput/:id'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
