import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsonComponent } from './cson.component';

describe('CsonComponent', () => {
  let component: CsonComponent;
  let fixture: ComponentFixture<CsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
