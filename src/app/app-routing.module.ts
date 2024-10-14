import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { ConsommationComponent } from './consommation/consommation.component';

const routes: Routes = [

{path:'page1',component:Page1Component},
{path:'consomation',component:ConsommationComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
