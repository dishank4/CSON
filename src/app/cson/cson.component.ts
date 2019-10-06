import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { CosnService } from '../core/services/cosn.service';
import { take } from 'rxjs/operators';
import { stepsKey } from 'src/config';
import { GeneralInfoComponent } from './steps/general-info/general-info.component';
import { DialogService } from '../core/services/dialog.service';
import { IntegrationComponent } from './steps/integration/integration.component';

@Component({
  selector: 'app-cson',
  templateUrl: './cson.component.html',
  styleUrls: ['./cson.component.scss']
})
export class CsonComponent implements OnInit {

  stepData : any;
  defaultSectionKey='generalInfo';
  componentRef: ComponentRef<any>;
  factory: ComponentFactory<any>;
  @ViewChild('stepsProcess', { read: ViewContainerRef }) container;
  constructor(
    private csonService: CosnService,
    private factoryResolver: ComponentFactoryResolver,
    private dialogService: DialogService,
    public viewContainerRef: ViewContainerRef,
    ) { 
      this.dialogService.setRootViewContainerRef(viewContainerRef);
    this.csonService.getBaseData().pipe(take(1)).subscribe((data)=>{
      this.stepData = data.sections;
      this.loadStep(this.defaultSectionKey);
    });
    console.log(this.stepData);
  }

  ngOnInit() {
  }

  loadStep(sectionKey:any , $event?: any) {
    if ($event) {
      if ($event.target.className) {
        const className: string = $event.target.className;
        if (className.includes('active')) {
          return false;
        }
      }
    }
    

    // Clear Container
    this.container.clear();


    if (this.stepData) {      
      let currentStepData = this.stepData[sectionKey];
      //TODO : improve code quality 

      switch(currentStepData['id']){
        case stepsKey.generalInfo:
            this.factory = this.factoryResolver.resolveComponentFactory(GeneralInfoComponent);
            break;
        case stepsKey.integration:
            this.factory = this.factoryResolver.resolveComponentFactory(IntegrationComponent);
            break;
              
      }
      this.componentRef = this.container.createComponent(this.factory);
      this.componentRef.instance.stepData = currentStepData;

      // this.componentRef.instance.dataObject.subscribe(data => {
      //   console.log(data);
      // });
    }
  }

  
}
