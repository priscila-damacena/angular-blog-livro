import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeslogadoComponent } from './deslogado.component';

describe('DeslogadoComponent', () => {
  let component: DeslogadoComponent;
  let fixture: ComponentFixture<DeslogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeslogadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeslogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
