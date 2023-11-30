import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExampleComponent } from './observable-example.component';

describe('ObservableExampleComponent', () => {
  let component: ObservableExampleComponent;
  let fixture: ComponentFixture<ObservableExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableExampleComponent]
    });
    fixture = TestBed.createComponent(ObservableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
