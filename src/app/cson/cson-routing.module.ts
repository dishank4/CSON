import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsonComponent } from './cson.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'steps',
    pathMatch: 'full'
  },
  {
    path: 'steps',
    component: CsonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsonRoutingModule { }
