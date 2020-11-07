import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NgxImagesOptionsSelectorModule} from '../../projects/ngx-images-options-selector/src/lib/ngx-images-options-selector.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [NgxImagesOptionsSelectorModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ImagesOptionsSelector'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ImagesOptionsSelector');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ImagesOptionsSelector app is running!');
  });
});
