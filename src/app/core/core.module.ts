import { CommonModule, TitleCasePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TagInputModule } from 'ngx-chips';
import { SharedModule } from '../shared/shared.module';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

import { AuthGuard, NoAuthGuard, RoleGuard } from './helpers/guards';
import { ErrorInterceptor, JwtInterceptor } from './helpers/interceptors';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiService } from './services/api.service';
import { CosnService } from './services/cosn.service';

@NgModule({
  entryComponents: [
  ],
  declarations: [
    PageNotFoundComponent,
    AccessDeniedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TagInputModule,
    HttpClientModule
  ],
  exports: [
    PageNotFoundComponent,
    AccessDeniedComponent,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    NoAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ApiService,
    CosnService
  ]
})
export class CoreModule { }
