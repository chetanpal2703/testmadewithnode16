import { Component,OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  courseid:any;
  constructor(private activeRoute: ActivatedRoute) {}
  ngOnInit() {
      this.courseid=this.activeRoute.snapshot.params['id'];
      console.log(this.courseid,"courseid")
  }
}
