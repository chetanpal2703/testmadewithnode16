import { RouterModule, Routes, } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes:Routes=[
  {path:'home',component:AppComponent},
  {path:'firstcomponent',component:FirstComponent},
  {path:'secondcomponent',component:SecondComponent},
  {path:'firstcomponent/course/:id',component:PagenotfoundComponent},
  {path:'**',component:PagenotfoundComponent}
  // {path:'**',Component:PagenotfoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
