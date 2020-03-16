import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendasCategoriaComponent } from './tiendas-categoria.component';

describe('TiendasCategoriaComponent', () => {
  let component: TiendasCategoriaComponent;
  let fixture: ComponentFixture<TiendasCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendasCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendasCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
