import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTiendasComponent } from './list-tiendas.component';

describe('ListTiendasComponent', () => {
  let component: ListTiendasComponent;
  let fixture: ComponentFixture<ListTiendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTiendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
