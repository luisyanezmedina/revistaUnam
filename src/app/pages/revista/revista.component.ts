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

  emailInput: RegExp;
  revistaId: any;
  appear: boolean = false;

  regularExpr: RegExp;
  error: string = '';

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

  sendmail(email:string) {


    if (this.regExpr(email)) {
      //console.log('seenviarmeial');
      this.network.sendEmail(email)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.appear = true;
        }, err => {
          console.log(err);
        }
      );
    }else {
      this.error = "Favor de escribir un email válido";
    }
  
    
  


  }

  regExpr(expresion: string) {

    this.regularExpr = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return this.regularExpr.test(expresion);
  }
  
}//class
