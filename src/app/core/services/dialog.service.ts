import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  componentRef: ComponentRef<any>;
  factory: ComponentFactory<any>;
  rootViewContainer: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  // Set root view container reference to create component dynamically, Call this method into constructor where it is used
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  // Component loader, return the dialog output as well
  dialogObjRef(component: Type<any>, data?: any): DialogRef {
    const dialogRef = new DialogRef();
    this.factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.rootViewContainer.createComponent(this.factory);
    this.componentRef.instance.inputValue = data;

    dialogRef.componentRef = this.componentRef;
    return dialogRef;
  }

  destroyComponent(component: DialogRef) {
    console.log('in destroyComponent');
    component.componentRef.destroy();
  }
}

export class DialogRef {
  componentRef: any;
}
