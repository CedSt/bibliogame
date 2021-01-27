import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuModifComponent } from './jeu-modif.component';

describe('JeuModifComponent', () => {
  let component: JeuModifComponent;
  let fixture: ComponentFixture<JeuModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
