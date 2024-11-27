import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormsModule, Validators, FormBuilder} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LivroService } from '../../services/livro.service';
import { postLivros } from '../../models/postLivros';
import { MatButtonModule } from '@angular/material/button';
import { catchError } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, MatFormFieldModule,MatButtonModule,MatInputModule,MatGridListModule,NgbAlertModule ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  public checkoutForm : any
  private _livroService :  LivroService;
  public message : string = "";
  public alert : boolean = false;

  constructor( httpclient : HttpClient, private fb: FormBuilder) {
    this._livroService = new LivroService(httpclient);
  }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      autor: ['', Validators.required],
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      paginas: ['', Validators.required]
    });
  }



  onSubmit(){
      this._livroService.postLivros(new postLivros(
        this.checkoutForm.get('titulo').value,
        this.checkoutForm.get('genero').value,
        this.checkoutForm.get('paginas').value,
        this.checkoutForm.get('autor').value,
      )).subscribe(data => {
        if (data.id != null){
          this.message = "Cadastro feito com Sucesso";
        }
       });
    }
}
