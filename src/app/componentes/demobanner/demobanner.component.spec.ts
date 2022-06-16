import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemobannerComponent } from './demobanner.component';

describe('DemobannerComponent', () => {
  let component: DemobannerComponent;
  let fixture: ComponentFixture<DemobannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemobannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
