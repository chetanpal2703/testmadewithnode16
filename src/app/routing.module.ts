import { RouterModule, Routes, } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes:Routes=[
    // {path:'home',component:AppComponent},
    {path:'firstcomponent',component:FirstComponent},
    {path:'secondcomponent',component:SecondComponent},
    {path:'firstcomponent',children:[
      {path:'course/:id',component:PagenotfoundComponent}
    ]},
    // {path:'firstcomponent/course/:id',component:PagenotfoundComponent},
    {path:'**',component:PagenotfoundComponent}
    // {path:'**',Component:PagenotfoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class RoutingModule{}