import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.css']
})
export class RevistaComponent implements OnInit {

  revistaId: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.revistaId = this.route.snapshot.paramMap.get('id');
  }

}
