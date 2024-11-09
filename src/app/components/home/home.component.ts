import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LivroService } from '../../services/livro.service';
import { Livros } from '../../models/Livros';
import { CommonModule } from '@angular/common';
import {MatSidenavModule, MatSidenavContent} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbDropdownModule,
    NgbCollapse,
    MatButtonModule,
    RouterLink,
    CommonModule,
    MatSidenavModule,
    MatSidenavContent,
    MatToolbarModule,
    MatIconModule,
    MatListModule
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})

export class HomeComponent implements OnInit {
  public livros: Livros[] = [];
  private _livroService :  LivroService;

  constructor( httpclient : HttpClient) {
    this._livroService = new LivroService(httpclient);
  }


  ngOnInit(): void {
    this.getLivros();
  }




  private getLivros() {
    this._livroService.getLIvros().subscribe(data => {
      this.livros = data;
    console.log(this.livros)

    });


  }
}

