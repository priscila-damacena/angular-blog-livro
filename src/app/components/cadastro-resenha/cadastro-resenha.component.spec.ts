import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResenhaComponent } from './cadastro-resenha.component';

describe('CadastroResenhaComponent', () => {
  let component: CadastroResenhaComponent;
  let fixture: ComponentFixture<CadastroResenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroResenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroResenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
