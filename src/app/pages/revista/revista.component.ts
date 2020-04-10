import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NetworkService } from '../../services/network.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.css']
})
export class RevistaComponent implements OnInit {

  revistaId: any;
  appear: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private network: NetworkService
  ) { 

    if (this.network.currentUserValue) {
      this.appear = true;
      // console.log('Ya hay sesion');
    }
  }

  ngOnInit(): void {

    this.revistaId = this.route.snapshot.paramMap.get('id');
  }

  sendmail() {
    this.network.sendEmail('yo.com')
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }
  
}
