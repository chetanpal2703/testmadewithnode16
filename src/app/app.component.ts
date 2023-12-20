import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'testmadewithnode16';
  testpipe=0.8817;
  search:any;
  pipeschecking="i am here";
  constructor(private activeRoute:ActivatedRoute){}
  ngOnInit(){
    this.activeRoute.fragment.subscribe((data)=>{
      // console.log(data,"fragment route")
      this.jumpToSection(data)
    })
    // this.search=this.activeRoute.snapshot.queryParams['search'];
    // console.log(this.search,"search");
  }
  jumpToSection(data: string | null) {
    console.log(data,"data")
    if (data) {
      const element = document.getElementById(data);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
