import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './core/access-denied/access-denied.component';
import { AuthGuard } from './core/helpers/guards';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CsonComponent } from './cson/cson.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cson',
    pathMatch: 'full'
  },
  {
    path: 'cson',
    loadChildren: './cson/cson.module#CsonModule'
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
