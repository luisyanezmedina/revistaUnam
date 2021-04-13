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

  revistaSrc:string;

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

    // this.revistaId = this.route.snapshot.paramMap.get('id');
    switch (this.route.snapshot.paramMap.get('id')) {
      case "1":
        this.revistaSrc = "https://luisyanezmedina.github.io/256_prueba.pdf";
        break;
    
      case "2":
        this.revistaSrc = "https://luisyanezmedina.github.io/257_comprimido_2.pdf";
        break;

      case "3":
        this.revistaSrc = "https://luisyanezmedina.github.io/258_mipeiper.pdf";
        break;
      
      case "4":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/259/259_portalnuevo.pdf";
        break;

      case "5":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/260/260_portalnuevo.pdf";
        break;

      case "6":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/261/261_portalnuevo.pdf";
        break;

      case "7":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/262/262_portalnuevo.pdf";
        break;
      
      case "8":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/263/263_portalnuevook.pdf";
        break;

      case "9":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/264/Portada_CVD_264.pdf";
        break;

      case "10":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/265/265_portalnuevo.pdf";
        break;

      case "11":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/266/266_portalnuevo.pdf";
        break;

      case "12":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/267/267_portalnuevo.pdf";
        break;

      case "13":
        this.revistaSrc = "http://revistadigital.comoves.unam.mx/revistas/268/268_portalnuevo.pdf";
        break;
    
      default:
        console.log("default");
    }
  }

  sendmail(email:string) {

//console.log(email);
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
