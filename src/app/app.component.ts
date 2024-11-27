import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BlockList } from 'net';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     FormsModule,
     MatButtonModule,
      CommonModule,
      MatSidenavModule,
      MatIconModule,
      RouterLink,
      MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges {


  ngOnChanges(changes: SimpleChanges): void {
    var usuarioId = localStorage.getItem('UsuarioId');
    if (usuarioId != null)
    {
      this.logado =true
    }
  }


  ngOnInit(): void {
    var usuarioId = localStorage.getItem('UsuarioId');
    if (usuarioId != null)
    {
      this.logado =true
    }
  }

  public opened: boolean = false;
  public logado: boolean = false;


  changemenu()
  {
    this.opened = !this.opened
  }
}
