import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3UComponent } from './m3-u.component';

describe('M3UComponent', () => {
  let component: M3UComponent;
  let fixture: ComponentFixture<M3UComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M3UComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(M3UComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
