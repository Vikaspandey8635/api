import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddputComponent } from './addput/addput.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddputComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    ReactiveFormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
