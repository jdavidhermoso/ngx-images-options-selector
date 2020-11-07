import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImagesOptionsSelectorComponent } from './ngx-images-options-selector.component';

describe('NgxImagesOptionsSelectorComponent', () => {
  let component: NgxImagesOptionsSelectorComponent;
  let fixture: ComponentFixture<NgxImagesOptionsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImagesOptionsSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImagesOptionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
