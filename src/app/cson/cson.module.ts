import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsonComponent } from './cson.component';
import { CsonRoutingModule } from './cson-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralInfoComponent } from './steps/general-info/general-info.component';
import { IntegrationComponent } from './steps/integration/integration.component';

@NgModule({
  declarations: [CsonComponent , HeaderComponent ,FooterComponent, GeneralInfoComponent, IntegrationComponent],
  imports: [
    CommonModule,
    CsonRoutingModule
  ]
  ,entryComponents :[
    GeneralInfoComponent,
    IntegrationComponent
  ]
})
export class CsonModule { }
