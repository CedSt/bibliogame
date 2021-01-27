import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuNewComponent } from './jeu-new.component';

describe('JeuNewComponent', () => {
  let component: JeuNewComponent;
  let fixture: ComponentFixture<JeuNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
