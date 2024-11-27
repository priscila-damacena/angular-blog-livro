import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, MatFormFieldModule,MatButtonModule,MatInputModule,MatGridListModule,NgbAlertModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit  {
  public checkoutForm : any
  private _livroService :  LivroService;
  public message : string = "";
  public alert : boolean = false;

  constructor( httpclient : HttpClient, private fb: FormBuilder) {
    this._livroService = new LivroService(httpclient);
  }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }



  onSubmit(){
    debugger;
    this._livroService.getLogin(
      this.checkoutForm.get('cpf').value
    ).subscribe(data =>{
      if(data.senha == this.checkoutForm.get('senha').value){
        this.message = "Login efetuado"
        localStorage.setItem('UsuarioId', data.id);
      }else{
        this.message = "email ou senha incorretos"

      }
    })
  }
}
