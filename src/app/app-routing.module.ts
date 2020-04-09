import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RevistaComponent } from './pages/revista/revista.component';


const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,

  },
  { path: 'revista/:id', component: RevistaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
