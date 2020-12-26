import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from './components/login/login.component';
import { AuuthGuardService } from "./components/auuth-guard.service";

const routes: Routes = [
  { path: 'pedidos', component: HomeComponent, canActivate: [AuuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
