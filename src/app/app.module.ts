import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoutingModule } from './routing.module';
import { PercentagePipes } from './Pipes/percentage.pipes';
// const routes:Routes=[
//   // {path:'home',component:AppComponent},
//   {path:'firstcomponent',component:FirstComponent},
//   {path:'secondcomponent',component:SecondComponent},
//   {path:'firstcomponent',children:[
//     {path:'course/:id',component:PagenotfoundComponent}
//   ]},
//   // {path:'firstcomponent/course/:id',component:PagenotfoundComponent},
//   {path:'**',component:PagenotfoundComponent}
//   // {path:'**',Component:PagenotfoundComponent}
// ]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PagenotfoundComponent,
    PercentagePipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule   //define the class we are importing from routing.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
