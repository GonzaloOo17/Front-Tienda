import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnunciosComponent } from './list-anuncios.component';

describe('ListAnunciosComponent', () => {
  let component: ListAnunciosComponent;
  let fixture: ComponentFixture<ListAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
