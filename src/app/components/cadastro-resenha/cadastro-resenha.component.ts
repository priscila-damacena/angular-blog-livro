import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormsModule, Validators, FormBuilder} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LivroService } from '../../services/livro.service';
import { postLivros } from '../../models/postLivros';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Livros } from '../../models/Livros';
import {CdkListbox, CdkOption} from '@angular/cdk/listbox';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-cadastro-resenha',
  standalone: true,
  imports: [ReactiveFormsModule,MatSelectModule,FormsModule, MatFormFieldModule,MatButtonModule,MatInputModule,MatGridListModule,NgbAlertModule,CdkListbox, CdkOption],
  templateUrl: './cadastro-resenha.component.html',
  styleUrl: './cadastro-resenha.component.scss'
})
export class CadastroResenhaComponent implements OnInit {
  public checkoutForm : any
  private _livroService :  LivroService;
  public message : string = "";
  public alert : boolean = false;
  selectedValue: string = "";

  livros: Livros[] = []

  constructor( httpclient : HttpClient, private fb: FormBuilder) {
    this._livroService = new LivroService(httpclient);
  }

  ngOnInit(): void {

    this.popularLivros()
    this.checkoutForm = this.fb.group({
      livro: ['', Validators.required],
      resenha: ['', Validators.required],
    });
  }



  onSubmit(){
      this._livroService.postPublicacao( this.checkoutForm.get('livro').value,  this.checkoutForm.get('resenha').value,localStorage.getItem('UsuarioId') || "").subscribe(data =>
      {
        if (data.id != null){
          this.message = "Cadastro feito com Sucesso";
        }
      });

    }


     popularLivros() {
      this._livroService.getLIvros().subscribe(data => {
        this.livros = data
      })
    }
  }



